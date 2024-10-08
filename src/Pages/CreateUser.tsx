import { useContext } from "react"
import { UserContext } from "../App"
import { useNavigate } from "react-router-dom"
import { useCreateUser } from "../api/Users/useCreateUser"
import { useFormik } from "formik"
import { UserType } from "../Types/types"
import { MiniContainer } from "../Components/MiniContainer"
import { Label } from "../Components/Label"
import { Input } from "../Components/Input"


const CreateUser = () => {
    const {setCurrentUser} = useContext(UserContext)
    const navigate = useNavigate()
    const {mutate} = useCreateUser()

    const {values,handleChange,handleSubmit} = useFormik<UserType>({
        initialValues:{email:"",gender:"male",id:0,name:"",status:""},
        onSubmit:(values)=>{
            const newUser = {...values,id:Date.now(),status:"active"}
            setCurrentUser(newUser)
            mutate(newUser)
            console.log(newUser)
            navigate("/")
        }
    })

  return (
    <div className='w-screen h-full bg-gradient-to-r from-orange-500 to-orange-800 flex items-center justify-center py-[41px]'>
      <div className="border-orange-500 min-w-[500px] min-h-[500px] bg-white/50 border shadow-2xl rounded py-20 px-10">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
            <MiniContainer>
                <Label label="Name" labelFor="name"/>
                <Input type="text" placeholder="Enter your name" value={values.name} handleChange={handleChange} id="name" />
            </MiniContainer>
            <MiniContainer>
                <Label label="Email" labelFor="email"/>
                <Input handleChange={handleChange} id="email" placeholder="Enter your email" type="text" value={values.email} />
            </MiniContainer>
            <MiniContainer>
                <Label label="Gender" labelFor="gender"/>
                <select name="gender" id="gender" onChange={handleChange} className="focus:outline-none" value={values.gender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </MiniContainer>
            <button type="submit" className="mt-20 transition-all duration-500 hover:bg-emerald-500 hover:scale-105 bg-white px-3 py-1 rounded text-lg font-mono">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
