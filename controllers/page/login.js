exports.login = async (req, res, next) => {
    const { username , password } = req.body;

    try {
        if(!username || !password) {
            return res.send({status : 400, message : "Username and password is required!"});
        }
        if(username == "admin" && password == "123") {
            return  res.send({status : 200, message: "Login success"})
        } else {
            return res.json({status : 400, message : 'Username or Password is incorrect.'})
        }
        

    } catch (error) {
        return res.send(error.message)
    }
}