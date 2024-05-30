export async function getPost (postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  return response.json()
}

export async function getComments (postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  return response.json()
}
