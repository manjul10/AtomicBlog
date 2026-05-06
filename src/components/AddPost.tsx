import { useState } from "react";

const AddPost = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      title: title,
      content: content,
      id: Date.now(),
    });
    setTitle("");
    setContent("");
    // console.log(title, content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-6 bg-blue-500 p-6 rounded-md items-center justify-between">
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-300 rounded-md px-2 py-4 "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post content"
          className="border border-gray-300 rounded-md px-2 py-1 w-2xl"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-4 rounded-md"
          type="submit"
        >
          Add Post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
