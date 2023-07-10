let e = require('mongoose'),
  o = async o => {
    await e
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: !0,
        useUnifiedTopology: !0,
        connectTimeoutMS: 3e4
      })
      .then(e => {
        console.log('> MongoDB connected')
      })
      ['catch'](e => {
        console.error(error.message)
      })
  }
module.exports = o
