import { useNavigate } from 'react-router-dom'
import { callAllHandlers } from './function'
import { useMemo } from 'react'

function getDrawerUrl (launchUrl, drawerPath) {
  const url = new URL(launchUrl, 'http://example.com/')
  url.searchParams.set('d', drawerPath)
  return `${url.pathname}${url.search}`
}

/*
* could be used for path based or query string based drawers
* reliance on react-router-dom. We could pull that out if we wanted
*/
function useUrlDrawer(props) {
  const {
    id,
    drawerPath, // required so we can navigate to the drawer in onOpen (only used in getTriggerProps)
                // not sure if getTriggerProps will be used for URLs though. `url` also needed for
                // nested drawers where we create a pattern like `/album/21/photo/:photoId` for launching
                // the child drawer. Could make this `drawerPath` only if that makes things easier
    isOpen,
    launchUrl,  // required so we can close the drawer
    onClose: onCloseOption,
    onOpen: onOpenOption,
  } = props

  const drawerUrl = getDrawerUrl(launchUrl, drawerPath)

  const navigate = useNavigate()

  const onClose = useMemo(
    () => callAllHandlers(onCloseOption, () => {
      navigate(launchUrl, { replace: true })
    }),
    [onCloseOption, navigate, launchUrl],
  )

  const onOpen = useMemo(
    () => callAllHandlers(onOpenOption, () => {
      navigate(drawerUrl, { replace: true })
    }),
    [onOpenOption, navigate, drawerUrl],
  )

  return useMemo(
    () => ({
      getDrawerProps: (props = {}) => {
        return {
          ...props,
          id,
          isOpen,
          onClose: callAllHandlers(props.onClose, onClose),
          drawerUrl,
          drawerPath,
          launchUrl,
        }
      },
      getTriggerProps: (props = {}) => ({
        ...props,
        'aria-expanded': String(isOpen),
        'aria-controls': id,
        onClick: callAllHandlers(props.onClick, onOpen),
      }),
      isOpen: Boolean(isOpen),
      onOpen,
      onClose,
    }),
    [id, isOpen, onClose, onOpen, drawerUrl, drawerPath, launchUrl],
  )
}

export default useUrlDrawer
