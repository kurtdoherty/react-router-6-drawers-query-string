import { getUserPostUrl, getUserUrl } from "../../../common/utils/urlGetters/user";
import PostDrawer from "../../../common/components/PostDrawer";

// Note: This is a place+drawer component because of the hard coded id and URL getters
function UserPostDrawer ({ postId, userId, isOpen }) {
  return <PostDrawer {...{
    id: 'user-page-post-drawer',
    postId,
    isOpen,
    launchUrl: getUserUrl(userId),
    url: isOpen ? getUserPostUrl(userId, postId) : '',
  }}/>
}

export default UserPostDrawer
