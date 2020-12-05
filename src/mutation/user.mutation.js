const faker = require("faker");
const { UserTC, UserSchema } = require("../model/user");
const resolver = function () {};
resolver.fakeData = UserTC.addResolver({
  name: "user",
  type: UserTC,
  args: { record: UserTC.getInputType() },
  resolve: async ({ source, args }) => {
    let user = new UserSchema({
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      profileImage: faker.random.image(),
    });
    return await user.save();
  },
});

module.exports = resolver;
