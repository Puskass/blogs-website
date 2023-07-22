import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import NavItem from "./NavItem";
import { nav } from "./navLinks";

export const RenderNavigation = () => {
  const { token, signOut } = useAuth();

  return (
    <div className="menu">
      {nav.map((r, i) => {
        if ((!r.isPrivate && r.isMenu) || (r.isPrivate && !token && r.isMenu)) {
          return <NavItem key={i} to={r.path} label={r.name} />;
        }
        return null;
      })}

      {token && (
        <div className="menuItem">
          <Link to="#" onClick={signOut}>
            Sign Out
          </Link>
        </div>
      )}
    </div>
  );
};
