import { useQueries } from "@tanstack/react-query";
import { getAlbumById } from "../../../common/api/album";
import { getPhotosByAlbumId } from "../../../common/api/photo";
import DrawerHeader from "../../../common/components/DrawerHeader";
import DrawerLink from "../../../common/components/LinkToDrawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import { getUserAlbumPhotoUrl } from "../../../common/utils/urlGetters/user";

function UserAlbumDrawerQuery ({ children, albumId, loading }) {
  const queryResults = useQueries({
    queries: [
      { queryKey: ['album', albumId], queryFn: () => getAlbumById(albumId)},
      { queryKey: ['album-photos', albumId], queryFn: () => getPhotosByAlbumId(albumId)}
    ]
  })
  const isLoading = queryResults.some(result => result.isLoading)
  if (isLoading) return loading
  const album = {
    ...queryResults[0].data,
    photos: queryResults[1].data
  }
  return children(album)
}

function UserAlbumDrawerContent ({ onClose, albumId, userId }) {
  return (
    <UserAlbumDrawerQuery
      albumId={albumId}
      loading={<LoadingDrawerContent onClose={onClose} />}
    >
      {album => (
        <>
          <DrawerHeader category="Album" title={album.title} onClose={onClose} />
          <div className="flex flex-wrap gap-3">
            {album?.photos?.map(photo => {
              return (
                <DrawerLink to={getUserAlbumPhotoUrl(userId, albumId, photo.id)} key={photo.id} className="w-14 h-14 bg-slate-200">
                  <img src={photo.thumbnailUrl} alt={photo.title} width="100" />
                </DrawerLink>
              )
            })}
          </div>
        </>
      )}
    </UserAlbumDrawerQuery>
  )
}

export default UserAlbumDrawerContent
