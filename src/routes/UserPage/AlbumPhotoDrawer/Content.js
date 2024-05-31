import { useQuery } from "@tanstack/react-query";
import { getPhotoById } from "../../../common/api/photo";
import DrawerHeader from "../../../common/components/DrawerHeader"
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent"

function PhotoQuery ({ children, photoId, loading }) {
  const { data, isLoading } = useQuery({ queryKey: ['photo', photoId], queryFn: () => getPhotoById(photoId)})
  if (isLoading) return loading
  return children(data)
}

function UserAlbumPhotoDrawerContents ({ onClose, photoId }) {
  return (
    <PhotoQuery
      photoId={photoId}
      loading={<LoadingDrawerContent onClose={onClose} />}
    >
      {photo => (
        <>
          <DrawerHeader category="Photo" title={photo.title} onClose={onClose} />
          <img src={photo.url} alt={photo.title} />
        </>
      )}
    </PhotoQuery>
  )
}

export default UserAlbumPhotoDrawerContents
