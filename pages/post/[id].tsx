import Router, { useRouter } from "next/router";
import {
  useDeletePostMutation,
  useSinglePostQuery,
} from "../../graphql/generated/collection";

function Post() {
  const queryPostId = useRouter().query.id ?? "";
  const postId = typeof queryPostId === "string" ? queryPostId : "";
  const { loading, error, data } = useSinglePostQuery({
    variables: { postId },
  });
  const [deletePost] = useDeletePostMutation();

  if (loading) {
    return <div className="page">Loading ...</div>;
  }
  if (error) {
    return <div className="page">Error: {error.message}</div>;
  }

  const title = data && data.singlePost ? data.singlePost.title : "";
  const authorName =
    data && data.singlePost && data.singlePost.author
      ? data.singlePost.author.name
      : "Unknown author";
  const content = data && data.singlePost ? data.singlePost.content : "";

  return (
    <div className="page">
      <h2>{title}</h2>
      <p>By {authorName}</p>
      <p>{content}</p>
      <button
        onClick={async () => {
          await deletePost({
            variables: {
              postId,
            },
          });

          Router.push("/");
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Post;
