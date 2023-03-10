import Navlogo from "../pictures/navlogo.svg";
import "../design/navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
function navbar() {
  return (
    <nav className="navbar">
      <img alt="logo" src={Navlogo} width="70px" />

      <ul id="opts">
        <CustomLink id="fontt" to="./home">
          Home
        </CustomLink>
        <CustomLink id="fontt" to="./registration">
          Registration
        </CustomLink>
        <CustomLink id="fontt" to="./dashboard">
          {" "}
          Dashboard
        </CustomLink>
      </ul>
    </nav>
  );
}
export default navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
