import DrawerHeader from "../../../../common/components/DrawerHeader"


function UserAlbumPhotoDrawerContents ({ photo }) {
  return (
    <>
      <DrawerHeader category="Photo" title={photo.title} />
      <img src={photo.url} alt={photo.title} />
    </>
  )
}

export default UserAlbumPhotoDrawerContents
