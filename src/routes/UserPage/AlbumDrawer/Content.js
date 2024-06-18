import DrawerHeader from "../../../common/components/DrawerHeader";
import DrawerLink from "../../../common/components/LinkToDrawer";
import { getUserAlbumPhotoUrl } from "../../../common/utils/urlGetters/user";
import UserAlbumPhotoDrawer from "./PhotoDrawer";
import useDrawerRouteMatch from "../../../common/utils/useDrawerRouteMatch";

function UserAlbumDrawerContent ({ onClose, userId, album, drawerPath }) {
  const drawerMatch = useDrawerRouteMatch([
    `${drawerPath}/photo/:photoId`,
  ])

  return (
    <>
      <DrawerHeader category="Album" title={album.title} onClose={onClose} />
      <div className="flex flex-wrap gap-3">
        {album?.photos?.map(photo => {
          return (
            <DrawerLink to={getUserAlbumPhotoUrl(userId, album.id, photo.id)} key={photo.id} className="w-14 h-14 bg-slate-200">
              <img src={photo.thumbnailUrl} alt={photo.title} width="100" />
            </DrawerLink>
          )
        })}
      </div>

      <UserAlbumPhotoDrawer
        userId={userId}
        albumId={album.id}
        isOpen={Boolean(drawerMatch)}
        photoId={drawerMatch?.params?.photoId}
      />
    </>
  )
}

export default UserAlbumDrawerContent
