const express = require('express');
const { RegisterModal } = require('../modal/auth.modal');
const authRouter = express.Router();
const bcrypt = require('bcrypt');
const { sendMailResponse } = require('./email');
const saltRounds = 10;

authRouter.post('/login', async(req,res) => {
    const {username, password} = req.body;
    try{
        const user =  await RegisterModal.findOne({ $or: [
            { username: username }, 
            { email: username }
        ]})

        if(user) {
            bcrypt.compare(password, user.password, async(err, result) => {
                if(result) {
                    res.status(200).send({'message': "Login Successful"})
                }else{
                    res.status(400).send({'error': 'Incorrect password'})
                }
            });
        }else{
            res.status(400).send({'message':'user not found'})
        }

    }catch(err){
        res.status(500).send({'error':err})
    }
})

authRouter.post('/register', async(req,res) => {
    const {username, password, email} = req.body;
    try{
        bcrypt.hash(password, saltRounds, async(err, hash) => {
            if(hash) {
                const newUser =  new RegisterModal({
                    username, password: hash, email
                })
                await newUser.save()
                sendMailResponse(email)
                res.status(200).send({'message': `New user Successfully registerd.`, user: newUser})
            }else{
                res.status(400).send({'error': 'something went wrong'})
            }
        })
    }catch(err){
        res.status(500).send({'error':err})
    }
})


module.exports = { authRouter }