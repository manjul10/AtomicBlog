import "./App.css";
import ArchivePosts from "./components/ArchivePosts";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import { ThemedButton } from "./components/context/ThemeContext";


function App() {
  // const [posts, setPosts] = useState([]);
  // const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="min-h-screen transition-colors duration-300">
      <div className="flex justify-end p-4 absolute right-0 top-0">
        <ThemedButton />
      </div>
      
      <div className="max-w-6xl mx-auto p-4">
        <Navbar />
        <Posts />
        <ArchivePosts />
      </div>
    </div>
    </>
  );
}

export default App;
