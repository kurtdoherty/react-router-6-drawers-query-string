import { getUserPostUrl, getUserUrl, getUserPostCommentsUrl } from "../../../common/utils/urlGetters/user";
import PostDrawer from "../../../common/components/PostDrawer";

// Note: This is a place+drawer component because of the hard coded id and URL getters
function UserPostDrawer ({ postId, userId, isOpen }) {
  return <PostDrawer {...{
    id: 'user-page-post-drawer',
    postId,
    userId,
    isOpen,
    commentsUrl: isOpen ? getUserPostCommentsUrl(userId, postId) : '',
    launchUrl: getUserUrl(userId),
    url: isOpen ? getUserPostUrl(userId, postId) : '',
  }}/>
}

export default UserPostDrawer
