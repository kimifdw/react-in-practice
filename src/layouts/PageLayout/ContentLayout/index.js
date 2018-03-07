import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import AsyncPanel from '../../../components/AsyncPanel'
import RouterConfig from '../../../common/router'
import GlobalFooter from '../../../components/GlobalFooter'
import Copyright from '../../../components/Copyright'
import NotFound from '../../../containers/Exception/404'

const { Content } = Layout

const routerConfig = RouterConfig.map(x => x.items).reduce((a, b) => a.concat(b))

function ContentLayout (props) {
  return (
    <Content style={{ minHeight: 280 }}>
      <Switch>
        {
          routerConfig.map(x => (
            <Route
              exact
              key={x.key}
              path={x.path}
              render={
                props => <AsyncPanel {...props} importer={x.importer} />
              }
            />
          ))
        }
        {/* <Redirect to={{ pathname: routerConfig[0].path, state: { from: props.location } }} /> */}
        <Redirect exact from='/' to='/dashboard' />
        <Route component={NotFound} />
      </Switch>
      <GlobalFooter copyright={<Copyright />} />
    </Content>
  )
}

export default withRouter(ContentLayout)
