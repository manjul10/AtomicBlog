import { createContext, useContext, useEffect, useReducer } from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
const ThemeContext = createContext();

const initialState = {
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const theme = state.theme;


useEffect(() => {
  const root = window.document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}, [theme]);

  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  return (
    <ThemeContext.Provider value={{ theme: state.theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
const ThemedButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="w-10 h-10 rounded-full flex items-center justify-center bg-surface border border-border text-accent shadow-md cursor-pointer transition-all hover:scale-110 active:scale-95"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Theme"
    >
       {theme=== "light" ? <BedtimeOutlinedIcon /> : <WbSunnyOutlinedIcon />} 
    </button>
  );
};

export { ThemeProvider, ThemedButton, useTheme };
