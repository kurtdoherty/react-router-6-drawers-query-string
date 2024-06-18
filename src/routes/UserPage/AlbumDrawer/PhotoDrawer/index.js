import Drawer from "../../../../common/components/Drawer";
import LoadingDrawerContent from "../../../../common/components/LoadingDrawerContent";
import { getUserAlbumUrl } from "../../../../common/utils/urlGetters/user";
import useUrlDrawer from "../../../../common/utils/useUrlDrawer";
import UserAlbumPhotoDrawerContents from "./Content";
import PhotoQuery from "./Query";

// Note: Drawer+Context component
function UserAlbumPhotoDrawer ({ isOpen, photoId, albumId, userId }) {
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: `user-page-album-drawer-photo-drawer`,
    isOpen,
    drawerPath: isOpen ? `/album/${albumId}/photo/${photoId}` : '',
    launchUrl: getUserAlbumUrl(userId, albumId),
  })

  return (
    <Drawer {...getDrawerProps({ size: 'large' })}>
      {isOpen && (
        <PhotoQuery photoId={photoId} loading={<LoadingDrawerContent onClose={onClose} />}>
          {photo => <UserAlbumPhotoDrawerContents photo={photo} onClose={onClose} />}
        </PhotoQuery>
      )}
    </Drawer>
  );
}

export default UserAlbumPhotoDrawer
