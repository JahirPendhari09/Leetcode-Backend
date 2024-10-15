const { spawn } = require('child_process');
const path = require('path');

const generateJavaCode = (problemName, code, params) => {
    
    const formatCharArray = (array) => {
        return `{${array.map(c => `'${c}'`).join(', ')}}`;
    };
    switch( problemName ) {
        case 'twoSum': {
            return  `
            import java.util.*;
            public class Example {
                ${code}
                public static void main(String[] args) {
                    Example example = new Example();
                    int[] nums = {${params.nums}};
                    int target = ${params.target};
                    List<Number> result = example.twoSum(nums, target);
                    if (result != null) {
                        System.out.print(result);
                    } else {
                        System.out.print("No solution found.");
                    }
                }
            }
        `
        }

        case 'reverseString' : {
            return  `
            import java.util.*;
            public class Example {
                ${code}
                public static void main(String[] args) {
                    Example example = new Example();
                    char[] nums = ${formatCharArray(params.nums)};
                    List<String> result = example.reverseString(nums);
                    if (result != null) {
                        System.out.print(result);
                    } else {
                        System.out.print("No solution found.");
                    }
                }
            }
        `
        }

        case 'nextGreaterElement':{
            return `
            import java.util.*;
            public class Example {
                ${code}
                public static void main(String[] args) {
                    Example example = new Example();
                    int[] nums1 = {${params.nums1}};
                    int[] nums2 = {${params.nums2}};
                    List<Number> result = example.nextGreaterElement(nums1, nums2);
                    if (result != null) {
                        System.out.print(result);
                    } else {
                        System.out.print("No solution found.");
                    }
                }
            }
        `
        }

        case 'missingNumber' : {
            return  `
            import java.util.*;
            public class Example {
                ${code}
                public static void main(String[] args) {
                    Example example = new Example();
                    int[] nums = {${params.nums}};
                    int result = example.missingNumber(nums);
                    System.out.print(result);
                }
            }
        `
        }

        case 'hasCycle' : {
            return  `
            import java.util.*;

            class ListNode {
                int val;
                ListNode next;
                ListNode(int x) {
                    val = x;
                    next = null;
                }
            }
                public class Example {
                public static void main(String[] args) {
                    Example example = new Example();
                    int pos = ${params.pos};
                    int[] nums = {${params.head}};
                    ListNode head = createLinkedList(nums, pos);
                    if (head != null && pos >= 0 && pos < nums.length) {
                        ListNode cycleStart = head;
                        while (cycleStart.next != null) {
                            cycleStart = cycleStart.next;
                        }
                        ListNode cycleNode = head;
                        for (int i = 0; i < pos; i++) {
                            cycleNode = cycleNode.next;
                        }
                        cycleStart.next = cycleNode;
                    }
                    boolean result = example.hasCycle(head);
                    System.out.print(result);
                }

                private static ListNode createLinkedList(int[] nums, int position) {
                    if (nums == null || nums.length == 0 || position < 0 || position >= nums.length) {
                        return null;
                    }
                    ListNode dummy = new ListNode(0);
                    ListNode current = dummy;
                    for (int i = position; i < nums.length; i++) {
                        current.next = new ListNode(nums[i]);
                        current = current.next;
                    }
                    return dummy.next;
                }

            
                ${code}
            }
        `
        }

        case 'rotate': {
            return `
            import java.util.*;
            public class Example {{
                ${code}
                public static void main(String[] args) {{
                    Example example = new Example();
                    int[] nums = ${str(kwargs['nums']).replace('[','{').replace(']','}')};
                    int k = ${kwargs['k']};
                    int[] result = example.rotate(nums,k);
                    if (result != null) {{
                        System.out.print("[");
                        for (int i = 0; i < result.length; i++) {{
                            System.out.print(result[i]);
                            if (i < result.length - 1) {{
                                 System.out.print(", ");
                            }}
                        }}
                        System.out.print("]");
                    }} else {{
                        System.out.print("No solution found.");
                    }}
                }}
            }}
        `}
    case 'sortArray' :  {
        return `
        import java.util.*;
        public class Example {{
            ${code}
            public static void main(String[] args) {{
                Example example = new Example();
                int[] nums = ${str(kwargs['nums']).replace('[','{').replace(']','}')};
                int[] result = example.sortArray(nums);
                if (result != null) {{
                    System.out.print("[");
                    for (int i = 0; i < result.length; i++) {{
                        System.out.print(result[i]);
                        if (i < result.length - 1) {{
                            System.out.print(", ");
                        }}
                    }}
                    System.out.print("]");
                }} else {{
                    System.out.print("No solution found.");
                }}

            }}
        }}
        `}
        default : {
            return 'Problem not found'
        }
    }  
};



const processOutput = (output) => {
    // Check for null or undefined values
    if (output === null || output === undefined) {
        return output; // Return null or undefined as is
    }

    // Check if output is an integer
    if (/^-?\d+$/.test(output)) {
        return parseInt(output, 10);
    }

    // Check if output is a floating-point number
    if (/^-?\d+\.\d+$/.test(output)) {
        return parseFloat(output);
    }

    // Check if output is a boolean
    if (output === "true" || output === "false") {
        return output === "true";
    }

    // Check if output is an array
    try {
        let parsedArray = JSON.parse(output);
        if (Array.isArray(parsedArray)) {
            return parsedArray;
        }
    } catch (e) {
        // Not a valid JSON array
    }
    // Check if output is an object
    try {
        let parsedObject = JSON.parse(output);
        if (typeof parsedObject === "object" && !Array.isArray(parsedObject)) {
            return parsedObject;
        }
    } catch (e) {
        // Not a valid JSON object
    }
    // If none of the above, return as a string
    return output;
}

const executeJavaCode = async (fileName, input) => {
    const cleanError = (error) => {
        // Remove the file path and line number details from the error message
        return error
            .split('\n')
            .filter(line => !line.includes(fileName))
            .map(line => line.replace(/^[^:]+:\d+: /, '').trim())
            .join('\n')
            .trim();
    }

    return new Promise((resolve, reject) => {
        // Initialize variables to store outputs and errors
        let compileError = '';
        let runOutput = '';
        let runError = '';

        // Compile the Java code
        const compileProcess = spawn('javac', [fileName]);

        compileProcess.stderr.on('data', (data) => {
            compileError += data.toString();
        });

        compileProcess.on('close', (compileCode) => {
            if (compileCode === 0) {
                const className = path.basename(fileName, '.java');
                const directory = path.dirname(fileName);

                // Run the compiled Java program from its directory
                const runProcess = spawn('java', ['-cp', directory, className]);

                runProcess.stdout.on('data', (data) => {
                    runOutput += data.toString().trim();
                });

                runProcess.stderr.on('data', (data) => {
                    runError += data.toString();
                });

                runProcess.on('close', (runCode) => {
                    if (runCode === 0 && runOutput) {
                        console.log(runOutput ,'runOutput')
                        let output = processOutput(runOutput);

                        resolve({ input, output: output });
                    } else {
                        let error = cleanError(runError || 'Java execution failed');
                        resolve({ input, error, output: '' });
                        // resolve({ input, error: runError || 'Java execution failed', output: '' });
                    }
                });
            } else {
                // resolve({ input, error: compileError || 'Java compilation failed', output: '' });
                let error = cleanError(compileError || 'Java compilation failed');
                resolve({ input, error, output: '' });
            }
        });
    });
}

module.exports = { generateJavaCode, executeJavaCode }