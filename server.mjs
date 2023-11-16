import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
// const express = require('express');
// const bodyParser = require('body-parser');
// const {dirname} = require('path');
// const {fileURLToPath} = require('url');
const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send("Hello World!");
});

baseRouter.post('/add', (req, res) => {
    const { first, second } = req.body;
    
    // console.log(req.body);
    //  const { first, second } = req.body;

    const num1 = parseFloat(first);
    const num2 = parseFloat(second);
    return res.json({ "result": num1 + num2 });
    // if (!isNaN(num1) && !isNaN(num2)) {
    //     const result = num1 + num2;
    //     return res.status(200).json({ result });
    // } else {
    //     return res.status(400).json({ error: 'Invalid input. Both first and second should be valid numbers.' });
    // }
});
// baseRouter.post('/add1', (req, res) => {
//     req.
//     //res.json({ "": null });
// });
// baseRouter.get('/add', (req, res) =>{
//     res.sendFile(_dirname+"/index.html");
// });

// baseRouter.get('/subtract', (req, res) =>{
//     res.sendFile(_dirname+"/index_sub.html");
// });

baseRouter.post('/subtract', (req, res) => {
    // const { first, second } = req.body;

    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    // if (!isNaN(num1) && !isNaN(num2)) {
    //     const result = num1 - num2;
    //     return res.status(200).json({ result });
    // } else {
    //     return res.status(400).json({ error: 'Invalid input. Both first and second should be valid numbers.' });
    // }
    const { first, second } = req.body;
    return res.json({ "result": num1 - num2});
    //res.json({ "": null });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});