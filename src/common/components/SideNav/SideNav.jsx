import dashboardRoutes from 'common/constants/dashboardRoutes'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './sideNav.scss'

const SideNav = () => {
  const location = useLocation()

  const isActivePage = (path) => {
    return location.pathname.match(path)
  }

  return (
    <div className="sidenav">
      <ul className="sidenav-list">
        {dashboardRoutes.map((route) => (
          <li className="sidenav-btn" key={route.key}>
            <Link
              className={`${isActivePage(route.path) ? 'active' : ''}`}
              to={route.path}
              key={route.key}
            >
              {route.text.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideNav
