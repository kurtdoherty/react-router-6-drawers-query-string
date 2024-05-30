import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

function PostList ({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`./${post.id}`} className="text-blue-500 hover:underline">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function PostsPage () {
  const data = useLoaderData()

  return (
    <>
      <h2 className="text-2xl font-bold">Posts</h2>
      <div className="mt-4">
        <Suspense fallback={<p className="text-slate-500">...</p>}>
          <Await resolve={data.posts}>
            {posts => <PostList posts={posts} />}
          </Await>
        </Suspense>
      </div>
    </>
  );
}

export default PostsPage
