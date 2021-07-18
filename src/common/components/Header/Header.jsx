import { Button } from '@material-ui/core'
import LOGOS from 'common/constants/logos'
import ROUTES from 'common/constants/paths'
import { userSelector } from 'features/User/redux/selectors/userSelectors'
import { logout } from 'features/User/redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'

import './header.scss'

const paths = [
  {
    text: 'Sign in',
    path: ROUTES.SIGN_IN
  },
  {
    text: 'Sign up',
    path: ROUTES.SIGN_UP
  }
]

const Header = () => {
  const dispatch = useDispatch()
  const { logged } = useSelector(userSelector)
  const { pathname } = useLocation()

  const handleLogout = () => dispatch(logout())

  return (
    <header className="header">
      <div className="logo">
        <img src={LOGOS.HEADER} alt="Logo del ecommerce" />
      </div>
      <nav className="nav">
        {logged ? (
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <ul>
            {paths.map(({ path, text }) => (
              <li key={path} className="nav-item">
                <Link
                  className={`nav-link ${pathname === path ? 'active' : ''}`}
                  to={path}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
