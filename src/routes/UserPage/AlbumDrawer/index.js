import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import UserAlbumDrawerContents from "./Content";
import AlbumQuery from "./Query";

function UserAlbumDrawer ({ userId, albumId }) {
  return (
    <AlbumQuery albumId={albumId} loading={<LoadingDrawerContent />}>
      {album =>
        <UserAlbumDrawerContents
          album={album}
          userId={userId}
        />
      }
    </AlbumQuery>
  );
}

export default UserAlbumDrawer
