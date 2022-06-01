const express = require("express");
const router = express.Router();
const Employee = require("../model/employee.model");

router.post("/employee", async(req, res)=>{

    try{
        const employee = await Employee.create(req.body);
        return res.status(201).send(employee);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/employee", async(req, res)=>{

    try{
        const employee = await Employee.find().lean().exec();
        return res.status(201).send(employee);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/employee/:id", async (req, res)=>{
    
    try{
        const employee = await Employee
        .find(req.params.id)
        .lean()
        .exec();
        return res.status(201).send(employee)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/employee/:id", async (req, res)=>{
    
    try{
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,{
               new:true
            });
        return res.send(employee)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/employee/:id", async (req, res)=>{
    
    try{
        const employee = await Employee.findByIdAndDelete(
            req.params.id
            );
        return res.send(employee)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;