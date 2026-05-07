import Logo from '../assets/react.svg';
import { usePost } from './context/PostContext';
const Navbar = () => {
  const {  clearPosts, setQuery, setSearchType,query, searchType, searchedPosts, searchedArchivePosts } = usePost();
  
  
  const postToShow = searchType === "posts" ? searchedPosts.length : searchedArchivePosts.length;

  return (
    <div className="flex justify-between items-center py-4 text-text-strong">
      <div className="text-2xl font-bold flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        AtomicBlog
      </div>
      <div className="flex gap-4 text-center items-center">
        <span className="text-text-muted">No of atomic Post found: {postToShow}</span>
        <input
          type="text"
          placeholder={`Search ${searchType === "posts" ? "Posts" : "Archive Posts"}...`}
          className="hero-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="bg-surface border border-border text-text-strong hero-input"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="posts">Posts</option>
          <option value="archive">Archive Posts</option>
        </select>
        <button className="secondary-btn" onClick={clearPosts}>
          Clear Posts
        </button>
      </div>
    </div>
  );
};

export default Navbar;
