import { FaCommentDots } from "react-icons/fa";
import { useGetUsersQuery } from "../../api/Users/useGetUsers";
import { BlogCardtype, UserType } from "../../Types/types";


const BlogCard = ({blog,setShowComments,toggleDeletion,setSelectedPost,massDeletion}:BlogCardtype) => {
    const {data:users} = useGetUsersQuery()
    const handleClick = ()=>{
        setShowComments(true)
        scrollTo({ top: 0, behavior: "smooth" });
        setSelectedPost(blog.id)
    }
  return (
    <div key={blog.id} className=" px-10 py-2">
      <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 hover:scale-105 font-thin transition duration-300 hover:border-orange-600">
        <p>{blog.body}</p>
        <div className="flex mt-8 items-start">
            <div>
                <h6 className="font-normal mb-3">{blog.title}</h6>
                <span className="text-lg font-normal italic text-neutral-600">{users?.data.map((user:UserType) => (user.id === blog.user_id ? `Posted by ${user.name}` : ""))}</span>
                <div className="relative mt-5 text-xl">
                    <button className="hover:text-orange-700 font-normal text-2xl text-black" onClick={handleClick}>
                    Comments
                    <FaCommentDots />
                    </button>
                </div>
            </div>
        </div>
        {toggleDeletion && (
            <div>
                <input type="checkbox" className="w-[30px] h-[20px] mt-20" onChange={()=> massDeletion(blog.id)}/>
                <span className="font-medium text-md">Check to Delete</span>
            </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
