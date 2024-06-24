import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import UserTasksDrawerContent from "./Content";
import TasksDrawerQuery from "./Query";

// Note: Drawer+Context component
function UserPostDrawer ({ userId, isShowingCompletedTasks }) {
  return (
    <TasksDrawerQuery userId={userId} loading={<LoadingDrawerContent />}>
      {tasks => (
        <UserTasksDrawerContent
          tasks={tasks}
          isCompletedVisible={isShowingCompletedTasks}
        />
      )}
    </TasksDrawerQuery>
  );
}

export default UserPostDrawer
