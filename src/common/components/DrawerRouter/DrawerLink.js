import useResolvedDrawerLocation from "./useResolvedDrawerLocation";
import LinkToDrawer from '../LinkToDrawer';

function DrawerLink({ children, className, to }) {
  const search = useResolvedDrawerLocation(to);
  return (
    // Opening/closing drawers should always replace the
    // current URL in the Browser's history.
    <LinkToDrawer className={className} to={{ search }} replace>
      {children}
    </LinkToDrawer>
  );
}

export default DrawerLink;
