import { useState } from "react";
import "./App.css";
import ArchivePosts from "./components/ArchivePosts";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <div className="flex justify-end w-12 h-12 bg-blue-500 ml-auto items-end absolute right-0 top-0"></div>
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <Posts posts={posts} setPosts={setPosts}/>
        <ArchivePosts posts={posts} setPosts={setPosts} />
      </div>
    </>
  );
}

export default App;
