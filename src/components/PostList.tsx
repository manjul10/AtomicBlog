import { usePost } from "./context/PostContext";
import { useTheme } from "./context/ThemeContext";

const PostList = () => {
  const { theme } = useTheme();

  const { searchedPosts } = usePost();

  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {searchedPosts.map((post) => (
        <div key={post.id} className="content-section">
          <h2 className="text-xl font-bold mb-2 text-text-strong font-serif">
            {post.title}
          </h2>
          <p className="text-text-muted">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
