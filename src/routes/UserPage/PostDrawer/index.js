import { getUserPostUrl, getUserUrl, getUserPostCommentsUrl } from "../../../common/utils/urlGetters/user";
import PostDrawer from "../../../common/components/PostDrawer";

function UserPostDrawer ({ postId, userId, isOpen }) {
  return <PostDrawer {...{
    postId,
    userId,
    isOpen,
    commentsUrl: isOpen ? getUserPostCommentsUrl(userId, postId) : '',
    launchUrl: getUserUrl(userId),
    url: isOpen ? getUserPostUrl(userId, postId) : '',
  }}/>
}

export default UserPostDrawer
