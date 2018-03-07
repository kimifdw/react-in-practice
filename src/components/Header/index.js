import React from 'react'
import PropTypes from 'prop-types'
import style from './style.less'

function Header ({ title, description, more }) {
  return (
    <div className={style.box}>
      { more && <div className={style.more}>{more}</div> }
      <div className={style.title}>{title}</div>
      { description && <span>{description}</span> }
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  more: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
}

export default Header
