import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
    </article>
  ));
  return (
    <section>
      <h2>posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
