import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import { getUserOpenTasksUrl, getUserUrl } from "../../../common/utils/urlGetters/user";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import UserTasksDrawerContent from "./Content";
import TasksDrawerQuery from "./Query";

// Note: This is a place+drawer component because of the hard coded id and URL getters
function UserPostDrawer ({ userId, isOpen, isShowingCompletedTasks }) {
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: 'user-page-tasks-drawer',
    isOpen,
    url: getUserOpenTasksUrl(userId),
    launchUrl: getUserUrl(userId),
  })

  return (
    <Drawer {...getDrawerProps()}>
      {isOpen && (
        <TasksDrawerQuery userId={userId} loading={<LoadingDrawerContent onClose={onClose} />}>
          {tasks => (
            <UserTasksDrawerContent
              tasks={tasks}
              userId={userId}
              onClose={onClose}
              isCompletedVisible={isShowingCompletedTasks}
            />
          )}
        </TasksDrawerQuery>
      )}
    </Drawer>
  );
}

export default UserPostDrawer
