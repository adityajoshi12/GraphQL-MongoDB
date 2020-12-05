const mongoose = require("mongoose");
const { composeWithMongoose } = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    profileImage: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = {
  UserSchema: mongoose.model("users", User),
  UserTC: composeWithMongoose(mongoose.model("users", User)),
};
