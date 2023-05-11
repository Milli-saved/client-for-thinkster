import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsEcxerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
    </article>
  );
};

export default PostsEcxerpt;
