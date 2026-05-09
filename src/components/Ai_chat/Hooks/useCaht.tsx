import { useContext } from "react";
import { ContextChat } from "../Context/ContextChat";
export const useChat = () => {
  const context = useContext(ContextChat);
  if (!context) {
    throw new Error("useChat must be used within ContextProvider");
  }
  return context;
};
