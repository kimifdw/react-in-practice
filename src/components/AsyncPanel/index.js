import React from 'react'
import { Card } from 'antd'

class AsyncPanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isLoading: true, Host: null }
    this.loadComponent(this.props.importer)
  }
  async loadComponent (importer) {
    const page = await importer()
    this.setState({ isLoading: false, Host: page.default })
  }
  render () {
    const { isLoading, Host } = this.state
    if (!isLoading && Host) {
      return <Host {...this.props} />
    } else {
      return <Card loading />
    }
  }
}

export default AsyncPanel
