// config.js

const auth = async (req, res, next) => {
    const { token } = req.body;
    if (!token) {
      res.status(401).json({ error: "Token is required" });
    }
    if (token !== "12345") {
      return res.status(401).json({ error: "Invalid token!" });
    } else {
      next();
    }
  };
  
  const connectDB = async () => {
    await mongoose
      .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 30000,
      })
      .then(() => {
        console.log("> MongoDB connected");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  
  connectDB();
  
  const Clear = (req, res) => {
    _nodeNC.flushAll();
    res.status(200).json({message : 'Cleared!'});
  }
  