import { usePost } from "./context/PostContext";

const PostList = () => {
  const { searchedPosts, deletePost } = usePost();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
      {searchedPosts.toReversed().map((post) => (
        <div
          key={post.id}
          className="content-section flex flex-col justify-between h-full hover:-translate-y-1 transition-transform duration-300"
        >
          <div>
            <h2 className="text-xl font-bold mb-3 text-text-strong font-serif line-clamp-2">
              {post.title}
            </h2>
            <p className="text-text-muted mb-4 line-clamp-4">{post.content}</p>
          </div>

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="mt-4 w-full h-48 object-cover rounded-lg"
            />
          )}
          <button
            className="mt-4 px-4 py-2 bg-red-500/10 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-colors w-full sm:w-auto self-start text-sm"
            onClick={() => deletePost(post.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
