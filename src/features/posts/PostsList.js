import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  selectAllStatus,
  selectAllError,
  fetchPosts,
} from "./postSlice";
import { useEffect } from "react";
import PostsEcxerpt from "./PostsEcxerpt";
import Loader from "../../Globals/Loader";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(selectAllStatus);
  const error = useSelector(selectAllError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <Loader />;
  } else if (postsStatus === "succeeded") {
    const orderedPost = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPost.map((post) => (
      <PostsEcxerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <section>
      <h2>posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
