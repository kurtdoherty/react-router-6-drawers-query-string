import Drawer from "../../../common/components/Drawer";
import { getUserUrl } from "../../../common/utils/urlGetters/user";
import useUrlDrawer from "../../../common/utils/useUrlDrawer";
import useGetDrawerParams from "../../../common/utils/useGetDrawerParams.js";
import { getUserOpenTasksUrl } from "../../../common/utils/urlGetters/user";
import UserTasksDrawerContent from "./content.js";

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
      <UserTasksDrawerContent
        userId={userId}
        onClose={onClose}
        isCompletedVisible={Boolean(showCompletedTasks)}
      />
    </Drawer>
  );
}

export default UserPostDrawer
