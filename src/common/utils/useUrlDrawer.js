import { useNavigate } from 'react-router-dom'
import { callAllHandlers } from './function'
import { useMemo } from 'react'

/*
* could be used for path based or query string based drawers
* reliance on react-router-dom. We could pull that out if we wanted
*/
function useUrlDrawer(props) {
  const {
    id,
    // FINISHED HERE: Pretty sure we don't need this because getTriggerProps would never be used
    url, // required so we can navigate to the drawer in onOpen (only used in getTriggerProps)
         // * could be called openUrl
    isOpen, // could drop this and replace with isOpenConfig
    // FINISHED HERE: This should be called page URL
    launchUrl, // required so we can close the drawer
               // * presumes the URL is within the same app else other onClose items (like requery) won't work
               // * could be called closeUrl
               // * could just take the current location and not require passing this at all
    onClose: onCloseOption,
    onOpen: onOpenOption,
  } = props

  const navigate = useNavigate()

  const onClose = useMemo(
    () => callAllHandlers(onCloseOption, () => {
      navigate(launchUrl, { replace: true })
    }),
    [onCloseOption, navigate, launchUrl],
  )

  const onOpen = useMemo(
    () => callAllHandlers(onOpenOption, () => {
      navigate(url, { replace: true })
    }),
    [onOpenOption, navigate, url],
  )

  return useMemo(
    () => ({
      getDrawerProps: (props = {}) => {
        return {
          ...props,
          id,
          isOpen,
          onClose: callAllHandlers(props.onClose, onClose),
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
    [id, isOpen, onClose, onOpen],
  )
}

export default useUrlDrawer
