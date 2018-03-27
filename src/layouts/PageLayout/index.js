import React from 'react'
import { Layout } from 'antd'
import MenuLayout from './MenuLayout'
import HeaderLayout from './HeaderLayout'
import ContentLayout from './ContentLayout'

class PageLayout extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { collapsed: false }
  }
  toggle () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    return (
      <Layout hasSider>
        <MenuLayout collapsed={this.state.collapsed} toggle={this.toggle} />
        <Layout>
          <HeaderLayout collapsed={this.state.collapsed} toggle={this.toggle} />
          <ContentLayout />
        </Layout>
      </Layout>
    )
  }
}

export default PageLayout
