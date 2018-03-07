import React from 'react'
import moment from 'moment'
import { Card, Table, Button, Tooltip, Icon } from 'antd'

const orderData = [{
  key: '0',
  no: 'SKRM0603475851',
  createdAt: 1520389746253,
  expire: 1520389846253,
  plan: 'Starter 50',
  credits: '0/1'
}]

const columns = [{
  title: 'Date',
  dataIndex: 'createdAt',
  key: 'createdAt',
  render: num => moment(num).format('LL')
}, {
  title: 'Plan',
  dataIndex: 'plan',
  key: 'plan'
}, {
  title: 'Credits',
  dataIndex: 'credits',
  key: 'credits',
  render: text => (
    <div>
      <span>{text}</span>
      <Tooltip title='1 credit(s) remaining'>
        <Icon type='info-circle' />
      </Tooltip>
    </div>
  )
}, {
  title: 'Transaction No.',
  dataIndex: 'no',
  key: 'no'
}, {
  title: 'Expiry Date',
  dataIndex: 'expire',
  key: 'expire',
  render: num => moment(num).format('LL')
}, {
  title: 'Action',
  key: 'action',
  render: () => (<Button type='primary' icon='eye' />)
}]

function Orders () {
  return (
    <Card title='Orders'>
      <Table columns={columns} dataSource={orderData} />
    </Card>
  )
}

export default Orders
