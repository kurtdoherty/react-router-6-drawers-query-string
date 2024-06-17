import Drawer from "../../../../common/components/Drawer";
import LoadingDrawerContent from "../../../../common/components/LoadingDrawerContent";
import { getUserAlbumPhotoUrl, getUserAlbumUrl } from "../../../../common/utils/urlGetters/user";
import useUrlDrawer from "../../../../common/utils/useUrlDrawer";
import UserAlbumPhotoDrawerContents from "./Content";
import PhotoQuery from "./Query";

// Note: This is a place+drawer component because of the hard coded id and URL getters
function UserAlbumPhotoDrawer ({ isOpen, photoId, albumDrawerUrl, albumId, userId }) {
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: `user-page-album-drawer-photo-drawer`,
    isOpen,
    url: isOpen ? getUserAlbumPhotoUrl(userId, albumId) : '',
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
