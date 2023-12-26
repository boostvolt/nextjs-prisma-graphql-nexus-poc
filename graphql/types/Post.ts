import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Post } from "nexus-prisma";
import { UserType } from "./User";

export const PostType = objectType({
  name: Post.$name,
  description: Post.$description,
  definition(t) {
    t.field(Post.id);
    t.field(Post.title);
    t.field(Post.content);
    t.nullable.field("author", {
      type: UserType,
      resolve: (parent, _args, ctx) =>
        ctx.prisma.post
          .findUnique({
            where: { id: Number(parent.id) },
          })
          .author(),
    });
  },
});

export const PostQueries = extendType({
  type: "Query",
  definition(t) {
    t.field("singlePost", {
      type: PostType,
      args: {
        postId: nonNull(stringArg()),
      },
      resolve: (_, args, ctx) => {
        return ctx.prisma.post.findUnique({
          where: { id: Number(args.postId) },
        });
      },
    });

    t.list.field("allPosts", {
      type: PostType,
      resolve: (_, _args, ctx) => {
        return ctx.prisma.post.findMany();
      },
    });
  },
});

export const PostMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createPost", {
      type: PostType,
      args: {
        title: nonNull(stringArg()),
        content: stringArg(),
        authorEmail: nonNull(stringArg()),
      },
      resolve: (_, { title, content, authorEmail }, ctx) => {
        return ctx.prisma.post.create({
          data: {
            title,
            content,
            author: {
              connect: { email: authorEmail },
            },
          },
        });
      },
    });

    t.nullable.field("deletePost", {
      type: PostType,
      args: {
        postId: stringArg(),
      },
      resolve: (_, { postId }, ctx) => {
        return ctx.prisma.post.delete({
          where: { id: Number(postId) },
        });
      },
    });
  },
});
