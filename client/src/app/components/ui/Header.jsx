import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { routeHelper } from '../../utils/constants';

function Header() {
  const { isAuth } = useSelector((state) => state.auth);

  const showLinks = Object.entries(routeHelper.links).filter(([key]) => {
    if (isAuth) {
      return key !== 'login' && key !== 'register';
    } else {
      return key === 'login' || key === 'register';
    }
  });

  return (
    <header className="global--header">
      <h2 className="logo font-bold text-xl">
        <Link to="/" className="global--header--link">
          LOGO
        </Link>
      </h2>
      <nav className="menu" aria-label="Main Navigation">
        <ul className="flex gap-8">
          {showLinks.map(([key, { path, name }]) => (
            <li key={key}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `global--header--link ${isActive ? 'underline' : ''}`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
