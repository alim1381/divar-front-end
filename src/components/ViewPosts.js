import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "./PostCard";
import { useEffect } from "react";
import { getAllPosts } from "../redux/posts/postsAction";
import Loader from "./shared/Loader";
import Error404 from "./shared/404";

export function ViewPosts() {
  const { loading, posts, error, createPostData } = useSelector(
    (state) => state.postsState
  );
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (user) {
      dispatch(getAllPosts());
    // }
  }, [createPostData]);

  if (loading) return <Loader />;
  if (error) return <Error404 />;

  return (
    <div className="w-2/3 p-3 mt-10 grid grid-cols-3 gap-3 max-md:grid-cols-1 max-md:w-full">
      {posts &&
        posts.map((post) => (
          <PostCard key={post._id} user={post.userId} title={post.title} body={post.body} />
        ))}
    </div>
  );
}
