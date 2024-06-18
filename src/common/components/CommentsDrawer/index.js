import Drawer from "../../../common/components/Drawer";
import CommentsDrawerContents from "./Content";
import CommentsQuery from "./Query";
import LoadingDrawerContent from "../LoadingDrawerContent";

function CommentsDrawer ({ id, postId, isOpen, size = "medium", onClose }) {
  return (
    <Drawer {...{ id, onClose, isOpen, size }}>
      {isOpen && (
        <CommentsQuery postId={postId} loading={<LoadingDrawerContent />}>
          {comments => <CommentsDrawerContents comments={comments} onClose={onClose} />}
        </CommentsQuery>
      )}
    </Drawer>
  );
}

export default CommentsDrawer
