const express = require('express');
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const { useReducer } = require('react');


// Create a User using: POST "/api/auth/createuser". No login required
router.get('/createuser', [
    body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', ' Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Check whether the user with this email exists already
        // let user = await User.findOne({ email: req.body.email });
        // if (user) {
        //     return res.status(400).json({ error: "Sorry a user with this email already exists" })
        // }
        // creating a new user
        const user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            username: req.body.username,
        })

        return res.status(400).json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured")
    }

})

module.exports = router 