const express = require('express');
const { RegisterModal } = require('../modal/auth.modal');
const authRouter = express.Router();
const bcrypt = require('bcrypt');
const { sendMailResponse, sendOtp } = require('./email');
const { OtpModal } = require('../modal/otp.modal');
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
                    res.status(200).send({'message': "Login Successful", "user": user })
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
                await sendMailResponse(email)
                res.status(200).send({'message': `New user Successfully registerd.`, user: newUser})
            }else{
                res.status(400).send({'error': 'something went wrong'})
            }
        })
    }catch(err){
        res.status(500).send({'error':err})
    }
})

authRouter.post('/send-otp', async(req,res) => {
    const {username, email} = req.body;
    try{
        const newOtp = Math.floor(1000 + Math.random() * 9000);
        console.log(newOtp)
        const otp =  new OtpModal({
            username,
            otp: newOtp,
            email,
            date: new Date()
        })
        console.log(otp)
        await otp.save()
        await sendOtp(email,newOtp)
        res.status(200).send({'message':"OTP has been sent to your registered email address"})
    }catch(err){
        res.status(500).send({'error':'Failed to send OTP. Please try again.'})
    }
})

authRouter.post('/verify-otp', async(req,res) => {
    const {email, otp} = req.body;
    try{
        const otpRecord = await OtpModal.findOne({ otp: otp, email });
        if(otpRecord){
            const otpTime = new Date(otpRecord.date);
            const currentTime = new Date();
            const timeDiff = (currentTime - otpTime) / (1000 * 60);
            if (timeDiff <= 5) {
                const updatedUser = await RegisterModal.findOneAndUpdate(
                    { email },
                    { isEmailVerified: true }, 
                    { new: true }  
                );

                if (updatedUser) {
                    res.status(200).send({
                        'message': "OTP verified successfully.",
                        'user': updatedUser,
                    });
                } else {
                    res.status(404).send({ 'message': "User not found." });
                }
            } else {
                res.status(400).send({ 'message': "OTP has expired. Please request a new one." });
            }
        }else{
            res.status(400).send({'message': "Invalid OTP. Please check the OTP and try again."})
        }        
    }catch(err){
        res.status(500).send({'error': "Failed to verify OTP. Please try again."})
    }
})


authRouter.get('/logout', (req,res) => {
    try{
        res.status(200).send({'message': "Logout Successful"})
    } catch(err) {
        res.status(500).send({'error': err})        
    }
})

module.exports = { authRouter }