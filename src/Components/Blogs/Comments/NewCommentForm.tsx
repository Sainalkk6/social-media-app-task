
import { useCreateComment } from '../../../api/Comments/useCreateComment'
import { CommentType, NewCommentType } from '../../../Types/types'
import { useFormik } from 'formik'
import { Input } from '../../Input'

const NewCommentForm = ({currentUser,selectedPost,setShowComments}:NewCommentType) => {
    const {mutate} = useCreateComment()
    const {values,handleSubmit,handleChange} = useFormik<CommentType>({
        initialValues:{body:"",email:"",id:0,name:"",post_id:0},
        onSubmit:(values)=>{
            const newComment = {body:values.body,email:currentUser.email,id:Date.now(),name:currentUser.name,post_id:selectedPost}
            console.log(newComment)
            mutate(newComment)
            setShowComments(false)
        }
    })

  return (
    <form onSubmit={handleSubmit} className='absolute flex bottom-0 w-full items-start pt-3 pr-5'>
        <Input handleChange={handleChange} id='body' placeholder='Comment on this...' type='text' value={values.body}/>
        <button type='submit' className='text-lg pl-5'>Send</button>
    </form>
  )
}

export default NewCommentForm
