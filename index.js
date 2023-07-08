const r = (r) => require(r);
const express = r('express');
const app = express();
const cors = r('cors');
const path = r('path');
const PORT = process.env.PORT || 3001;
require('./aliases');
require('dotenv').config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = r('@route/server');
routes(app);
const connectDB = r('@config/database');
connectDB();

app.listen(PORT, () => {
  console.log('> Server is running on http://localhost:'+PORT);
});
