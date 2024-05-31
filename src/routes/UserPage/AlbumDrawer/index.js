import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import { getUserAlbumUrl, getUserUrl } from "../../../common/utils/urlGetters/user";
import useGetDrawerParams from "../../../common/utils/useGetDrawerParams";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import UserAlbumDrawerContents from "./Content";
import AlbumQuery from "./Query";

function UserAlbumDrawer ({ userId }) {
  const [albumId] = useGetDrawerParams(['albumId'])
  const isOpen = Boolean(albumId)
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
