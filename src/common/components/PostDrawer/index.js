import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import PostDrawerContents from "./Content";
import PostQuery from "./Query";

function PostDrawer ({ id, postId, url, launchUrl, isOpen }) {
  const { getDrawerProps, onClose } = useUrlDrawer({
    id,
    isOpen,
    url,
    launchUrl,
  })

  return (
    <Drawer {...getDrawerProps()}>
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
