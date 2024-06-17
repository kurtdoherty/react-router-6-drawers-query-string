import DrawerHeader from "../../../common/components/DrawerHeader"
import TextWithNewLines from "../../../common/components/TextWithNewLines"
import DrawerLink from "../../../common/components/LinkToDrawer"

function PostDrawerContent ({ onClose, post, commentsUrl }) {
  return (
    <>
      <DrawerHeader category="Post" title={post.title} onClose={onClose} />
      <p><TextWithNewLines text={post.body} /></p>
      <p className="mt-4">
        <DrawerLink to={commentsUrl}>
          View comments
        </DrawerLink>
      </p>
    </>
  )
}

export default PostDrawerContent
