import { connect } from 'mongoose';
let URL = 'mongodb+srv://peerawat:YDCOyOKDb1LEyUV8@nodedev.fgnykzv.mongodb.net/ROV'
const connectDB = async () => {
  await connect(URL, {
    connectTimeoutMS: 30000
  })
    .then(() => {
      console.log('> 💻 [ Database ] MongoDB connected');
    }).catch((err) => {
      console.error(err.message);
    });
};

export default connectDB;