import DrawerRouterContext from "./DrawerRouterContext";
import { resolvePath, useSearchParams } from "react-router-dom";
import { useContext } from "react";

export default function useResolvedDrawerLocation(to) {
  const { base, paramKey } = useContext(DrawerRouterContext);
  const { pathname } = resolvePath(to, base);

  const [params] = useSearchParams();
  const newParams = new URLSearchParams(params);

  if (pathname === "/") {
    // If the resolved path is the "root", we must be navigating
    // out of all the drawers, so we want to remove the drawer
    // location param instead of changing it.
    newParams.delete(paramKey);
  } else {
    // If the resolved path is not the "root", we want to change
    // the drawer location param to the resolved path.
    newParams.set(paramKey, pathname);
  }

  return newParams.toString();
}
