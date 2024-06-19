import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import { getUserUrl } from "../../../common/utils/urlGetters/user";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import UserTasksDrawerContent from "./Content";
import TasksDrawerQuery from "./Query";

// Note: Drawer+Context component
function UserPostDrawer ({ userId, isOpen, isShowingCompletedTasks }) {
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: 'user-page-tasks-drawer',
    isOpen,
    drawerPath: `/tasks/open`, // This is a path. Could come from useGetDrawerRouteMatch
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
