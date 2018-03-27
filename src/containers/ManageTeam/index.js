import React from 'react'
import { Card, Table, Button, Tag } from 'antd'
import styles from './style.less'

const memberData = [{
  key: '0',
  name: 'Season',
  email: 'jijie.xue@quvideo.com',
  avatar: 'https://skreem.s3.amazonaws.com/brands/53/small_vivavideo-d1890bc1.png',
  role: 'Admin',
  brands: 'All'
}]

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: (name, record) => (
    <div>
      <img src={record.avatar} alt='avatar' className={styles.avatar} />
      <div className={styles.name}>{name}</div>
      <div className={styles.email}>{record.email}</div>
    </div>
  )
}, {
  title: 'Role',
  dataIndex: 'role',
  key: 'role',
  render: text => <Tag color='#87d068'>{text}</Tag>
}, {
  title: 'Brands',
  dataIndex: 'brands',
  key: 'brands'
}, {
  title: 'Actions',
  key: 'actions'
}]

function ManageTeam () {
  return (
    <Card title='Manage Team' extra={<Button type='primary'>Add Member</Button>}>
      <Table columns={columns} dataSource={memberData} />
    </Card>
  )
}

export default ManageTeam
