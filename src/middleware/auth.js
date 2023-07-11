exports.auth = async (req, res, next) => {
  const { token } = req.body;
  !token || token === ""
    ? res.status(401).json({ error: "Token is required" })
    : token !== "12345"
    ? res.status(401).json({ error: "Invalid token!" })
    : next();
};
