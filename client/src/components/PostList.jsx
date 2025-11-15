import PostListItem from "./PostListItem";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";

// Fetch the posts
const fetchPosts = async (pageParam, searchParams) => {
  // Convert the search params to an object
  const searchParamsObject = Object.fromEntries([...searchParams]);

  console.log(searchParamsObject);

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam, limit: 2, ...searchParamsObject },
  });
  return res.data;
};



// Post list component
const PostList = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  // Fetch the posts
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["posts", searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  console.log(data);

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  if (status === "loading") return "Loading...";

  if (status === "error") return "Something went wrong!";

  console.log(data);

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p>
          <b>All posts loaded!</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
