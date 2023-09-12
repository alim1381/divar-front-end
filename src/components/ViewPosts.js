import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "./PostCard";
import { useEffect, useState } from "react";
import { getAllPosts } from "../redux/posts/postsAction";
import Loader from "./shared/Loader";
import Error404 from "./shared/404";

export function ViewPosts() {
  const { loading, posts, error, createPostData, ifFinishData } = useSelector(
    (state) => state.postsState
  );
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const [dataPage, setDataPage] = useState(1);
  const [lastPost, setLastPost] = useState(null);

  const observerRef = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setDataPage((prev) => prev + 1);
    }
  });

  useEffect(() => {
    if (!ifFinishData) {
      dispatch(getAllPosts(dataPage));
    }
  }, [createPostData, dataPage]);

  useEffect(() => {
    if (lastPost) {
      observerRef.observe(lastPost);
    }
    return () => {
      if (lastPost) {
        observerRef.unobserve(lastPost);
      }
    };
  }, [lastPost]);

  if (error) return <Error404 />;

  return (
    <div className="w-2/3 max-md:w-full flex flex-col">
      <div className="w-full p-3 mt-10 grid grid-cols-3 gap-3 max-md:grid-cols-1 ">
        {posts &&
          posts.map((post) => (
            <div key={post._id} ref={setLastPost}>
              <PostCard
                user={post.userId}
                title={post.title}
                body={post.body}
              />
            </div>
          ))}
      </div>
      <div className="my-2">{loading && <Loader />}</div>
    </div>
  );
}
