const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/users_crud_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

module.exports = mongoose.connection;
