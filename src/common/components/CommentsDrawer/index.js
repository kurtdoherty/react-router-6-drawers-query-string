import CommentsDrawerContents from "./Content";
import CommentsQuery from "./Query";
import LoadingDrawerContent from "../LoadingDrawerContent";

function CommentsDrawerContentContainer({
  postId,
}) {
  return (
    <CommentsQuery postId={postId} loading={<LoadingDrawerContent />}>
      {(comments) => (
        <CommentsDrawerContents comments={comments} />
      )}
    </CommentsQuery>
  );
}

export default CommentsDrawerContentContainer;
