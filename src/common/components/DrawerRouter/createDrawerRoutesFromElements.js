import { Children, isValidElement } from "react";

function createDrawerRoutesFromElements(elements) {
  return Children.toArray(elements)
    .map((child) => {
      if (isValidElement(child)) {
        return {
          key: child.key,
          ...child.props,
        };
      }
      return null
    })
    .filter(Boolean);
}

export default createDrawerRoutesFromElements;
