const express = require("express");
const router = express.Router();
const Employee = require("../model/employee.model");

//Crud controller

router.post("/employee", async(req, res)=>{ //Post Method to add new data to DB

    try{
        const employee = await Employee.create(req.body);
        return res.status(201).send(employee);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/employee", async(req, res)=>{ //Get all datas from DB

    try{
        const employee = await Employee.find().lean().exec();
        return res.status(201).send(employee);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/employee/:id", async (req, res)=>{ //Get single data using id from DB
    
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

router.patch("/employee/:id", async (req, res)=>{ //Update existing data from DB using id
    
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

router.delete("/employee/:id", async (req, res)=>{  //delete particular data from Db using id
    
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