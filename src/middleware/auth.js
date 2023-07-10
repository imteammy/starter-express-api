exports.auth = async (req, res, next) => {
  const { token } = req.body;
  if (!token || token === "")
    res.status(200).json({ error: "Token is required" });
  if (token === "12345") next();
  if (token != "12345") res.json({ error: "Invalid token!" });
};
