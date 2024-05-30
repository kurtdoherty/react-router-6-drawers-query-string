import Drawer from "../../../common/components/Drawer";
import { getUserPostUrl, getUserUrl } from "../../../common/utils/urlGetters/user";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import UserPostDrawerContents from "./content";
import useGetDrawerParams from "../../../common/utils/useGetDrawerParams.js";

function UserPostDrawer ({ userId }) {
  const [postId] = useGetDrawerParams(['postId'])
  const isOpen = Boolean(postId)
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: 'user-post-drawer',
    isOpen,
    url: isOpen ? getUserPostUrl(userId, postId) : '',
    launchUrl: isOpen ? getUserUrl(userId) : '',
  })

  return (
    <Drawer {...getDrawerProps()}>
      <UserPostDrawerContents postId={postId} userId={userId} onClose={onClose} />
    </Drawer>
  );
}

export default UserPostDrawer
