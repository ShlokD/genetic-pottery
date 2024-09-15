import { createContext } from "preact";
import { useContext } from "preact/hooks";

export const AppContext = createContext({
  stories: [],
  setStories: () => null,
});

export const useAppContext = () => useContext(AppContext);
