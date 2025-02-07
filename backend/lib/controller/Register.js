const database = require("../Model");
const signUp = database.RegisterDB;
const bcrypt = require('bcrypt');

const SignUpController = async (req, res) => {
    console.log(req.body);
    
        const formData = {
            name: req.body.name,
            phone: req.body.phone,
            secondPhone: req.body.secondPhone,
            carNumber: req.body.carNumber
    }

    signUp.create(formData)
    .then(data => {
        if (data != null) {
            res.send({ data: data, message: "SUCCESS" });
        } else {
            res.send({ data: null, message: "FAIL" });
        }
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });

};

module.exports = { SignUpController };