import React from 'react'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import { Redirect, withRouter } from 'react-router-dom'
import LoginFrom from '../../components/Login'
import { loginRequest } from '../../store/actions'

class Login extends React.PureComponent {
  onSubmit (values) {
    const { username, password, remember } = values
    if (remember) {}
    this.props.loginRequest(username, password)
  }
  render () {
    if (this.props.isAuthenticated) {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      if (from.pathname.indexOf('/login') === 0) {
        from.pathname = '/'
      }
      return <Redirect to={from} />
    } else {
      return (
        <Spin tip='登录中' spinning={this.props.isFetching}>
          <LoginFrom onSubmit={values => this.onSubmit(values)} />
        </Spin>
      )
    }
  }
}

const mapStateToProps = state => {
  return { isFetching: state.user.isFetching, isAuthenticated: state.user.isAuthenticated }
}

export default connect(mapStateToProps, { loginRequest })(withRouter(Login))
