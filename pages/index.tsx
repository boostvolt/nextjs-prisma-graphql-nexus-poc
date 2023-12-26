import { Post } from "../components/Post";
import { useAllPostsQuery } from "../graphql/generated/collection";
import { nonNullish } from "../utils/filter";

export default function Blog() {
  const { loading, error, data } = useAllPostsQuery({
    fetchPolicy: "cache-and-network",
  });

  if (loading) {
    return <div className="page">Loading ...</div>;
  }
  if (error) {
    return <div className="page">Error: {error.message}</div>;
  }
  if (data && data.allPosts) {
    return (
      <div className="page">
        <h1>All Posts</h1>
        <main>
          {data.allPosts.filter(nonNullish).map((post) => (
            <div key={post?.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    );
  }
}
