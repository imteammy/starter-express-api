exports.isNumber = (req, res, next) => {
    const id = req.params.id;
    if (isNaN(id) || id === undefined || id === null || id === "") {
      return res.status(400).json({ error: "Please enter a valid number" });
    }
    next();
  };