exports.auth = async (req, res, next) => {
  const { token } = req.body;
  if (!token || token === "") return res.status(401).json({ error: "Token is required" });
  if (token === "12345") next();
  if (token != "12345") return res.status(401).json({ error: "Invalid token!" });
};
