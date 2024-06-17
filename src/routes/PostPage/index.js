import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import TextWithNewLines from "../../common/components/TextWithNewLines";
import DrawerLink from "../../common/components/LinkToDrawer";
import { getPostCommentsUrl, getPostUrl } from "../../common/utils/urlGetters/post";
import CommentsDrawer from "../../common/components/CommentsDrawer";
import useDrawerRouteMatch from "../../common/utils/useDrawerRouteMatch";

function PostPage ({ post }) {
  const postPageCommentsDrawerUrl = getPostCommentsUrl(post.id)
  const postPageUrl = getPostUrl(post.id)
  const drawerMatch = useDrawerRouteMatch(['/comments'])

  return (
    <>
      <h2 className="text-2xl font-bold capitalize">{post.title}</h2>
      <p className="text-gray-500">{post.user.name}</p>
      <div className="mt-4">
        <p><TextWithNewLines text={post.body} /></p>
      </div>

      <p className="mt-6">
        {/* a bit awkward having the URL here and also in CommentsDrawer */}
        <DrawerLink to={postPageCommentsDrawerUrl}>
          View comments
        </DrawerLink>
      </p>

      {/* Shared drawer */}
      <CommentsDrawer
        url={postPageCommentsDrawerUrl}
        launchUrl={postPageUrl}
        isOpen={Boolean(drawerMatch)}
        postId={post.id}
      />
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
