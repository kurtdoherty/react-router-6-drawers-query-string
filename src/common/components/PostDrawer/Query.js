import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../../common/api/post";

function PostDrawerQuery ({ children, postId, loading }) {
  const { data, isLoading } = useQuery({ queryKey: ['post', postId], queryFn: () => getPost(postId)})
  if (isLoading) return loading
  return children(data)
}

export default PostDrawerQuery
