exports.auth = async (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    return res.status(401).json({ error: "Token is required" });
  }
  if (token === "12345") {
    return next();
  } else {
    return res.status(401).json({ error: "Invalid token!" });
  }
};