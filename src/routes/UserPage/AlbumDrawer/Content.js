import DrawerHeader from "../../../common/components/DrawerHeader";
import UserAlbumPhotoDrawerContent from "./PhotoDrawer";
import { DrawerLink, DrawerRouter, DrawerRoute } from "../../../common/components/DrawerRouter";

function UserAlbumDrawerContent ({ userId, album }) {
  return (
    <>
      <DrawerHeader category="Album" title={album.title} />
      <div className="flex flex-wrap gap-3">
        {album?.photos?.map(photo => {
          return (
            <DrawerLink to={`photo/${photo.id}`} key={photo.id} className="w-14 h-14 bg-slate-200">
              <img src={photo.thumbnailUrl} alt={photo.title} width="100" />
            </DrawerLink>
          )
        })}
      </div>

      <DrawerRouter>
        <DrawerRoute
          id="album-drawer-photo"
          path="photo/:photoId"
          size="large"
          element={
            ({ params }) => (
              <UserAlbumPhotoDrawerContent
                photoId={params.photoId}
              />
            )
          }
        />
      </DrawerRouter>
    </>
  )
}

export default UserAlbumDrawerContent
