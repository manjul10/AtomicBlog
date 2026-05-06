import AddPost from "./AddPost";
import PostList from "./PostList";

const Posts = ({ posts, setPosts }) => {

  const handlePosts = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <AddPost onAdd={handlePosts} />
      <PostList posts={posts} />
    </div>
  );
};

export default Posts;
