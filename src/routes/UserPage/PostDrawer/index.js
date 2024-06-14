import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import { getUserPostUrl, getUserUrl } from "../../../common/utils/urlGetters/user";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import UserPostDrawerContents from "./Content";
import PostQuery from "./Query";

function UserPostDrawer ({ postId, userId, isOpen }) {
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: 'user-post-drawer',
    isOpen,
    url: isOpen ? getUserPostUrl(userId, postId) : '',
    // FINISHED HERE: Was thinking about if we can move the path
    // matching to inside the hook
    path: { path: '/post/:postId', end: false },
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
