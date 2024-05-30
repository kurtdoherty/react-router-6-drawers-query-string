import { defer } from "react-router-dom"

async function postsPageLoader () {
  const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  return defer({
    posts: postsPromise
  })
}

export default postsPageLoader;
