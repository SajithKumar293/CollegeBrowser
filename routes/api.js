const express = require('express');
const router = express.Router();
const College = require('../models/college.model');
const Student = require('../models/student.model');

//ROUTES
router.get('/college_details', (req, res) => {
    if (!req.body)
        return res.status(400).send({msg: "Not Specified any item to find!"});
    
    const id = req.body.id;
    College.findById(id).then(data => {
        if(!data)
            res.status(404).send({msg:"Not found user with specified id."});
        else 
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({msg:err});
    });
});

router.get('/student_details', (req, res) => {
    if (!req.body)
        return res.status(400).send({msg: "Not Specified any item to find!"});
    
    const id = req.body.id;
    Student.findById(id).then(data => {
        if(!data)
            res.status(404).send({msg:"Not found user with specified id."});
        else 
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({msg:err});
    });
});

router.post('/get_students', (req, res) => {
    if (!req.body)
        return res.status(400).send({msg: "Not Specified any item to find!"});
    const id = req.body.arg1;
    Student.find({"college_id":id}).then(data => {
        if(!data)
            res.status(404).send({msg:"Not found user with specified id."});
        else 
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({msg:err});
    });
});    

router.post('/colleges', (req, res) => {
    if (!req.body) 
        return res.status(400).send({msg: "Not Specified any item to find!"});

    const states = req.body.arg1;
    const courses = req.body.arg2;
    College.find({ $and: [{"courses":{ $in: courses }},{"state":{$in: states}}]}).then(data => {
        if(!data)
            res.status(404).send({msg:"Not found colleges with specified data"});
        else 
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({msg:err});
    });    
});

router.post('/similarcolleges', (req, res) => {
    if (!req.body) 
        return res.status(400).send({msg: "Not Specified any item to find!"});
    console.log(req.body);
    const city = req.body.arg1;
    //const courses = req.body.arg2;

    College.find({"city":city}).then(data => {
        if(!data)
            res.status(404).send({msg:"Not found colleges with specified data"});
        else 
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({msg:err});
    });    
});

router.get('/allcolleges', (req, res) => {
        College.find().then(data => {
            if(!data)
                res.status(404).send({msg:"Not found colleges with specified data"});
            else 
                res.send(data);
                console.log(req.body);
        })
        .catch(err => {
                res.status(500).send({msg:err});
        });   
        return; 
});    
module.exports = router;
