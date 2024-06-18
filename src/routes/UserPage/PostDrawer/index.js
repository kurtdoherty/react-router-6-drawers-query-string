import { getUserPostUrl, getUserUrl } from "../../../common/utils/urlGetters/user";
import PostDrawer from "../../../common/components/PostDrawer";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";

// Note: This is a place+drawer component because of the hard coded id and URL getters
function UserPostDrawer ({ postId, userId, isOpen }) {
  const { getDrawerProps } = useUrlDrawer({
    id: 'user-page-post-drawer',
    isOpen,
    url: isOpen ? getUserPostUrl(userId, postId) : '',
    launchUrl: getUserUrl(userId),
  })

  return <PostDrawer {...getDrawerProps({ postId })}/>
}

export default UserPostDrawer
