import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import { getUserAlbumUrl, getUserUrl } from "../../../common/utils/urlGetters/user";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import UserAlbumDrawerContents from "./Content";
import AlbumQuery from "./Query";

function UserAlbumDrawer ({ userId, isOpen, albumId }) {
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: 'user-album-drawer',
    isOpen,
    url: isOpen ? getUserAlbumUrl(userId, albumId) : '',
    launchUrl: getUserUrl(userId),
  })

  return (
    <Drawer {...getDrawerProps()}>
      {isOpen && (
        <AlbumQuery albumId={albumId} loading={<LoadingDrawerContent onClose={onClose} />}>
          {album => <UserAlbumDrawerContents album={album} userId={userId} onClose={onClose} />}
        </AlbumQuery>
      )}
    </Drawer>
  );
}

export default UserAlbumDrawer
