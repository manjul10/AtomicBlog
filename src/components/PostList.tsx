import { usePost } from "./context/PostContext";

const PostList = () => {
  const { searchedPosts, deletePost } = usePost();

  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {searchedPosts.map((post) => (
        <div key={post.id} className="content-section">
          <h2 className="text-xl font-bold mb-2 text-text-strong font-serif">
            {post.title}
          </h2>
          <p className="text-text-muted">{post.content}</p>
          <button 
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            onClick={() => deletePost(post.id)}
          >
            Delete Post
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
