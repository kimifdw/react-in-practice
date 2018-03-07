import React from 'react'
import { Layout, Menu, Dropdown, Icon, Input, Badge, Avatar, Popover, List } from 'antd'
import style from './style.less'
import moment from 'moment'

const { Header } = Layout
const Search = Input.Search

const menu = (
  <Menu>
    <Menu.Item key='0'>
      <Icon type='pay-circle' />
      <span style={{ marginLeft: '8px' }}>Compaign Credits</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key='1'>
      <Icon type='logout' />
      <span style={{ marginLeft: '8px' }}>Logout</span>
    </Menu.Item>
  </Menu>
)

const notificationData = [
  {
    title: 'Ant Design Title 1',
    createaAt: 1520393243837,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  {
    title: 'Ant Design Title 2',
    createaAt: 1520393243837,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  {
    title: 'Ant Design Title 3',
    createaAt: 1520393243837,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  {
    title: 'Ant Design Title 4',
    createaAt: 1520393243837,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  }
]

const notificationList = (
  <List
    style={{ width: 250 }}
    itemLayout='horizontal'
    dataSource={notificationData}
    renderItem={(item, i) => (
      <List.Item key={i}>
        <a href='#'>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={item.title}
            description={moment(item.createaAt).format('LL')}
          />
        </a>
      </List.Item>
    )}
  />
)

function HeaderLayout ({ collapsed, toggle }) {
  return (
    <Header style={{ background: '#fff', padding: 0, marginBottom: '8px', boxShadow: '0 1px 4px rgba(0,21,41,.08)' }}>
      <Icon
        className={style.trigger}
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />
      <div style={{ display: 'inline-block', width: '200px' }}>
        <Search
          placeholder='Search Campaigns'
          onSearch={value => console.log(value)}
          enterButton
        />
      </div>
      <div style={{ float: 'right', marginRight: 24 }}>
        <Popover content={notificationList} title='通知' trigger='click'>
          <a href='#' style={{ marginRight: 24 }}>
            <Badge count={5}>
              <Icon type='bell' style={{ fontSize: 16 }} />
            </Badge>
          </a>
        </Popover>
        <Dropdown overlay={menu} trigger={['click']}>
          <span style={{ display: 'inline-block', height: '64px', cursor: 'pointer' }}>
            <Avatar style={{ backgroundColor: '#87d068' }} icon='user' />
            <span style={{ display: 'inline-block', marginLeft: '8px' }}>Viva Growth</span>
          </span>
        </Dropdown>
      </div>
    </Header>
  )
}

export default HeaderLayout
