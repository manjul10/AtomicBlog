import ArchivePosts from "./components/ArchivePosts";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import { ThemedButton } from "./components/context/ThemeContext";

function App() {
  return (
    <>
      <div className="min-h-screen transition-colors duration-300 relative pb-12">
        <div className="absolute right-4 top-4 sm:right-6 sm:top-6 z-50">
          <ThemedButton />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-6">
          <Navbar />
          <Posts />
          <ArchivePosts />
        </div>
      </div>
    </>
  );
}

export default App;
