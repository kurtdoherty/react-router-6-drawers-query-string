import DrawerHeader from "../../../common/components/DrawerHeader"
import TextWithNewLines from "../../../common/components/TextWithNewLines"
import DrawerLink from "../../../common/components/LinkToDrawer"
import { getUserPostCommentsUrl } from "../../../common/utils/urlGetters/user";

function UserPostDrawerContent ({ onClose, post, userId }) {
  return (
    <>
      <DrawerHeader category="Post" title={post.title} onClose={onClose} />
      <p><TextWithNewLines text={post.body} /></p>
      <p className="mt-4">
        <DrawerLink to={getUserPostCommentsUrl(userId, post.id)}>
          View comments
        </DrawerLink>
      </p>
    </>
  )
}

export default UserPostDrawerContent
