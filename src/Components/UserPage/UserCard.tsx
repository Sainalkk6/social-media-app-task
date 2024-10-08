import { FaUserEdit, FaUserMinus } from "react-icons/fa"
import { FaCircleUser } from "react-icons/fa6"
import { UserCardType } from "../../Types/types"
import { useNavigate } from "react-router-dom"
import { TbUserUp } from "react-icons/tb"


const UserCard = ({user,handleDeleteUser,handleToggleEdit,setCurrentUser,setToggleUserInfo,setClickedUser}:UserCardType) => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/blogs")
        setCurrentUser(user)
    }

    const handleShowInfo = () => {
        setToggleUserInfo(true)
        setClickedUser(user)
    }

  return (
    <div className="grid grid-cols-5 text-ellipsis overflow-hidden justify-items-start px-3  align- cursor-pointer items-center border-b border-black/30 py-3 justify-between text-xl">
        <div className="text-2xl relative justify-items-start">
            <FaCircleUser/>
            {user.status === "active" && <div className="rounded-full absolute -top-1 -right-1 bg-green-500 w-[10px] h-[10px]"></div>}
        </div>
        <span className="hover:text-green-600" onClick={handleClick}>{user.name}</span>
        <span className="pl-10" onClick={handleShowInfo}><TbUserUp /></span>
        <span className="pl-2 cursor-pointer hover:text-blue-500" onClick={() => handleToggleEdit(user)}>
            <FaUserEdit />
        </span>
        
        <div className="flex items-center justify-center md:justify-start md:pl-10 pr-7 w-full">
            <span className="text-2xl text-red-600 "  onClick={() => handleDeleteUser(user.id)}>
              <FaUserMinus />
            </span>
        </div>
    </div>
  )
}

export default UserCard
