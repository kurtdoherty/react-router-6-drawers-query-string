import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import PostDrawerContents from "./Content";
import PostQuery from "./Query";

// Note: Shared Drawer component
function PostDrawerContentContainer ({ postId }) {
  return (
    <PostQuery postId={postId} loading={<LoadingDrawerContent />}>
      {post =>
        <PostDrawerContents
          post={post}
        />
      }
    </PostQuery>
  );
}

export default PostDrawerContentContainer
