import ROUTES from 'common/constants/paths'
import SignIn from 'features/User/pages/SignIn/SignIn'
import SignUp from 'features/User/pages/SignUp/SignUp'
import Dashboard from 'pages/Dashboard/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={ROUTES.SIGN_IN} component={SignIn} />
        <Route exact={true} path={ROUTES.SIGN_UP} component={SignUp} />
        <PrivateRoute path={ROUTES.DASHBOARD} component={Dashboard} />
        <Redirect to={ROUTES.SIGN_IN} />
      </Switch>
    </Router>
  )
}

export default Routes
