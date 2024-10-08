import { useContext, useState } from "react";
import { useGetUsersQuery } from "../api/Users/useGetUsers";
import Error from "../Components/Error";
import LoadingDiv from "../Components/LoadingDiv";
import { Blurrybg } from "../Components/Blurrybg";
import { UserType } from "../Types/types";
import UserCard from "../Components/UserPage/UserCard";
import { useDeleteUsers } from "../api/Users/useDeleteUsers";
import EditUserForm from "../Components/UserPage/EditUserForm";
import { UserContext } from "../App";
import UserDetails from "../Components/UserPage/UserDetails";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const UsersPage = () => {
  const {setCurrentUser} = useContext(UserContext)
  const { data, isLoading, isError } = useGetUsersQuery();
  const {mutate} = useDeleteUsers()
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleUserInfo,setToggleUserInfo] = useState(false)
  const [initialValues, setInitialValues] = useState({} as UserType);
  const [clickedUser,setClickedUser] = useState({} as UserType)
  const titles = ["Status", "Username","About User" ,"Edit", "Delete"];

  const handleDeleteUser = (id:number)=> mutate(id)

  const handleToggleEdit = (user:UserType)=>{
    setToggleEdit(true)
    setInitialValues(user)
  }


  if (isLoading) return <LoadingDiv />;
  if (isError) return <Error />;


  return (
    <div className="flex flex-col min-h-screen px-3 py-3 bg-[#eaf4fe] text-black relative">
        <Link to="/createaccount" className="fixed right-5 bottom-5 hover:scale-105 transition-all duration-200 rounded bg-gradient-to-r from-orange-500 to-orange-800 text-white text-2xl px-3 py-2 flex items-center gap-1 justify-center">Create Account <FaUserPlus /></Link>
      {toggleEdit && <Blurrybg removeBlur={setToggleEdit} />}
      {toggleUserInfo && <Blurrybg removeBlur={setToggleUserInfo} />}
      <div className="grid grid-cols-5 justify-items-start px-3  border-b border-black/30 py-3 justify-between text-xl">
        {titles.map((title:string,index:number)=><span key={index}>{title}</span> )}
      </div>
      {toggleEdit && <EditUserForm initialValues={initialValues} setToggleEdit={setToggleEdit}/>}
      {data?.data.map((user:UserType)=><UserCard key={user.id} setClickedUser={setClickedUser} setCurrentUser = {setCurrentUser} setToggleUserInfo = {setToggleUserInfo} handleToggleEdit={handleToggleEdit} handleDeleteUser={handleDeleteUser} user={user}/>)}
      <div className="flex items-center justify-center absolute right-0 left-0 top-10" >
        {toggleUserInfo && <UserDetails setToggleUserInfo={setToggleUserInfo} clickedUser={clickedUser}/>}  
      </div>
    </div>
  );
};

export default UsersPage;
