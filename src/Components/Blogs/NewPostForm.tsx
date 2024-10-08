import { useFormik } from "formik"
import { useCreatePost } from "../../api/Posts/useCreatePost"
import { BlogsType, NewPostFormType } from "../../Types/types"
import { useContext } from "react"
import { UserContext } from "../../App"
import { Label } from "../Label"
import { Input } from "../Input"

const NewPostForm = ({setAddPost}:NewPostFormType) => {
    const {currentUser} = useContext(UserContext)
    const {mutate} = useCreatePost()
    const {values,handleChange,handleSubmit} = useFormik<BlogsType>({
        initialValues:{id:0,body:"",title:"",user_id:currentUser.id},
        onSubmit:(values)=>{
            const newData = {body:values.body,id:Date.now(),title:values.title,user_id:currentUser.id}
            mutate(newData)
            setAddPost(false)
        }
      })


  return (
    <div className="bg-white rounded border px-20 py-20 border-orange-600 top-20 min-h-[400px] z-30 w-[500px] absolute shadow-2xl">
      <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
        <div>
          <Label label="Title" labelFor="title"/>
          <Input type="text" id="title" value={values.title} handleChange={handleChange} placeholder="Title goes here"/>
        </div>
        <div>
          <Label label="Content" labelFor="content"/>
          <textarea name="body" id="body" className="border border-l" rows={4} value={values.body} onChange={handleChange} cols={40} />
        </div>
        <button type="submit" className="bg-gradient-to-r from-orange-500 text-lg to-orange-700 rounded hover:scale-105 px-3 py-1 transition-all duration-200">Submit</button>
      </form>
      
    </div>
  )
}

export default NewPostForm
