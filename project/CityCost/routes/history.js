//const router = require('express').Router();
const app = require('express');
const router = app.Router();
const mongoose = require('mongoose');
const history= require('../models/history-model');

var curuserId =""
const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');//auth/login
    } else {
        curuserId=req.user._id;
        next();
    }
};

router.get('/', authCheck, function(req, res,next) {
    history.find({userId:curuserId})
        .then (function(doc)
        {res.render('history',{histdata: doc, user:req.user});

        });
});


module.exports = router;