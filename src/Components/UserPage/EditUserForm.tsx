import { useFormik } from "formik"
import { useEditUsers } from "../../api/Users/useEditUsers"
import { EditUserFormType, UserType } from "../../Types/types"
import { MiniContainer } from "../MiniContainer"
import { Label } from "../Label"
import { Input } from "../Input"

const EditUserForm = ({initialValues,setToggleEdit}:EditUserFormType) => {
    const {mutate} = useEditUsers()
    const {values,handleChange,handleSubmit} = useFormik<UserType>({
        initialValues,
        onSubmit:(values)=>{
            const editedUser = {...initialValues,...values}
            mutate(editedUser)
            setToggleEdit(false)
        }
    })
  return (
    <div className="flex justify-center">
        <div className="bg-white rounded absolute p-20 w-[500px] z-50 h-[450px] border border-orange-600 shadow-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <MiniContainer>
                    <Label label="Name" labelFor="name"/>
                    <Input type="text" id="name" placeholder={initialValues.name} value={values.name} handleChange={handleChange} />
                </MiniContainer>
                <MiniContainer>
                    <Label label="E-mail" labelFor="email"/>
                    <Input type="text" placeholder={initialValues.email} id="email" handleChange={handleChange} value={values.email || ""} />
                </MiniContainer>
                <MiniContainer>
                    <Label label="Gender" labelFor="gender"/>
                    <select value={values.gender} onChange={handleChange} name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </MiniContainer>
                <button className="mt-9 bg-green-700 px-6  py-1 text-xl text-white hover:bg-green-600 transition-all duration-200" type="submit">Submit</button>
            </form>

        </div>
      
    </div>
  )
}

export default EditUserForm
