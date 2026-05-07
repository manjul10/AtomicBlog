import { faker } from "@faker-js/faker";
import { useState } from "react";
import { usePost } from "./context/PostContext";
import { useTheme } from "./context/ThemeContext";

const ArchivePosts = () => {
  const { theme } = useTheme();
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
  // console.log(archivePosts);

  const handleArchivePosts = () => {
    if (!isArchive && archivePosts.length === 0) {
      const getPosts = faker.helpers.multiple(createRandomPost, { count: 50 });
      setArchivePosts(getPosts);
    }
    setIsArchive((prev) => !prev);
  };

  const handleAddToPosts = (post: string) => {
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
        <div className="flex flex-col gap-3 mt-4">
          {searchedArchivePosts.map((post) => (
            <div
              key={post.id}
              className="p-3 rounded-lg flex gap-4 items-center justify-between bg-surface-soft border border-border"
            >
              <div className="flex items-center gap-2">
                <h6 className="text-md font-bold text-text-strong">
                  {post.title}:
                </h6>
                <p className="text-sm text-text-muted">{post.content}</p>
              </div>
              <button
                className="ghost-btn text-xs py-1 "
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
