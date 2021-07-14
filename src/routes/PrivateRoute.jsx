import React from 'react'
import { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import ROUTES from 'common/constants/paths'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuth] = useState(false)
  const [loading] = useState(false)

  return (
    <>
      {loading ? (
        <div>user loading...</div>
      ) : (
        <Route
          {...rest}
          render={(props) =>
            isAuth ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: ROUTES.SIGN_IN,
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      )}
    </>
  )
}

export default PrivateRoute
