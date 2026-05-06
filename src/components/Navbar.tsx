import Logo from '../assets/react.svg';
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="text-2xl font-bold flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        
        AtomicBlog
      </div>
      <div className="flex gap-4 text-center items-center">
        <span>No of atomic Post found</span>
        <input
          type="text"
          placeholder="Search Posts..."
          className="border border-gray-300 rounded-md px-2 py-1"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded-md">
          Clear Posts
        </button>
      </div>
    </div>
  );
};

export default Navbar;
