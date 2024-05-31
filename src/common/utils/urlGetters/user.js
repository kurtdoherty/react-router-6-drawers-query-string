export function getUserUrl (userId) {
  return `/users/${userId}`;
}

export function getUserPostUrl (userId, postId) {
  return `/users/${userId}?postId=${postId}`;
}

export function getUserPostCommentsUrl (userId, postId) {
  return `/users/${userId}?postId=${postId}&comments`;
}

export function getUserAlbumUrl (userId, albumId) {
  return `/users/${userId}?albumId=${albumId}`;
}

export function getUserAlbumPhotoUrl (userId, albumId, photoId) {
  return `/users/${userId}?albumId=${albumId}&photoId=${photoId}`;
}

export function getUserOpenTasksUrl (userId) {
  return `/users/${userId}?openTasks`;
}

export function getUserCompletedTasksUrl (userId) {
  return `/users/${userId}?completedTasks`;
}
