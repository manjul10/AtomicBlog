import { useState } from "react";
import { usePost } from "./context/PostContext";

const AddPost = () => {
  const { addPost } = usePost();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    addPost({
      title: title,
      content: content,
    });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="hero-card">
      <div className="flex gap-6 items-center justify-between">
        <input
          type="text"
          placeholder="Title"
          className="hero-input flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post content"
          className="hero-input flex-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="primary-btn px-8" type="submit">
          Add Post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
