import LoadingDrawerContent from "../../../../common/components/LoadingDrawerContent";
import UserAlbumPhotoDrawerContents from "./Content";
import PhotoQuery from "./Query";

// Note: Drawer+Context component
function UserAlbumPhotoDrawer ({ photoId }) {
  return (
    <PhotoQuery photoId={photoId} loading={<LoadingDrawerContent />}>
      {photo => <UserAlbumPhotoDrawerContents photo={photo} />}
    </PhotoQuery>
  );
}

export default UserAlbumPhotoDrawer
