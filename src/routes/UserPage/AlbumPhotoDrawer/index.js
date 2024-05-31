import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import { getUserAlbumPhotoUrl, getUserAlbumUrl } from "../../../common/utils/urlGetters/user";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import UserAlbumPhotoDrawerContents from "./Content";
import PhotoQuery from "./Query";

function UserAlbumPhotoDrawer ({ userId, isOpen, albumId, photoId }) {
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: 'user-album-photo-drawer',
    isOpen,
    url: isOpen ? getUserAlbumPhotoUrl(userId, albumId, photoId) : '',
    launchUrl: isOpen ? getUserAlbumUrl(userId, albumId) : '',
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
