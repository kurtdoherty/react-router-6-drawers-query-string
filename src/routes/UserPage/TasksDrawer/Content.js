import { useQuery } from "@tanstack/react-query";
import { getTasksByUserId } from "../../../common/api/task";
import DrawerHeader from "../../../common/components/DrawerHeader"
import DrawerLink from "../../../common/components/LinkToDrawer"
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent"
import { getUserCompletedTasksUrl, getUserOpenTasksUrl } from "../../../common/utils/urlGetters/user";

function UserTasksDrawerQuery ({ children, userId, loading }) {
  const { data, isLoading } = useQuery({ queryKey: ['tasks', userId], queryFn: () => getTasksByUserId(userId)})
  if (isLoading) return loading
  return children(data)
}

function TaskList ({ tasks, isCompletedVisible }) {
  const filteredTasks = tasks.filter(task => task.completed === isCompletedVisible)
  return (
    <>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className="mb-2">
            <p>{task.completed ? '⬜️' : '✅'} {task.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function UserTasksDrawerContent ({ onClose, userId, isCompletedVisible }) {
  return (
    <UserTasksDrawerQuery
      userId={userId}
      loading={<LoadingDrawerContent onClose={onClose} />}
    >
      {tasks => (
        <>
          <DrawerHeader title="Tasks" onClose={onClose} />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <DrawerLink to={getUserOpenTasksUrl(userId)}>
                  Open
                </DrawerLink>
              </li>
              <li>
                <DrawerLink to={getUserCompletedTasksUrl(userId)}>
                  Completed
                </DrawerLink>
              </li>
            </ul>
          </nav>
          <div className="mt-4">
            <TaskList tasks={tasks} isCompletedVisible={isCompletedVisible} />
          </div>
        </>
      )}
    </UserTasksDrawerQuery>
  )
}

export default UserTasksDrawerContent
