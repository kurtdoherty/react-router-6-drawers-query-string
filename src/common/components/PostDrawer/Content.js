import DrawerHeader from "../../../common/components/DrawerHeader"
import TextWithNewLines from "../../../common/components/TextWithNewLines"
import CommentsDrawerContent from "../CommentsDrawer"
import { DrawerLink, DrawerRoute, DrawerRouter } from "../DrawerRouter"

function PostDrawerContent ({ post }) {
  return (
    <>
      <DrawerHeader category="Post" title={post.title} />
      <p><TextWithNewLines text={post.body} /></p>
      <p className="mt-4">
        <DrawerLink to="comments">
          View comments
        </DrawerLink>
      </p>

      {/* NOTE: We may prefer to define these in the "container" so we're not waiting until data
        * has been fetched before our router determines which drawer route, if any, is open. I've
        * left it here to reduce the diff between this demo and the original query string routing demo */}
      <DrawerRouter>
        <DrawerRoute id="post-drawer-comments" path="comments" element={<CommentsDrawerContent postId={post.id} />} size='small' />
      </DrawerRouter>
    </>
  )
}

export default PostDrawerContent
