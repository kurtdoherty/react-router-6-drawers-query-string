export function getUserUrl (userId) {
  return `/users/${userId}`;
}

export function getUserPostUrl (userId, postId) {
  return `/users/${userId}?d=/post/${postId}`;
}

export function getUserPostCommentsUrl (userId, postId) {
  return `/users/${userId}?d=/post/${postId}/comments`;
}

export function getUserAlbumUrl (userId, albumId) {
  return `/users/${userId}?d=/album/${albumId}`;
}

export function getUserAlbumPhotoUrl (userId, albumId, photoId) {
  return `/users/${userId}?d=/album/${albumId}/photo/${photoId}`;
}

export function getUserOpenTasksUrl (userId) {
  return `/users/${userId}?d=/tasks/open`;
}

export function getUserCompletedTasksUrl (userId) {
  return `/users/${userId}?d=/tasks/completed`;
}
