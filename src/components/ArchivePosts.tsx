import { faker } from "@faker-js/faker";
import { useState } from "react";

const ArchivePosts = ({ posts, setPosts }) => {
    const [isArchive, setIsArchive] = useState(false)
  const [listPosts, setListPosts] = useState([]);

  const createRandomPost = () => {
    return {
      id: Math.random().toString(36),
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      content: faker.hacker.phrase(),
    };
  };
  const getPosts = faker.helpers.multiple(createRandomPost, { count: 50 });
//   console.log(listPosts);


const handleArchive = ()=>{
    setIsArchive(!isArchive)
}
  return (
    <div>
      <p className="text-2xl font-bold text-gray-600 uppercase">Post archive</p>
      <button
        className="bg-green-500 text-white px-4 py-4 rounded-md mt-4"
        onClick={() => setListPosts([...listPosts, ...getPosts])}
      >
        Archive Posts
      </button>
      <div className="flex flex-col gap-1 mt-2">
        {listPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 p-2 rounded-lg flex gap-2 items-center justify-between"
          >
            <div className="flex items-center text-center gap-2">
              <h6 className="text-md font-bold ">{post.title}:</h6>
              <p className="text-sm">{post.content}</p>
            </div>
            <button
              className="bg-green-500 text-white px-2 py-1 rounded-md"
              onClick={() =>
                setPosts((prev) => [...prev, post])
              }
            >
              Add to Posts
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivePosts;
