import createDrawerRoutesFromElements from './createDrawerRoutesFromElements'
import Drawer from "../Drawer";
import DrawerRouterContext from "./DrawerRouterContext";
import { useCallback, useContext, useMemo } from "react";
import { matchRoutes, useParams, useSearchParams } from "react-router-dom";

function DrawerRouter({ children }) {
  const routes = createDrawerRoutesFromElements(children)

  const router = useContext(DrawerRouterContext);
  const { base, paramKey } = router;

  // NOTE: useParams returns us the *path* parameters for the current Route in our routing config.
  // For example, if the current route is /users/:userId, useParams provides us the value of the
  // :userId path parameter.
  const pageParams = useParams();

  // NOTE: useSearchParams returns us the URL search parameters from the current location's query string.
  // These URL search params are related to the current page.
  const [pageSearchParams, setPageSearchParams] = useSearchParams();

  // NOTE: this is the drawer "location". Since it's coming from a URL search param, we need to ensure we
  // decode it, otherwise it may contain some %-chars (e.g. %20).
  const currentLocation = decodeURIComponent(
    pageSearchParams.get(paramKey) ?? ""
  );

  const closeDrawer = useCallback(
    () =>
      setPageSearchParams((params) => {
        if (base) {
          // If we have a non-empty `base`, we're closing a nested drawer.
          // This means we need to set the drawer location param to the
          // location of our parent (which is the `base`)
          params.set(paramKey, base);
        } else {
          // If we do have an empty `base`, we're closing a "top-level" drawer.
          // This means we need to remove the drawer location param entirely.
          params.delete(paramKey);
        }
        return params;
      }),
    [base, setPageSearchParams, paramKey]
  );

  const matches = useMemo(
    () => matchRoutes(routes, currentLocation, base),
    [routes, currentLocation, base]
  );

  // NOTE: We only consider the first match. This is because the nesting of drawer routes happens by
  // nesting of DrawerRouter's, not DrawerRoute's themselves. This is a key difference from the RR6 API
  // for our page routes.
  const firstMatch = matches?.[0];

  // NOTE: everything above this `routes.map` code could be encapsulated in a `useDrawerRoutes` hook in
  // order to support a more imperative API usage if we want to allow flexibility in how a route is
  // rendered (e.g. extra props passed to a specific drawer, rendering the route as something "other than"
  // a drawer, and so on). There's also other API approaches we can take to enable this in future if we
  // discover the need.
  return routes.map((drawerRoute) => {
    const isOpen = firstMatch?.route.id === drawerRoute.id;
    return (
      <Drawer
        key={drawerRoute.id}
        id={drawerRoute.id}
        isOpen={isOpen}
        size={drawerRoute.size}
        onClose={closeDrawer}
      >
        <DrawerRouterContext.Provider
          value={{ ...router, base: matches?.[0].pathnameBase }}
        >
          {isOpen
            ? typeof drawerRoute.element === "function"
              ? drawerRoute.element({
                  pageParams,
                  pageSearchParams,
                  params: firstMatch?.params,
                })
              : drawerRoute.element
            : null}
        </DrawerRouterContext.Provider>
      </Drawer>
    );
  });
}

export default DrawerRouter;
