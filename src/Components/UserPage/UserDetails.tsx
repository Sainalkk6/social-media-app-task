import { MdClose } from "react-icons/md"
import { UserDetailType } from "../../Types/types"
import { CustomSpan } from "../CustomSpan"

const UserDetails = ({clickedUser,setToggleUserInfo}:UserDetailType) => {
  return (
    <div className="flex items-center justify-center min-w-[800px]">
        <div className="flex flex-col py-20 text-2xl relative px-20 gap-5 bg-white rounded border border-orange-600 h-[400px] z-30 min-w-[200px] whitespace-nowrap ">
          <span onClick={()=> setToggleUserInfo(false)} className="absolute top-3 right-4 hover:text-orange-500 cursor-pointer transition-all duration-200"><MdClose /></span>
        <div>
            <span>Id : </span>
            <CustomSpan label={clickedUser.id}/>
          </div>
          <div>
            <span>Name : </span>
            <CustomSpan label={clickedUser.name}/>
          </div>
          <div>
            <span>E-Mail : </span>
            <CustomSpan label={clickedUser.email}/>
          </div>
          <div>
            <span>Gender : </span>
            <CustomSpan label={clickedUser.gender}/>
          </div>
          <div>
            <span>Status : </span>
            <CustomSpan label={clickedUser.status}/>
          </div>
        </div>
      
    </div>
  )
}

export default UserDetails
