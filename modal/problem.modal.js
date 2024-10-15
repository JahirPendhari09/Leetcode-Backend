const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
    id: Number,
    input: mongoose.Schema.Types.Mixed, 
    output: mongoose.Schema.Types.Mixed, 
    explanation: String
}, { _id: false });

const problemSchema = new mongoose.Schema({
    name: String,
    difficulty: String,
    type: String,
    description: String,
    value: String,
    examples: [exampleSchema],
    constraints: [String],
    boilerPlates: [
        {
            language: String,
            boilerplate: String
        }
    ]
},{ versionKey: false});

const ProblemModal = mongoose.model('Problem', problemSchema);

module.exports = { ProblemModal };
