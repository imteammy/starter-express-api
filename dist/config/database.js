let e = require('mongoose'),
  o = async o => {
    try {
      await e.connect(process.env.MONGODB_URL, {
        useNewUrlParser: !0,
        useUnifiedTopology: !0,
        connectTimeoutMS: 3e4
      }),
        console.log('> MongoDB connected')
    } catch (s) {
      console.error(s.message), process.exit(1)
    }
  }
module.exports = o
