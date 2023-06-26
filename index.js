const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path');


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const routes = require("./routes/server");
routes(app);



const page = require("./routes/page");
app.use('/', page);


const connectDB = require('./config/database')
connectDB()

app.listen(process.env.PORT || 3000 ,() => {
    console.log('> Server is running on http://localhost:3000');
})