import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import { getUserUrl } from "../../../common/utils/urlGetters/user";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import UserAlbumDrawerContents from "./Content";
import AlbumQuery from "./Query";


// Note: Drawer+Context component
// Note: This component combines two things
// * the drawer itself which should just receive isOpen, url (if it has child drawers), launchUrl and necessary IDs
// * the wiring up of that drawer on a specific page with
function UserAlbumDrawer ({ userId, isOpen, albumId }) {
  const drawerPath = `/album/${albumId}`
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: 'user-page-album-drawer',
    isOpen,
    drawerPath,
    launchUrl: getUserUrl(userId),
  })

  return (
    <Drawer {...getDrawerProps()}>
      {isOpen && (
        <AlbumQuery albumId={albumId} loading={<LoadingDrawerContent onClose={onClose} />}>
          {album =>
            <UserAlbumDrawerContents
              album={album}
              userId={userId}
              onClose={onClose}
              drawerPath={drawerPath}
            />
          }
        </AlbumQuery>
      )}
    </Drawer>
  );
}

export default UserAlbumDrawer
