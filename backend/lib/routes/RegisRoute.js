module.exports = app => {
    const controller = require('../controller/Register');

    const express = require('express');
    const router = express.Router();

    router.post("/register", controller.SignUpController);
    // 전화 리디렉션 Webhook API (Twilio 웹훅)
    // router.post('/twilio-webhook', controller.twilioWebhook);
    
    app.use('/api', router);
}