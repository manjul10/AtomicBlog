import { faker } from "@faker-js/faker";
import { useState } from "react";
import { usePost } from "./context/PostContext";
import type { Post } from "../types";

const ArchivePosts = () => {
  const { addPost, setArchivePosts, searchedArchivePosts, archivePosts } =
    usePost();
  const [isArchive, setIsArchive] = useState(false);

  const createRandomPost = () => {
    return {
      id: faker.string.uuid(),
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      content: faker.hacker.phrase(),
    };
  };

  const handleArchivePosts = () => {
    if (!isArchive && archivePosts.length === 0) {
      const getPosts = faker.helpers.multiple(createRandomPost, { count: 50 });
      setArchivePosts(getPosts);
    }
    setIsArchive((prev) => !prev);
  };

  const handleAddToPosts = (post: Post) => {
    addPost(post);

    const updatedArchivePosts = archivePosts.filter((p) => p.id !== post.id);
    setArchivePosts(updatedArchivePosts);
  };

  return (
    <div className="mt-12">
      <p className="eyebrow">Post archive</p>
      <button className="secondary-btn mt-4" onClick={handleArchivePosts}>
        {isArchive ? "Hide Archive" : "Show Archive Posts"}
      </button>
      {isArchive && (
        <div className="flex flex-col gap-4 mt-6">
          {searchedArchivePosts.map((post) => (
            <div
              key={post.id}
              className="p-5 rounded-xl flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-surface-soft border border-border transition-all hover:shadow-md"
            >
              <div className="flex flex-col gap-1.5 flex-1">
                <h6 className="text-lg font-bold text-text-strong font-serif">
                  {post.title}
                </h6>
                <p className="text-sm text-text-muted leading-relaxed">{post.content}</p>
              </div>
              <button
                className="ghost-btn text-sm py-2 px-5 whitespace-nowrap w-full sm:w-auto shadow-sm"
                onClick={() => handleAddToPosts(post)}
              >
                Add to Posts
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchivePosts;
