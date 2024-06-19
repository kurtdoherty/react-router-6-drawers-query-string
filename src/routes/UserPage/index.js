import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import DrawerLink from "../../common/components/LinkToDrawer";
import { getUserAlbumUrl, getUserOpenTasksUrl, getUserPostUrl } from "../../common/utils/urlGetters/user";
import useDrawerRouteMatch from "../../common/utils/useDrawerRouteMatch";
import UserAlbumDrawer from "./AlbumDrawer";
import UserPostDrawer from "./PostDrawer";
import UserTasksDrawer from "./TasksDrawer";

function UserPageContent ({ user }) {

  // Note: I like having the drawer path patterns and isOpen logic at the page level
  // * I wonder if we could move useUrlDrawer usage here but the code gets too verbose
  // * I wonder if we could combine useDrawerRouteMatch and useUrlDrawer into a single
  //   hook and still keep good visibility at this level
  // * I think code to show a single drawer on a page is much simpler than showing multiple
  //   drawers. In fact, when showing a single drawer, I have put useDrawerRouteMatch and
  //   useUrlDrawer side by side. See `PostPage`
  // * Drawers get matched and launched from: pages, drawers or drawer contents
  // * Awkward: Drawer types which all are a little different:
  //    * not shared (e.g. UserAlbumDrawer)
  //    * not shared nested (e.g. UserAlbumPhotoDrawer)
  //    * shared (e.g. PostDrawer, CommentsDrawer)
  //    * shared nested (e.g. CommentsDrawer)
  const drawerMatch = useDrawerRouteMatch([
    '/post/:postId/*', // splat means child drawers
    '/album/:albumId/*',
    '/tasks/:view',
  ])

  return (
    <>
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <div className="mt-2">
        {JSON.stringify(drawerMatch)}
      </div>
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
        isOpen={Boolean(drawerMatch?.params?.postId)}
        postId={drawerMatch?.params?.postId}
        userId={user.id}
      />
      <UserTasksDrawer
        isOpen={Boolean(drawerMatch?.params?.view)}
        userId={user.id}
        isShowingCompletedTasks={drawerMatch?.params?.view === 'completed'}
      />
      <UserAlbumDrawer
        isOpen={Boolean(drawerMatch?.params?.albumId)}
        albumId={drawerMatch?.params?.albumId}
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
