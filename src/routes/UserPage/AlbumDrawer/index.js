import Drawer from "../../../common/components/Drawer";
import { getUserAlbumUrl, getUserUrl } from "../../../common/utils/urlGetters/user";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import UserAlbumDrawerContents from "./content";
import useGetDrawerParams from "../../../common/utils/useGetDrawerParams.js";

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
      {isOpen && <UserAlbumDrawerContents albumId={albumId} userId={userId} onClose={onClose} />}
    </Drawer>
  );
}

export default UserAlbumDrawer
