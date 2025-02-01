import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { authHelper, routeHelper } from '../../utils/constants';
import { ButtonLoader } from './FormElements';
import { useRequest } from '../../hooks/useRequest';
import { useTriggerToast } from '../../hooks/useTriggerToast';

function Header() {
  const { isAuth } = useSelector((state) => state.auth);
  const { loading, error, data, fetchData } = useRequest();
  const dispatch = useDispatch();
  useTriggerToast(error, data, authHelper(error, null, dispatch));

  const showLinks = Object.entries(routeHelper.links).filter(([key]) => {
    if (isAuth) {
      return key !== 'login' && key !== 'register';
    } else {
      return key === 'login' || key === 'register';
    }
  });

  const handleLogout = async (event) => {
    event.preventDefault();
    await fetchData('logout', 'POST');
  };

  return (
    <header className="global--header">
      <div className="container mx-auto py-4 px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between gap-5 px-2 sm:px-2 lg:px-2">
          <h2 className="logo font-bold text-xl">
            <Link to="/" className="global--header--link">
              LOGO
            </Link>
          </h2>
          <nav className="menu" aria-label="Main Navigation">
            <ul className="flex gap-8 justify-end items-center">
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
              <li>
                <ButtonLoader
                  className="header--button"
                  loader={loading}
                  type="button"
                  value={loading ? 'Logging Out' : 'Logout'}
                  onClick={handleLogout}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
