import React from 'react'
import styles from './style.less'

function Tile ({ name, value, color = '#444', subColor = '#999', bgColor = '#fff' }) {
  return (
    <div className={styles.panel} style={{ backgroundColor: bgColor }}>
      <div className={styles.value} style={{ color: color }}>{value}</div>
      <div className={styles.name} style={{ color: subColor }}>{name}</div>
    </div>
  )
}

export default Tile
