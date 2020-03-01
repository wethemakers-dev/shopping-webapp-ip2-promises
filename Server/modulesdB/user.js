const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true
  },
  userEmail: {
    type: String,
    require: true
  },
  userPassword: {
    type: String,
    require: true
  }
});

const shoppingSchema = new mongoose.Schema({
  title: {
    type: String,
    require
  },
  price: {
    type: Number,
    require
  },
  catgegory: {
    type: String,
    require
  },
  user_id: String,
  wishListCecked: { type: Boolean, default: false }
});
const wishListSchema = new mongoose.Schema({
  title: {
    type: String,
    require
  },
  price: {
    type: Number,
    require
  },
  catgegory: {
    type: String,
    require
  },
  user_id: String
});

userSchema.methods.generateHashCode = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.userPassword);
};

module.exports.User = mongoose.model("User", userSchema);
module.exports.Shopping = mongoose.model("Shopping", shoppingSchema);
module.exports.wishList = mongoose.model("wishList", wishListSchema);
