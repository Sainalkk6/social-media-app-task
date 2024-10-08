import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Help from "./Pages/Help";
import { createContext, useState } from "react";
import { UserContextType, UserType, UserUniqueBlogs } from "./Types/types";
import HomePage from "./Pages/HomePage";
import Blogs from "./Pages/Blogs";
import UsersPage from "./Pages/UsersPage";
import CreateUser from "./Pages/CreateUser";

export const UserContext = createContext({} as UserContextType);
const App = () => {
  const [currentUser, setCurrentUser] = useState({} as UserType);
  const [userUniqueBlogs, setUserUniqueBlogs] = useState({} as UserUniqueBlogs);
  return (
    <UserContext.Provider value ={{ currentUser, setCurrentUser, userUniqueBlogs, setUserUniqueBlogs }}>
      <div className="text-black min-h-screen w-full flex flex-col overflow-x-hidden no-scroll">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/createaccount" element={<CreateUser />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default App;
