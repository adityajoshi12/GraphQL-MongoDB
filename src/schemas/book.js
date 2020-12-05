const { BookTC } = require("../model/book");
const { BookSchema } = require("../model/book");

BookTC.addResolver({
  name: "create",
  kind: "mutation",
  type: BookTC.getResolver("createOne").getType(),
  args: BookTC.getResolver("createOne").getArgs(),
  resolve: async ({ source, args, context, info }) => {
    const book = await BookSchema.create(args.record);

    return {
      record: book,
      recordId: BookTC.getRecordIdFn()(book),
    };
  },
});

const BookQuery = {
  bookById: BookTC.getResolver("findById"),
  bookByIds: BookTC.getResolver("findByIds"),
  bookOne: BookTC.getResolver("findOne"),
  bookMany: BookTC.getResolver("findMany"),
  bookCount: BookTC.getResolver("count"),
  bookConnection: BookTC.getResolver("connection"),
  bookPagination: BookTC.getResolver("pagination"),
};

const BookMutation = {
  bookWithFile: BookTC.getResolver("create"),
  bookCreateOne: BookTC.getResolver("createOne"),
  bookCreateMany: BookTC.getResolver("createMany"),
  bookUpdateById: BookTC.getResolver("updateById"),
  bookUpdateOne: BookTC.getResolver("updateOne"),
  bookUpdateMany: BookTC.getResolver("updateMany"),
  bookRemoveById: BookTC.getResolver("removeById"),
  bookRemoveOne: BookTC.getResolver("removeOne"),
  bookRemoveMany: BookTC.getResolver("removeMany"),
};

module.exports = { BookQuery: BookQuery, BookMutation: BookMutation };
