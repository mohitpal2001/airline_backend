const express = require('express');
const {PORT,logger} = require('./config')

const app = express();

app.listen(PORT,()=>{
    console.log("Server is running on port "+ PORT);
    logger.info(`Successfully Server started`,{});
})
