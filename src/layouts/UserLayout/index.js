import React from 'react'
import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import Login from '../../containers/Login'
import GlobalFooter from '../../components/GlobalFooter'
import Copyright from '../../components/Copyright'
import appConfig from '../../app.json'
import styles from './style.less'
import logo from '../../assets/logo.svg'

const links = [{
  key: 'help',
  title: '帮助',
  href: '#'
}, {
  key: 'privacy',
  title: '隐私',
  href: '#'
}, {
  key: 'terms',
  title: '条款',
  href: '#'
}]

function UserLayout () {
  return (
    <DocumentTitle title={`登录 - ${appConfig.title}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to='/'>
                <img alt='logo' className={styles.logo} src={logo} />
                <span className={styles.title}>Viva 广告平台</span>
              </Link>
            </div>
            <div className={styles.desc}>Viva 广告平台让信息传播变得更简单</div>
          </div>
          <Login />
        </div>
        <GlobalFooter links={links} copyright={<Copyright />} />
      </div>
    </DocumentTitle>
  )
}

export default UserLayout
