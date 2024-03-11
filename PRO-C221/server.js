const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port: 4654,
    host: "smtp.gmail.com",
    auth:{
        user:'shashwatshukla80@gmail.com',
        pass:'fgrw afnl bmpj dhmk',
    },
    secure:true,
});

server.listen(process.env.PORT || 3030);