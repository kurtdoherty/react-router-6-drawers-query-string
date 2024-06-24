import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import TextWithNewLines from "../../common/components/TextWithNewLines";
import { DrawerLink, DrawerRoute, DrawerRouter } from "../../common/components/DrawerRouter";
import CommentsDrawerContent from "../../common/components/CommentsDrawer";

function PostPage ({ post }) {
  return (
    <>
      <h2 className="text-2xl font-bold capitalize">{post.title}</h2>
      <p className="text-gray-500">{post.user.name}</p>
      <div className="mt-4">
        <p><TextWithNewLines text={post.body} /></p>
      </div>

      <p className="mt-6">
        {/* a bit awkward having the URL here and also in CommentsDrawer */}
        <DrawerLink to="comments">
          View comments
        </DrawerLink>
      </p>

      <DrawerRouter>
        {/* Shared drawer */}
        <DrawerRoute id='post-page-comments' path="comments" element={<CommentsDrawerContent postId={post.id} />} />
      </DrawerRouter>
    </>
  )
}

function PostPageOrchestrator () {
  const data = useLoaderData()

  return (
    <>
      <Suspense fallback={<h2 className="text-2xl font-bold capitalize text-slate-500">Loading...</h2>}>
        <Await resolve={data.post}>
          {post => <PostPage post={post} />}
        </Await>
      </Suspense>
    </>
  );
}

export default PostPageOrchestrator
