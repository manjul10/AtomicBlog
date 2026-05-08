import { useState, useRef } from "react";
import { usePost } from "./context/PostContext";

const AddPost = () => {
  const { addPost } = usePost();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("Selected file:", e.target.files);
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    addPost({
      title: title,
      content: content,
      image: image,
    });
    console.log("Post added:", { title, content, image });
    setTitle("");
    setContent("");
    setImage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="hero-card w-full mb-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-start justify-between w-full">
        <input
          type="text"
          placeholder="Title"
          className="hero-input flex-1 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post content"
          className="hero-input flex-2 w-full min-h-11px max-h-37.5 resize-y"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="file"
          className="hero-input flex-1 w-full"
          onChange={handleFileChange}
          accept="image/*"
          ref={fileInputRef}
        />
        <button
          className="primary-btn px-8 py-3 w-full md:w-auto md:h-11 whitespace-nowrap"
          type="submit"
        >
          Add Post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
