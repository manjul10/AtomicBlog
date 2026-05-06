const PostList = ({ posts }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-3">
      {[...posts].reverse().map((post) => (
        <div key={post.id} className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
