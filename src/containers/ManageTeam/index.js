import React from 'react'
import { Card, Table, Button, Tag } from 'antd'
import styles from './style.less'

const memberData = [{
  key: '0',
  name: 'Anita',
  email: 'anita@quvideo.com',
  avatar: 'http://brands.skreem.io/assets/logo-watermark-app-755f7d87e97524d63a556e49f5828a7b92237a17a5bce6ba6c09319080fd5eb7.jpg',
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
