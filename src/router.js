import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import PageLayout from './layouts/PageLayout'
import UserLayout from './layouts/UserLayout'

const mapStateToProps = state => {
  return { isAuthenticated: state.user.isAuthenticated }
}

const PrivateRoute = connect(mapStateToProps)(({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }
  />
))

class RouterHub extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={PageLayout} />
          <Route exact path='/login' component={UserLayout} />
          <PrivateRoute exact path='/:other' component={PageLayout} />
        </Switch>
      </Router>
    )
  }
}

export default RouterHub
