import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import Drawer from "../../../common/components/Drawer";
import CommentsDrawerContents from "./Content";
import CommentsQuery from "./Query";
import LoadingDrawerContent from "../LoadingDrawerContent";

function CommentsDrawer ({ postId, url, launchUrl, isOpen, size = "medium" }) {
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: 'comments-drawer',
    isOpen,
    url,
    launchUrl,
  })

  return (
    <Drawer {...getDrawerProps({ size })}>
      {isOpen && (
        <CommentsQuery postId={postId} loading={<LoadingDrawerContent />}>
          {comments => <CommentsDrawerContents comments={comments} onClose={onClose} />}
        </CommentsQuery>
      )}
    </Drawer>
  );
}

export default CommentsDrawer
