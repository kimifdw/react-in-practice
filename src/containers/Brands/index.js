import React from 'react'
import { Button, Card, Table, Tag, Tooltip } from 'antd'

import styles from './style.less'
const ButtonGroup = Button.Group
const brandsColumns = [{
  title: '标题',
  dataIndex: 'name',
  key: 'name',
  render: (text, record) => (
    <div><img className={styles.logo} src={record.logo} alt='logo' /><span>{text}</span></div>
  )
}, {
  title: 'Campaigns',
  dataIndex: 'campaigns',
  key: 'campaigns',
  render: campaigns => (
    <span>
      <Tooltip title='Live'><Tag color='#87d068'>{campaigns.live}</Tag></Tooltip>
      <Tooltip title='Drfat'><Tag color='#f50'>{campaigns.draft}</Tag></Tooltip>
      <Tooltip title='Completed'><Tag color='#2db7f5'>{campaigns.completed}</Tag></Tooltip>
    </span>
  )
}, {
  title: '管理者',
  dataIndex: 'accountManagers',
  key: 'accountManagers',
  render: accountManagers => (
    accountManagers && accountManagers.join(' | ')
  )
}, {
  title: '状态',
  dataIndex: 'status',
  key: 'status',
  render: status => {
    if (status === 0) {
      return <Tag color='#2db7f5'>尚未认证</Tag>
    } else if (status === 1) {
      return <Tag color='#87d068'>认证通过</Tag>
    } else if (status === 2) {
      return <Tag color='#f50'>认证失败</Tag>
    }
  }
}, {
  title: '操作',
  key: 'action',
  render: () => (
    <ButtonGroup>
      <Button type='primary' icon='info-circle' />
      <Button type='primary' icon='edit' />
    </ButtonGroup>
  )
}]
const brandsData = [{
  key: '1',
  logo: 'https://skreem.s3.amazonaws.com/brands/53/small_vivavideo-d1890bc1.png',
  name: 'ViviVideo',
  campaigns: {
    live: 0,
    draft: 1,
    completed: 0
  },
  accountManagers: ['XueSeason'],
  status: 1
}]

function Brands () {
  return (
    <Card loading={false} title={'Brands'} extra={<Button icon='plus-circle' type='primary'>添加</Button>} >
      <Table columns={brandsColumns} dataSource={brandsData} />
    </Card>
  )
}

export default Brands
