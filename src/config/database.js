const mongoose = require('mongoose');

const connectDB = async p => {
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000
  })
    .then(() => {
      console.log('> MongoDB connected');
    }).catch((err) => {
      console.error(err.message);
    });
};

module.exports = connectDB;