exports.auth = async (req, res, next) => {
    const { token } = req.body;
  
    if (!token || token === "" || token === undefined) {
      return res.status(200).json( { error: "Token is required" } );
    }
  
    if (token === "12345") {
      return next();
    } else {
      return res.json( { error: "Invalid token!" } );
    }
  };