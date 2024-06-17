import { matchRoutes, useLocation } from "react-router"

function useDrawerRouteMatch (patterns) {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const drawerPath = searchParams.get('d') || ''
  const matches = matchRoutes(patterns.map(pattern => ({ path: pattern })), drawerPath)
  if (matches && matches.length > 1) {
    console.warn('Multiple drawer route matches found:', matches)
  }
  const match = matches ? matches[0] : null
  return match
    ? { path: match.route.path, params: match.params }
    : null
}

export default useDrawerRouteMatch
