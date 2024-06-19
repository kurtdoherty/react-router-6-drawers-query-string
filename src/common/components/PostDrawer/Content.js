import DrawerHeader from "../../../common/components/DrawerHeader"
import TextWithNewLines from "../../../common/components/TextWithNewLines"
import DrawerLink from "../../../common/components/LinkToDrawer"
import CommentsDrawer from "../CommentsDrawer"
import useDrawerRouteMatch from "../../utils/useDrawerRouteMatch"
import useUrlDrawer from "../../utils/useUrlDrawer"

function PostDrawerContent ({ onClose, post, postDrawerUrl, postDrawerPath, id }) {
  const drawerMatch = useDrawerRouteMatch([
    `${postDrawerPath}/comments`, // This is a path pattern. Not a path. Easy to get confused in this file
                                  // Will be /post/12/comments
  ])
  const { getDrawerProps } = useUrlDrawer({
    id: `${id}-comments-drawer`,
    isOpen: Boolean(drawerMatch),
    drawerPath: `${postDrawerPath}/comments`, // This is a path. could come out of useGetDrawerRouteMatch
                                              // Will be /post/12/comments
    launchUrl: postDrawerUrl,
  })

  return (
    <>
      <DrawerHeader category="Post" title={post.title} onClose={onClose} />
      <p><TextWithNewLines text={post.body} /></p>
      <p className="mt-4">
        <DrawerLink to={`${postDrawerUrl}/comments`}>
          View comments
        </DrawerLink>
      </p>

      <CommentsDrawer {...getDrawerProps({ postId: post.id, size: 'small' })}/>
    </>
  )
}

export default PostDrawerContent
