const usersModel = require("./../models/users");

exports.getUsers = async (req, res) => {
  const users = await usersModel.find();
  res.json(users);
};
