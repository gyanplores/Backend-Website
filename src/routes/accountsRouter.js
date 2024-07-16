import { Router } from 'express';

import mongoose from 'mongoose';
import Users from '../models/Users.js';

const accountsRouter = Router();

accountsRouter.post("/create-account", async (req, res) =>{
    console.log("POST request to create user received...");

    try{
        const verify = await Users.findOne({userName: req.body.userName});

        if(req.body.userName === "" && req.body.password === "") {
            res.statusMessage = "Input field is empty..."
            res.status(500).end();
        }else if(verify.userName){
            res.statusMessage = "Username already exists..."
            res.status(500).end();
        }else{
            const newAccount = await Users.create({
                userName: req.body.userName,
                password: req.body.password
            });
            
            console.log(newAccount);
            res.sendStatus(200);
        }

    }catch(err){
        console.error(err);
        res.sendStatus(500);
    }
});

accountsRouter.post("/login-verify", async (req, res) =>{
    try{
        const verify = await Users.findOne({userName: req.body.userName});

        if(verify.password === req.body.password ){
            res.statusMessage = "Login Successful";
            res.status(200).end();
            console.log("SUCCESS: Login successful");
        }else{
            res.statusMessage = "Password is incorrect";
            res.status(500).end;
            console.log("ERROR: Incorrect Password");
            
        }

    }catch(err){
        res.statusMessage = "Username does not exist";
        res.status(500).end();
        console.log("ERROR: Username Does not Exist");
        
    }

});

export default accountsRouter;