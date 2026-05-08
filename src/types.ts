export type Post = {
  id: number | string;
  title: string;
  content: string;
  image?: string;
};

export type PostState = {
  posts: Post[];
  archivePosts: Post[];
  query: string;
  searchType: string;
  image: string;
};

export type PostAction =
  | { type: "ADD_POST"; payload: Post }
  | { type: "CLEAR_POSTS" }
  | { type: "SET_ARCHIVE_POSTS"; payload: Post[] }
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_SEARCH_TYPE"; payload: string }
  | { type: "DELETE_POST"; payload: number | string };

export interface PostContextType extends PostState {
  addPost: (post: { title: string; content: string; image?: string }) => void;
  clearPosts: () => void;
  searchedPosts: Post[];
  searchedArchivePosts: Post[];
  setArchivePosts: (posts: Post[]) => void;
  setQuery: (query: string) => void;
  setSearchType: (type: string) => void;
  deletePost: (id: number | string) => void;
}
export interface ThemeState {
  theme: Theme;
}
export type ThemeAction = { type: "SET_THEME"; payload: Theme };

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
