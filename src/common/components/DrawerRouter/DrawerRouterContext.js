import { createContext } from "react";

const DrawerRouterContext = createContext({
  base: "",
  paramKey: "d",
});

export default DrawerRouterContext;
