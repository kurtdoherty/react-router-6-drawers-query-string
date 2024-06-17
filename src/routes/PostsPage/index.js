import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import useDrawerRouteMatch from "../../common/utils/useDrawerRouteMatch";
import PostDrawer from "../../common/components/PostDrawer";
import LinkToDrawer from "../../common/components/LinkToDrawer";

function PostList ({ posts }) {
  const drawerMatch = useDrawerRouteMatch([
    '/post/:postId/:comments?',
  ])

  return (
    <>
      <PostDrawer
        id="posts-page-post-drawer"
        isOpen={Boolean(drawerMatch)}
        postId={drawerMatch?.params?.postId}
        url={`/posts/?d=/post/${drawerMatch?.params?.postId}`}
        launchUrl={'/posts'}
        commentsUrl={`/posts/?d=/post/${drawerMatch?.params?.postId}/comments`}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`./${post.id}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link> (
            <LinkToDrawer to={`.?d=/post/${post.id}`} className="text-blue-500 hover:underline">
              quick view
            </LinkToDrawer>
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
