import Drawer from "../../../common/components/Drawer.js";
import { getUserAlbumPhotoUrl, getUserAlbumUrl } from "../../../common/utils/urlGetters/user.js";
import useUrlDrawer from "../../../common/utils/useUrlDrawer.js";
import UserAlbumPhotoDrawerContents from "./content.js";
import useGetDrawerParams from "../../../common/utils/useGetDrawerParams.js";

function UserAlbumPhotoDrawer ({ userId }) {
  const [albumId, photoId] = useGetDrawerParams(['albumId', 'photoId'])
  const isOpen = Boolean(albumId) && Boolean(photoId)
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: 'user-album-photo-drawer',
    isOpen,
    url: isOpen ? getUserAlbumPhotoUrl(userId, albumId, photoId) : '',
    launchUrl: isOpen ? getUserAlbumUrl(userId, albumId) : '',
  })

  return (
    <Drawer {...getDrawerProps({ size: 'large' })}>
      {isOpen && <UserAlbumPhotoDrawerContents photoId={photoId} onClose={onClose} />}
    </Drawer>
  );
}

export default UserAlbumPhotoDrawer
