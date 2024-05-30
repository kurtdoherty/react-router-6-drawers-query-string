import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../../common/api/post";
import DrawerHeader from "../../../common/components/DrawerHeader"
import TextWithNewLines from "../../../common/components/TextWithNewLines"
import DrawerLink from "../../../common/components/LinkToDrawer"
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent"
import { getUserPostCommentsUrl } from "../../../common/utils/urlGetters/user";

function UserPostDrawerQuery ({ children, postId, loading }) {
  const { data, isLoading } = useQuery({ queryKey: ['post', postId], queryFn: () => getPost(postId)})
  if (isLoading) return loading
  return children(data)
}

function UserPostDrawerContent ({ onClose, postId, userId }) {
  if (!postId) return null

  return (
    <UserPostDrawerQuery
      postId={postId}
      loading={<LoadingDrawerContent onClose={onClose} />}
    >
      {post => (
        <>
          <DrawerHeader category="Post" title={post.title} onClose={onClose} />
          <p><TextWithNewLines text={post.body} /></p>
          <p className="mt-4">
            <DrawerLink to={getUserPostCommentsUrl(userId, postId)}>
              View comments
            </DrawerLink>
          </p>
        </>
      )}
    </UserPostDrawerQuery>
  )
}

export default UserPostDrawerContent
