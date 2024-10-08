import { useGetPostQuery } from "../api/Posts/useGetPostQuery";
import { useContext, useState } from "react";
import { Blurrybg } from "../Components/Blurrybg";
import { BlogsType } from "../Types/types";
import BlogCard from "../Components/Blogs/BlogCard";
import LoadingDiv from "../Components/LoadingDiv";
import Error from "../Components/Error";
import { useDeletePost } from "../api/Posts/useDeletePost";
import { RiChatDeleteFill } from "react-icons/ri";
import { MdOutlinePostAdd } from "react-icons/md";
import NewPostForm from "../Components/Blogs/NewPostForm";
import CommentModal from "../Components/Blogs/Comments/CommentModal";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const { data, isLoading, isError } = useGetPostQuery();
  const { mutate } = useDeletePost();
  const [showComments, setShowComments] = useState(false);
  const [selectedPost, setSelectedPost] = useState(0);
  const [addPost, setAddPost] = useState(false);
  const [toggleDeletion, setToggleDeletion] = useState(false);
  const [deleteArr, setDeleteArr] = useState([] as number[]);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(selectedPost);
  if (isLoading) return <LoadingDiv />;
  if (isError) return <Error />;

  const handleMassDeletion = () => {
    setToggleDeletion(false);
    deleteArr.forEach((id) => mutate(id));
  };

  const massDeletion = (id: number) => setDeleteArr((prev) => [...prev, id]);

  return (
    <div className="tracking-wide relative pb-10 flex items-center flex-col justify-center">
      {showComments && <Blurrybg removeBlur={setShowComments} />}
      {addPost && <Blurrybg removeBlur={setAddPost} />}
      <h1 className="text-3xl border-b pb-10 sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Check What's <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> new today</span>
      </h1>

      <div className="flex items-center w-full font-medium text-xl gap-1  justify-between px-9 bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
        {toggleDeletion ? (
          <button onClick={handleMassDeletion}>Confirm Deletion</button>
        ) : (
          <span className="flex items-center transition-all duration-200 hover:text-2xl cursor-pointer justify-center gap-1" onClick={() => setToggleDeletion(true)}>
            Mass deletion <RiChatDeleteFill className="text-orange-500" />
          </span>
        )}
        <span className="transition-all duration-200 hover:text-2xl  flex items-center justify-center cursor-pointer" onClick={() => setAddPost(true)}>
          Add a Post <MdOutlinePostAdd className="text-orange-800" />
        </span>
      </div>
      <div className="flex pt-10 flex-wrap justify-center">
        {currentUser.name
          ? addPost && <NewPostForm setAddPost={setAddPost} />
          : addPost && (
              <div className="bg-white text-2xl text-fuchsia-700 flex-col h-[400px] w-[500px] flex items-center justify-center z-30 absolute top-20 left-36 border border-r-orange-500 rounded">
                <span>Seems like you are not logged in</span>
                <span>You will be redirected to the login page</span>
                {setTimeout(() => navigate("/users"), 2000)}
              </div>
            )}
      </div>

      <div className="w-full">
        {data?.data.map((blog: BlogsType) => (
          <BlogCard setSelectedPost={setSelectedPost} massDeletion={massDeletion} toggleDeletion={toggleDeletion} blog={blog} setShowComments={setShowComments} key={blog.id} />
        ))}
      </div>
      {currentUser.name
        ? showComments && (
            <div className="flex pt-10 flex-wrap justify-center ">
              <CommentModal setShowComments={setShowComments} selectedPost={selectedPost} />
            </div>
          )
        : showComments && (
            <div className="bg-white right-0 left-0 text-2xl text-fuchsia-700 mx-auto flex-col h-[400px] w-[500px] flex items-center justify-center z-30 absolute top-20 border border-r-orange-500 rounded">
              <span>Seems like you are not logged in</span>
              <span>You will be redirected to the login page</span>
              {setTimeout(() => navigate("/users"), 2000)}
            </div>
          )}
    </div>
  );
};

export default Blogs;
