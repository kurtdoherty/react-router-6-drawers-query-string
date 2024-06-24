import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import PostDrawer from "../../common/components/PostDrawer";
import { DrawerLink, DrawerRouter, DrawerRoute } from "../../common/components/DrawerRouter";

function PostList ({ posts }) {
  return (
    <>
      <DrawerRouter>
        <DrawerRoute id="post-list-post" path="post/:postId/*" element={({ params }) => <PostDrawer postId={params.postId} />}/>
      </DrawerRouter>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={String(post.id)} className="text-blue-500 hover:underline">
              {post.title}
            </Link> (
            <DrawerLink to={`post/${post.id}`} className="text-blue-500 hover:underline">
              quick view
            </DrawerLink>
            )
          </li>
        ))}
      </ul>
    </>
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
