import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import meunConfig from '../../../common/router'
import style from './style.less'

const { ItemGroup } = Menu
const { Sider } = Layout

function MenuLayout ({ collapsed, toggle }) {
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={toggle} style={{ minHeight: '100vh' }}>
      <div className={style.logo} />
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        {
          meunConfig.map((group, index) => {
            const list = group.items.map(item => (
              <Menu.Item key={item.key}>
                <Link to={item.path}>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
                </Link>
              </Menu.Item>
            ))
            if (collapsed) {
              return list
            } else {
              return (
                <ItemGroup title={group.title} key={index}>
                  { list }
                </ItemGroup>
              )
            }
          })
        }
      </Menu>
    </Sider>
  )
}

export default MenuLayout
