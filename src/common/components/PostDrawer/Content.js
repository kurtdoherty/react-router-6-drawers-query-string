import DrawerHeader from "../../../common/components/DrawerHeader"
import TextWithNewLines from "../../../common/components/TextWithNewLines"
import DrawerLink from "../../../common/components/LinkToDrawer"
import CommentsDrawer from "../CommentsDrawer"
import useDrawerRouteMatch from "../../utils/useDrawerRouteMatch"
import useGetDrawerPath from "../../utils/useGetDrawerPath"

function PostDrawerContent ({ onClose, post, url, id }) {
  // Note: Child drawer orchestration. `url` is important here
  const drawerPath = useGetDrawerPath(url)
  const drawerMatch = useDrawerRouteMatch([
    `${drawerPath}/comments`,
  ])
  return (
    <>
      <DrawerHeader category="Post" title={post.title} onClose={onClose} />
      <p><TextWithNewLines text={post.body} /></p>
      <p className="mt-4">
        <DrawerLink to={`${url}/comments`}>
          View comments
        </DrawerLink>
      </p>

      <CommentsDrawer
        url={`${url}/comments`}
        id={`${id}-comments-drawer`}
        launchUrl={url}
        isOpen={Boolean(drawerMatch)}
        postId={post.id}
        size='small'
      />
    </>
  )
}

export default PostDrawerContent
