module.exports = app => {
    const controller = require('../controller/Register');

    const express = require('express');
    const router = express.Router();

    router.post("/register", controller.SignUpController);

    app.use('/api', router);
}