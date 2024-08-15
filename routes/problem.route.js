const express = require('express');
const { ProblemModal } = require('../modal/problem.modal');

const problemRoute = express.Router();

problemRoute.post('/new-problem', async(req,res) => {
    try{
        const { name, difficulty, type, description, examples, constraints, boilerPlates } = req.body;
        const newProblem = new ProblemModal({
            name,
            difficulty,
            type,
            description,
            examples,
            constraints,
            boilerPlates
        });
        await newProblem.save();

        res.status(200).send({'message':'New problem has been added successfully'})
    }
    catch(err) {
        res.status(500).send({'error':err})
    }
})

problemRoute.post('/generate-problem', async(req,res) => {
    const { name } = req.body;
    try{
        const problem = await ProblemModal.find({'name':name})
        if(problem && problem.length > 0) {
            res.status(200).send(problem)
        }else{
            res.status(400).send({'message':'problem not found'})
        }
    }
    catch(error) {
        res.status(500).send({'message':error})
    }
});


module.exports = { problemRoute }