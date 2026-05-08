import Logo from "../assets/react.svg";
import { usePost } from "./context/PostContext";
const Navbar = () => {
  const {
    clearPosts,
    setQuery,
    setSearchType,
    searchType,
    searchedPosts,
    searchedArchivePosts,
  } = usePost();

  const postToShow =
    searchType === "posts" ? searchedPosts.length : searchedArchivePosts.length;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4 md:gap-0 text-text-strong mb-6">
      <div className="text-2xl font-bold flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        AtomicBlog
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-center items-center w-full md:w-auto">
        <span className="text-text-muted text-sm font-medium whitespace-nowrap">
          Found: {postToShow}
        </span>
        <input
          type="text"
          placeholder={`Search ${searchType === "posts" ? "Posts" : "Archive"}...`}
          className="hero-input w-full sm:w-48 md:w-64"
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="bg-surface border border-border text-text-strong hero-input w-full sm:w-32 md:w-40 cursor-pointer"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="posts">Posts</option>
          <option value="archive">Archive</option>
        </select>
        <button className="secondary-btn w-full sm:w-24" onClick={clearPosts}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Navbar;
