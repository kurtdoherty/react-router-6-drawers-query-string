import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import { getUserPostUrl, getUserUrl } from "../../../common/utils/urlGetters/user";
import useGetDrawerParams from "../../../common/utils/useGetDrawerParams";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import UserPostDrawerContents from "./Content";
import PostQuery from "./Query";

function UserPostDrawer ({ userId }) {
  const [postId] = useGetDrawerParams(['postId'])
  const isOpen = Boolean(postId)
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: 'user-post-drawer',
    isOpen,
    url: isOpen ? getUserPostUrl(userId, postId) : '',
    launchUrl: getUserUrl(userId),
  })

  return (
    <Drawer {...getDrawerProps()}>
      {isOpen && (
        <PostQuery postId={postId} loading={<LoadingDrawerContent onClose={onClose} />}>
          {post => <UserPostDrawerContents post={post} userId={userId} onClose={onClose} />}
        </PostQuery>
      )}
    </Drawer>
  );
}

export default UserPostDrawer
