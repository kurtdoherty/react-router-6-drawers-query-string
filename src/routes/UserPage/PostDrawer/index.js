import { getUserUrl } from "../../../common/utils/urlGetters/user";
import PostDrawer from "../../../common/components/PostDrawer";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";

// Note: Drawer+Context component
function UserPostDrawer ({ postId, userId, isOpen }) {
  const { getDrawerProps } = useUrlDrawer({
    id: 'user-page-post-drawer',
    isOpen,
    drawerPath: isOpen ? `/post/${postId}` : '', //  This is a path. Could come from useGetDrawerRouteMatch
    launchUrl: getUserUrl(userId),
  })

  return <PostDrawer {...getDrawerProps({ postId })}/>
}

export default UserPostDrawer
