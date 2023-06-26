const { LatensSkills }  = require('../../models')

exports.getAll = async (req, res) => {
  try {
    const skills = await LatensSkills.find({});
    if (skills.length === 0 ){
      return res.json({message : "LatensSkills is empty."})
    }
    return res.send(skills);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.getID = async (req, res) => {
  try {
    const skill = await LatensSkills.findOne({ name: req.body.name });
    return res.json(skill);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const data = req.body;
    delete data.token;
    const filter = { _id : data.id };
    const update = { $set: data };
    const updateRusult = await LatensSkills.findOneAndUpdate(filter, update, { new: true }
    );

    if(!updateRusult){
      return res.status(400).send("Update LatensSkill fail");
    }
    return res.json({ success: "Update LatensSkill success", message: updateRusult });

  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await LatensSkills.findOneAndDelete({ name: req.body.name });
    return res.json("Delete LatensSkill success");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.add = async (req, res) => {
  try {
    const skill = new LatensSkills(req.body);
    await skill.save();
    return res.json({ success: "Add LatensSkill success", message: skill });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
