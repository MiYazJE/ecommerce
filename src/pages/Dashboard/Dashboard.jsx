import SideNav from 'common/components/SideNav/SideNav'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import dashboardRoutes from 'common/constants/dashboardRoutes'

import './dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideNav />
      <div className="dashboard-content">
        <Switch>
          {dashboardRoutes.map((route) => (
            <Route
              key={route.key}
              component={route.Component}
              path={route.path}
            />
          ))}
        </Switch>
      </div>
    </div>
  )
}

export default Dashboard
