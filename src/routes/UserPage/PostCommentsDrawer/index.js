import CommentsDrawer from "../../../common/components/CommentsDrawer";
import { getUserPostUrl, getUserPostCommentsUrl } from "../../../common/utils/urlGetters/user";
import useGetDrawerParams from "../../../common/utils/useGetDrawerParams";

function UserPostDrawerCommentsDrawer ({ userId }) {
  const [postId, comments] = useGetDrawerParams(['postId', 'comments'])
  const isOpen = Boolean(postId) && comments
  const userPostDrawerUrl = isOpen ? getUserPostUrl(userId, postId) : ''
  const userPostCommentsUrl = isOpen ? getUserPostCommentsUrl(userId, postId) : ''

  return (
    <CommentsDrawer
      postId={postId}
      id="user-post-comments-drawer"
      isOpen={isOpen}
      url={userPostCommentsUrl}
      launchUrl={userPostDrawerUrl}
      size="small"
    />
  );
}

export default UserPostDrawerCommentsDrawer
