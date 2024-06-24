import DrawerHeader from "../../../common/components/DrawerHeader"
import { DrawerLink } from "../../../common/components/DrawerRouter"

function TaskList ({ tasks, isCompletedVisible }) {
  const filteredTasks = tasks.filter(task => task.completed === isCompletedVisible)
  return (
    <>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className="mb-2">
            <p>{task.completed ? '✅' : '⬜️'} {task.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function UserTasksDrawerContent ({ tasks, isCompletedVisible }) {
  return (
   <>
      <DrawerHeader title="Tasks" />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <DrawerLink to="../open" className={isCompletedVisible ? '' : 'font-bold' }>
              Open
            </DrawerLink>
          </li>
          <li>
            <DrawerLink to="../completed" className={isCompletedVisible ? 'font-bold' : '' }>
              Completed
            </DrawerLink>
          </li>
        </ul>
      </nav>
      <div className="mt-4">
        <TaskList tasks={tasks} isCompletedVisible={isCompletedVisible} />
      </div>
    </>
  )
}

export default UserTasksDrawerContent
