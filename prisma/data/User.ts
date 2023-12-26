import { Prisma } from "@prisma/client";

export const User: Prisma.UserCreateInput[] = [
  {
    name: "Jan Kott",
    email: "jan.kott@prisma.com",
    posts: {
      create: [
        {
          title: "Post 1",
          content: "https://prisma.com/posts/1",
        },
      ],
    },
  },
];
