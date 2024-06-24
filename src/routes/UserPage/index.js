import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import UserAlbumDrawerContent from "./AlbumDrawer";
import PostDrawerContent from "../../common/components/PostDrawer";
import UserTasksDrawerContent from "./TasksDrawer";
import { DrawerLink, DrawerRoute, DrawerRouter } from "../../common/components/DrawerRouter";

function UserPageContent ({ user }) {
  return (
    <>
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <div className="mt-2">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Tasks</h3>
        <DrawerLink to="tasks/open">
          View tasks
        </DrawerLink>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Posts</h3>
        <ul className="mt-2 list-disc">
          {user?.posts?.map(post => {
            return (
              <li key={post.id} className="ml-4">
                <DrawerLink to={`post/${post.id}`}>
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
              <DrawerLink to={`album/${album.id}`}>
                {album.title}
              </DrawerLink>
            </li>
          ))}
        </ul>
      </div>

      <DrawerRouter>
        <DrawerRoute
          id="user-page-post-drawer"
          path="post/:postId/*"
          element={
            ({ params }) => (
              <PostDrawerContent
                postId={params.postId}
              />
            )
          }
        />
        <DrawerRoute
          id="user-page-tasks-drawer"
          path="/tasks/:view"
          element={
            ({ params }) => (
              <UserTasksDrawerContent
                userId={user.id}
                isShowingCompletedTasks={params.view === 'completed'}
              />
            )
          }
        />
        <DrawerRoute
          id="user-page-album-drawer"
          path="album/:albumId/*"
          element={
            ({ params }) => (
              <UserAlbumDrawerContent
                albumId={params.albumId}
                userId={user.id}
              />
            )
          }
        />
      </DrawerRouter>
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
