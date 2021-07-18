import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import ROUTES from 'common/constants/paths'
import { useSelector } from 'react-redux'
import { userSelector } from 'features/User/redux/selectors/userSelectors'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { logged } = useSelector(userSelector)

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          logged ? (
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
    </>
  )
}

export default PrivateRoute
