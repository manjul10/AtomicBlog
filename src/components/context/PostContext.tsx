import { createContext, useContext, useReducer } from "react";
import type { PostAction, Post, PostContextType, PostState } from "../../types";

const PostContext = createContext<PostContextType | undefined>(undefined);
const initialState: PostState = {
  posts: [],
  archivePosts: [],
  query: "",
  searchType: "posts",
  image: "",
};

const reducer = (state: PostState, action: PostAction) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "SET_SEARCH_TYPE":
      return {
        ...state,
        searchType: action.payload,
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "SET_ARCHIVE_POSTS":
      return {
        ...state,
        archivePosts: action.payload,
      };
      case"DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      }


    case "CLEAR_POSTS":
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
};

const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addPost = ({ title, content, image }: { title: string; content: string; image?: string }) => {
    const newPost = { id: Date.now(), title, content, image };
    dispatch({ type: "ADD_POST", payload: newPost });
  };

  const setArchivePosts = (archivePosts: Post[]) => {
    dispatch({ type: "SET_ARCHIVE_POSTS", payload: archivePosts });
  };

  const setQuery = (query: string) => {
    dispatch({ type: "SET_QUERY", payload: query });
  };

  const setSearchType = (searchType: string) => {
    dispatch({ type: "SET_SEARCH_TYPE", payload: searchType });
  };

  const searchedPosts =
    state.query && state.searchType === "posts"
      ? state.posts.filter((post) =>
          post.title.toLowerCase().includes(state.query.toLowerCase()),
        )
      : state.posts;

  const searchedArchivePosts =
    state.query && state.searchType === "archive"
      ? state.archivePosts.filter((post) =>
          post.title.toLowerCase().includes(state.query.toLowerCase()),
        )
      : state.archivePosts;
      const deletePost = (id: number | string) => {
        dispatch({ type: "DELETE_POST", payload: id });
      };

  const clearPosts = () => {
    dispatch({ type: "CLEAR_POSTS" });
  };

  return (
    <PostContext.Provider
      value={{
        ...state,
        addPost,
        clearPosts,
        searchedPosts,
        searchedArchivePosts,
        setArchivePosts,
        setQuery,
        setSearchType,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};

export { PostProvider, usePost };
