import DrawerHeader from "../../../common/components/DrawerHeader"
import TextWithNewLines from "../../../common/components/TextWithNewLines"
import DrawerLink from "../../../common/components/LinkToDrawer"
import CommentsDrawer from "../CommentsDrawer"
import useDrawerRouteMatch from "../../utils/useDrawerRouteMatch"
import useGetDrawerPath from "../../utils/useGetDrawerPath"
import useUrlDrawer from "../../utils/useUrlDrawer"

function PostDrawerContent ({ onClose, post, url: postDrawerUrl, id }) {
  // Note: Child drawer orchestration. `url` is important here
  const drawerPath = useGetDrawerPath(postDrawerUrl)
  const drawerMatch = useDrawerRouteMatch([
    `${drawerPath}/comments`,
  ])
  const { getDrawerProps } = useUrlDrawer({
    id: `${id}-comments-drawer`,
    isOpen: Boolean(drawerMatch),
    url: `${postDrawerUrl}/comments`,
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
