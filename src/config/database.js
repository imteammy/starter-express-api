const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000,
    })
    .then(() => {
      console.log("> 💻 [ Database ] MongoDB connected");
    })
    .catch((err) => {
      console.error(err.message);
    });
};

module.exports = connectDB;
