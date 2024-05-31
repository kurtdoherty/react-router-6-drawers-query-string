import { useQuery } from "@tanstack/react-query";
import { getCommentsByPostId } from "../../api/post.js";
import DrawerHeader from "../DrawerHeader"
import TextWithNewLines from "../TextWithNewLines"

function CommentsDrawerContent ({ onClose, postId }) {
  const { data: comments } = useQuery({ queryKey: ['comments', postId], queryFn: () => getCommentsByPostId(postId)})

  return (
    <>
      <DrawerHeader title="Comments" onClose={onClose} />
      {!Boolean(comments) && <p>Loading ...</p>}
      {Boolean(comments) && (
        <ul>
          {comments.map(comment => (
            <li key={comment.id} className="mt-6">
              <p><TextWithNewLines text={comment.body} /></p>
              <p className="italic text-zinc-400">Name: {comment.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default CommentsDrawerContent
