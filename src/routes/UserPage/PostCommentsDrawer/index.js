import CommentsDrawer from "../../../common/components/CommentsDrawer";
import { getUserPostUrl, getUserPostCommentsUrl } from "../../../common/utils/urlGetters/user";

function UserPostDrawerCommentsDrawer ({ userId, isOpen, postId }) {
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
