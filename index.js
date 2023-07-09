const r = r => require(r);
const express = r('express');
const app = express();
const cors = r('cors');
const PORT = process.env.PORT || 3001;
r('./aliases');
r('dotenv').config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) =>{
  res.status(404).json({ error : 'Error 404 page not found' });
});

const routes = r('@route/server');
routes(app);
const connectDB = r('@config/database');
connectDB();

app.listen(PORT, p => {
  console.log('> Server is running on http://localhost:'+PORT);
});
