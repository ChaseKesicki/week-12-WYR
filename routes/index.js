const express = require('express')
const router = express.Router()
const randomWYRQuestion = require('../model/wyr_questions')  //require retrieves data from wyr_questions page

router.get('/', function(req, res, next){  //Placeholder is used because this is a JSON, and not intended to be a website
    res.send('Placeholder for home page')
})

router.get('/wyr', function(req, res, next) {
    // const wyr = {
    //     'question': 'Live in a circle house or triangle house',
    //     'answer1': 'Circle house',
    //     'answer2': 'Triangle house'
    // }

    const wyr = randomWYRQuestion()  //Grabs a question from the wyr_question page
    res.json(wyr)  //Loads random question as a JSON object
})



module.exports = router