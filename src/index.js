const express = require('express');
const {PORT,logger} = require('./config')
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);

app.listen(PORT,()=>{
    console.log("Server is running on port "+ PORT);
    logger.info(`Successfully Server started`,{});
})
