import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import PostDrawerContents from "./Content";
import PostQuery from "./Query";

function PostDrawer ({ id, url, isOpen, onClose, postId }) {
  return (
    <Drawer {...{ id, isOpen, onClose }}>
      {isOpen && (
        <PostQuery postId={postId} loading={<LoadingDrawerContent onClose={onClose} />}>
          {post =>
            <PostDrawerContents
              post={post}
              onClose={onClose}
              url={url}
            />
          }
        </PostQuery>
      )}
    </Drawer>
  );
}

export default PostDrawer
