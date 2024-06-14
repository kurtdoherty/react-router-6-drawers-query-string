export function getPostUrl (postId) {
  return `/posts/${postId}`;
}

export function getPostCommentsUrl (postId) {
  return `/posts/${postId}?d=/comments`;
}
