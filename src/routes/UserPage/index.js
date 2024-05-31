import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import DrawerLink from "../../common/components/LinkToDrawer";
import { getUserAlbumUrl, getUserOpenTasksUrl, getUserPostUrl } from "../../common/utils/urlGetters/user";
import useGetDrawerParams from "../../common/utils/useGetDrawerParams";
import UserAlbumDrawer from "./AlbumDrawer";
import UserAlbumPhotoDrawer from "./AlbumPhotoDrawer";
import UserPostDrawerCommentsDrawer from "./PostCommentsDrawer";
import UserPostDrawer from "./PostDrawer";
import UserTasksDrawer from "./TasksDrawer";

function UserPageContent ({ user }) {
  /*
    Note: Bring drawer visibility to the top of a page so it's clear that:
    * the page has drawers
    * which drawers the page has
    * which query string params affect the drawer visibility
  */
  const [
    postId,
    comments,
    albumId,
    photoId,
    openTasks,
    completedTasks,
  ] = useGetDrawerParams([
    'postId',
    'comments',
    'albumId',
    'photoId',
    'openTasks',
    'completedTasks',
  ])
  const isPostDrawerOpen = Boolean(postId)
  const isPostCommentsDrawerOpen = Boolean(postId) && Boolean(comments)
  const isTasksDrawerOpen = Boolean(openTasks) || Boolean(completedTasks)
  const isAlbumDrawerOpen = Boolean(albumId)
  const isAlbumPhotoDrawerOpen = Boolean(albumId) && Boolean(photoId)

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
        isOpen={isPostDrawerOpen}
        postId={postId}
        userId={user.id}
      />
      <UserPostDrawerCommentsDrawer
        isOpen={isPostCommentsDrawerOpen}
        postId={postId}
        userId={user.id}
      />
      <UserTasksDrawer
        isOpen={isTasksDrawerOpen}
        userId={user.id}
        isShowingCompletedTasks={Boolean(completedTasks)}
      />
      <UserAlbumDrawer
        albumId={albumId}
        isOpen={isAlbumDrawerOpen}
        userId={user.id}
      />
      <UserAlbumPhotoDrawer
        albumId={albumId}
        isOpen={isAlbumPhotoDrawerOpen}
        photoId={photoId}
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
