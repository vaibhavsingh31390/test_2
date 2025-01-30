import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="global--header">
      <h2 className="logo font-bold text-xl">
        <Link to="/" className="global--header--link">
          LOGO
        </Link>
      </h2>
      <nav className="menu" aria-label="Main Navigation">
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `global--header--link ${isActive ? "underline" : ""}`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `global--header--link ${isActive ? "underline" : ""}`
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
