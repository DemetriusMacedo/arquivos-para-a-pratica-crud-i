const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');


const controller = {
    index: (req, res) => {
        res.render('login')
    },
    login: (req, res) => {
        
    }
}