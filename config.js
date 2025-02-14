const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    //Enter Your PRINCESS OLYA session id
SESSION_ID: process.env.SESSION_ID || '', 
    //ENTER YOUR MONGO DB URL
MONGODB: process.env.MONGODB || ""
};



