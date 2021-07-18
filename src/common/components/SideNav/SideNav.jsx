import dashboardRoutes from 'common/constants/dashboardRoutes'
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './sideNav.scss'

const SideNav = () => {
  const location = useLocation()

  // useEffect(() => {
  //   console.log(location)
  // }, [location])

  return (
    <div className="sidenav">
      <ul className="sidenav-list">
        {dashboardRoutes.map((route) => (
          <li className="sidenav-btn" key={route.key}>
            <Link to={route.path} key={route.key}>
              {route.text.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideNav
