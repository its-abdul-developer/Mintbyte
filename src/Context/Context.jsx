// AppContext.jsx
import { createContext, useState } from "react";

// Step 1: Context create karo
export const VideoContext = createContext();

// Step 2: Provider component banao
export const AppProvider = ({ children }) => {
  const [userName, setUserName] = useState([
    {
      title: "Abdul Wahab",
      title2: "Adeel Qasim",
    },
  ]);

  return (
    <VideoContext.Provider value={{ userName, setUserName }}>
      {children}
    </VideoContext.Provider>
  );
};
