const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path');

require('./aliases');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


const routes = require("@route/server");
routes(app);



const connectDB = require('@config/database')
connectDB()

app.listen(process.env.PORT || 3000, () => {
    console.log('> Server is running on http://localhost:3000');
})