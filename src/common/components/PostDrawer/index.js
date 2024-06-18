import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import PostDrawerContents from "./Content";
import PostQuery from "./Query";

function PostDrawer ({ id, drawerUrl, drawerPath, isOpen, onClose, postId }) {
  return (
    <Drawer {...{ id, isOpen, onClose }}>
      {isOpen && (
        <PostQuery postId={postId} loading={<LoadingDrawerContent onClose={onClose} />}>
          {post =>
            <PostDrawerContents
              post={post}
              onClose={onClose}
              postDrawerUrl={drawerUrl}
              postDrawerPath={drawerPath}
            />
          }
        </PostQuery>
      )}
    </Drawer>
  );
}

export default PostDrawer
