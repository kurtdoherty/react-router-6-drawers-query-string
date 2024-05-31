import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import { getUserOpenTasksUrl, getUserUrl } from "../../../common/utils/urlGetters/user";
import useGetDrawerParams from "../../../common/utils/useGetDrawerParams";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import UserTasksDrawerContent from "./Content";
import TasksDrawerQuery from "./Query";

function UserPostDrawer ({ userId }) {
  const [showOpenTasks, showCompletedTasks] = useGetDrawerParams(['openTasks', 'completedTasks'])
  const isOpen = Boolean(showOpenTasks) || Boolean(showCompletedTasks)
  const { getDrawerProps, onClose } = useUrlDrawer({
    id: 'user-post-drawer',
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
              isCompletedVisible={Boolean(showCompletedTasks)}
            />
          )}
        </TasksDrawerQuery>
      )}
    </Drawer>
  );
}

export default UserPostDrawer
