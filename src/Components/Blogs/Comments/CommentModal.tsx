import { VscChromeClose } from "react-icons/vsc";
import { useGetCommentsQuery } from "../../../api/Comments/useGetCommentsQuery";
import { CommentModaltype, CommentType } from "../../../Types/types";
import LoadingDiv from "../../LoadingDiv";
import NewCommentForm from "./NewCommentForm";
import { useContext } from "react";
import { UserContext } from "../../../App";

const CommentModal = ({ selectedPost, setShowComments }: CommentModaltype) => {
  const { data, isLoading } = useGetCommentsQuery(selectedPost);
  const { currentUser } = useContext(UserContext);

  return (
    <div className="bg-white rounded border top-20  min-h-[400px] z-30 w-[500px]  absolute ">
      {isLoading && <LoadingDiv />}
      <div className="flex justify-between px-5 pt-5 border-b py-2">
        <span className="text-xl font-medium text-orange-700">Comments.</span>
        <VscChromeClose className="cursor-pointer hover:text-red-500 text-2xl" onClick={() => setShowComments(false)} />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="text-black">
          {data?.data
            .filter((comment: CommentType) => comment.post_id === selectedPost)
            .map((filteredComment: CommentType) => (
              <div key={filteredComment.id} className="border-b px-2 py-2">
                <span>
                  {filteredComment.name} : {filteredComment.body}
                </span>
              </div>
            ))}
        </div>
        <NewCommentForm currentUser={currentUser} selectedPost={selectedPost} setShowComments={setShowComments} />
      </div>
    </div>
  );
};

export default CommentModal;
