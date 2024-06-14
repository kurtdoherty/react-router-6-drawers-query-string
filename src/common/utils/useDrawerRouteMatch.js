import { useLocation } from "react-router-dom"
import { matchPath } from "react-router"

function useDrawerRouteMatch (requiredPattern) {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const drawerPath = searchParams.get('d') || ''
  const match = matchPath(requiredPattern, drawerPath)
  return {
    isOpen: Boolean(match),
    params: match?.params ?? {},
  }
}

export default useDrawerRouteMatch
