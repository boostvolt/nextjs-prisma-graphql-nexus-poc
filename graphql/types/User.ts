import { extendType, nonNull, objectType, stringArg } from "nexus";
import { User } from "nexus-prisma";
import { PostType } from "./Post";

export const UserType = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id);
    t.field(User.name);
    t.field(User.email);
    t.list.field("posts", {
      type: PostType,
      resolve: (parent, _args, ctx) =>
        ctx.prisma.user
          .findUnique({
            where: { id: Number(parent.id) },
          })
          .posts(),
    });
  },
});

export const UserMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.field("signupUser", {
      type: UserType,
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
      },
      resolve: (_, { name, email }, ctx) => {
        return ctx.prisma.user.create({
          data: {
            name,
            email,
          },
        });
      },
    });
  },
});
