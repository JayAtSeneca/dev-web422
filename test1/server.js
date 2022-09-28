const express = require('express');
const app = express();
const port = 3000||process.env.PORT;

app.get('/api/employees',(req,res)=>{
    res.json({message: "all employees"});
});
app.get('/api/employees/:num', (req,res)=>{
    res.json({message: `employee number ${req.params.num}`});
});

app.delete('/api/employees/:num', (req,res)=>{
    res.json({message: `removed employee with number: ${req.params.num}`});
});

app.post('/api/employees',(req,res)=>{
    res.json({message: `added new employee: ${JSON.stringify(req.body.EmployeeInfo)}`});
});

app.put('/api/employees/:num',(req,res)=>{
    res.json({message: `message: "employee with number: ${num} updated to: ${JSON.stringify(req.body.EmployeeInfo)}`});
});
