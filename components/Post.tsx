import Link from "next/link";
import { FC } from "react";
import { AllPostsQuery } from "../graphql/generated/collection";

type ArrElement<ArrType extends readonly unknown[]> =
  ArrType extends readonly (infer ElementType)[] ? ElementType : never;

interface PostPorps {
  post: NonNullable<ArrElement<NonNullable<AllPostsQuery["allPosts"]>>>;
}

export const Post: FC<PostPorps> = ({ post }) => (
  <Link href="/post/[id]" as={`/post/${post.id}`}>
    <a>
      <h2>{post.title}</h2>
      <small>By {post.author?.name}</small>
      <p>{post.content}</p>
    </a>
  </Link>
);
