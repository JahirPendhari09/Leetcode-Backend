const express = require('express');
const cors = require('cors');
const { connection } = require('./db');
const { problemRoute } = require('./routes/problem.route');
const runCodeRouter = require('./routes/output.route');
const { authRouter } = require('./routes/auth.route');
const app = express();
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=> {
    res.send({'message':"Hello World"})
})

app.use('/problem', problemRoute)
app.use('/run-code', runCodeRouter)
app.use('/auth', authRouter)

app.listen(process.env.port,  async()=> {
    try {
        await connection
        console.log('server is running on port:', process.env.port)
    }
    catch (error) {
        console.log('error',error)
    }
})