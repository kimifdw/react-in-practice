import React from 'react'
import classNames from 'classnames'
import styles from './style.less'

export default ({ className, links, copyright }) => {
  return (
    <div className={classNames(styles.globalFooter, className)}>
      {
        links && (
          <div className={styles.links}>
            {
              links.map(link => (
                <a
                  key={link.key}
                  target={link.blankTarget ? '_blank' : '_self'}
                  href={link.href}
                >
                  {link.title}
                </a>
              ))
            }
          </div>
        )
      }
      { copyright && <div className={styles.copyright}>{copyright}</div> }
    </div>
  )
}
