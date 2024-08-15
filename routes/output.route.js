const express = require('express');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const { generateJavaCode, executeJavaCode } = require('../code-generators/java_generator');
const { generateJavascriptCode } = require('../code-generators/javascrip_generator');

const runCodeRouter = express.Router();


runCodeRouter.post('/', async (req, res) => {
    try {
        const { language, code, problem, function: func } = req.body;
        const examples = problem.examples;

        if (!language || !code) {
            return res.status(400).json({ error: 'Missing language or code' });
        }

        const baseDir = __dirname;

        const filePaths = {
            javascript: path.join(baseDir, 'script.js'),
            python: path.join(baseDir, 'script.py'),
            java: path.join(baseDir, 'Example.java')
        };

        const fileName = filePaths[language];

        if (!fileName) {
            return res.status(400).json({ error: 'Unsupported language' });
        }

        const results = [];

        for (const example of examples) {
            const { input } = example;
            const { nums, target, nums1, nums2, head, pos } = input;
            const problemName = func.name;

            if (language === 'javascript') {
                try {
                    const jsCode = generateJavascriptCode(problemName, code, { nums, target, nums1, nums2, head, pos });
                    // Execute the JavaScript code using vm
                    const script = new vm.Script(jsCode);
                    const context = vm.createContext({ result: null });
                    script.runInContext(context);
                    // Access the result from the context
                    const result = context.result;
                    results.push({ input, output: result });
                } catch (error) {
                    results.push({ input, error: error.toString(), output: '' });
                    break;
                }
            } else if (language === 'python') {
                try {
                    fs.writeFileSync(fileName, code);
                    delete require.cache[require.resolve('./script.py')];
                    const script = require('./script.py');

                    const functionMap = {
                        'two_sum': () => script.two_sum(JSON.stringify(nums), target),
                        'reverse_string': () => script.reverse_string(JSON.stringify(nums)),
                        'next_greater_element': () => script.next_greater_element(nums1, nums2),
                        'missing_number': () => script.missing_number(nums),
                        'has_cycle': () => script.has_cycle(head)
                    };

                    if (functionMap[problemName]) {
                        const result = functionMap[problemName]();
                        results.push({ input, output: result });
                    } else {
                        results.push({ input, error: `Function for ${problemName} not defined`, output: '' });
                    }
                } catch (error) {
                    results.push({ input, error: error.toString(), output: '' });
                    break;
                }
            } else if (language === 'java') {
                const updatedCode = generateJavaCode(problemName, code, { nums, target, nums1, nums2, head, pos });
                fs.writeFileSync(fileName, updatedCode);
                try {
                    const result = await executeJavaCode(fileName, input);
                    results.push(result);
                    if(result.error) break;
                } catch (error) {
                    results.push({ input, error: error.toString(), output: '' });
                    break;
                }

            }
        }

        // Clear the file content
        fs.writeFileSync(fileName, '');
        res.status(200).json({ results });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

module.exports = runCodeRouter;
