import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import DrawerLink from "../../common/components/LinkToDrawer";
import { getUserAlbumUrl, getUserOpenTasksUrl, getUserPostUrl } from "../../common/utils/urlGetters/user";
import useDrawerRouteMatch from "../../common/utils/useDrawerRouteMatch";
import UserAlbumDrawer from "./AlbumDrawer";
import UserAlbumPhotoDrawer from "./AlbumPhotoDrawer";
import UserPostDrawerCommentsDrawer from "./PostCommentsDrawer";
import UserPostDrawer from "./PostDrawer";
import UserTasksDrawer from "./TasksDrawer";

function UserPageContent ({ user }) {
  const { isOpen: isPostDrawerMatched, params: postDrawerParams } = useDrawerRouteMatch('/post/:postId')
  const { isOpen: isCommentsDrawerMatched, params: commentDrawerParams } = useDrawerRouteMatch('/post/:postId/comments')
  const { isOpen: isTasksDrawerMatched, params: taskDrawerParams } = useDrawerRouteMatch('/tasks/:view')
  const { isOpen: isAlbumDrawerMatched, params: albumDrawerParams } = useDrawerRouteMatch('/album/:albumId')
  const { isOpen: isPhotoDrawerMatched, params: photoDrawerParams } = useDrawerRouteMatch('/album/:albumId/photo/:photoId')

  return (
    <>
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <div className="mt-2">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Tasks</h3>
        <DrawerLink to={getUserOpenTasksUrl(user.id)}>
          View tasks
        </DrawerLink>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Posts</h3>
        <ul className="mt-2 list-disc">
          {user?.posts?.map(post => {
            return (
              <li key={post.id} className="ml-4">
                <DrawerLink to={getUserPostUrl(user.id, post.id)}>
                  {post.title}
                </DrawerLink>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Albums</h3>
        <ul className="mt-2 list-disc">
          {user?.albums?.map(album => (
            <li key={album.id} className="ml-4">
              <DrawerLink to={getUserAlbumUrl(user.id, album.id)}>
                {album.title}
              </DrawerLink>
            </li>
          ))}
        </ul>
      </div>

      <UserPostDrawer
        isOpen={isPostDrawerMatched || isCommentsDrawerMatched}
        postId={postDrawerParams.postId || commentDrawerParams.postId}
        userId={user.id}
      />
      <UserPostDrawerCommentsDrawer
        isOpen={isCommentsDrawerMatched}
        postId={commentDrawerParams.postId}
        userId={user.id}
      />
      <UserTasksDrawer
        isOpen={isTasksDrawerMatched}
        userId={user.id}
        isShowingCompletedTasks={taskDrawerParams.view === 'completed'}
      />
      <UserAlbumDrawer
        albumId={albumDrawerParams.albumId || photoDrawerParams.albumId}
        isOpen={isAlbumDrawerMatched || isPhotoDrawerMatched}
        userId={user.id}
      />
      <UserAlbumPhotoDrawer
        albumId={photoDrawerParams.albumId}
        isOpen={isPhotoDrawerMatched}
        photoId={photoDrawerParams.photoId}
        userId={user.id}
      />
    </>
  )
}

function UserPage () {
  const data = useLoaderData()
  return (
    <>
      <Suspense fallback={<h2 className="text-2xl font-bold text-slate-500">Loading...</h2>}>
        <Await resolve={data.user}>
          {user => <UserPageContent user={user} />}
        </Await>
      </Suspense>
    </>
  );
}

export default UserPage
