import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import Drawer from "../../../common/components/Drawer";
import CommentsDrawerContents from "./content";

function CommentsDrawer ({ postId, url, launchUrl, isOpen, size = "medium" }) {
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: 'comments-drawer',
    isOpen,
    url,
    launchUrl,
  })

  return (
    <Drawer {...getDrawerProps({ size })}>
      <CommentsDrawerContents postId={postId} onClose={onClose} />
    </Drawer>
  );
}

export default CommentsDrawer
