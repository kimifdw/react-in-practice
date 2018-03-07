import React from 'react'
import { Card, Icon, Avatar, Divider } from 'antd'
import styles from './style.less'

const { Meta } = Card

const campaginsData = [{
  cover: 'https://skreem.s3.amazonaws.com/campaigns/156/large_vivavideo-15c81017.jpg',
  avatar: 'https://skreem.s3.amazonaws.com/brands/53/small_vivavideo-d1890bc1.png',
  campaginName: 'campagin - 0',
  brandName: 'VivaVideo',
  impressions: 0,
  engagements: 1,
  posts: 0,
  totalPosts: 0
}, {
  cover: 'https://skreem.s3.amazonaws.com/campaigns/156/large_vivavideo-15c81017.jpg',
  avatar: 'https://skreem.s3.amazonaws.com/brands/53/small_vivavideo-d1890bc1.png',
  campaginName: 'campagin - 1',
  brandName: 'VivaVideo',
  impressions: 0,
  engagements: 1,
  posts: 0,
  totalPosts: 0
}, {
  cover: 'https://skreem.s3.amazonaws.com/campaigns/156/large_vivavideo-15c81017.jpg',
  avatar: 'https://skreem.s3.amazonaws.com/brands/53/small_vivavideo-d1890bc1.png',
  campaginName: 'campagin - 2',
  brandName: 'VivaVideo',
  impressions: 0,
  engagements: 1,
  posts: 0,
  totalPosts: 0
}, {
  cover: 'https://skreem.s3.amazonaws.com/campaigns/156/large_vivavideo-15c81017.jpg',
  avatar: 'https://skreem.s3.amazonaws.com/brands/53/small_vivavideo-d1890bc1.png',
  campaginName: 'campagin - 3',
  brandName: 'VivaVideo',
  impressions: 0,
  engagements: 1,
  posts: 0,
  totalPosts: 0
}, {
  cover: 'https://skreem.s3.amazonaws.com/campaigns/156/large_vivavideo-15c81017.jpg',
  avatar: 'https://skreem.s3.amazonaws.com/brands/53/small_vivavideo-d1890bc1.png',
  campaginName: 'campagin - 4',
  brandName: 'VivaVideo',
  impressions: 0,
  engagements: 1,
  posts: 0,
  totalPosts: 0
}]

function CampaignsPanel () {
  return (
    <div className={styles.panel}>
      {
        campaginsData.map((row, i) => (
          <div className={styles.item} key={i}>
            <Card
              className={styles.card}
              cover={<img alt='cover' src={row.cover} />}
              actions={[<Icon type='edit' />, <Icon type='delete' />]}
            >
              <Meta
                avatar={<Avatar src={row.avatar} />}
                title={row.campaginName}
                description={row.brandName}
              />
              <Divider />
              <div>
                <div>IMPRESSIONS: {row.impressions}</div>
                <div>ENGAGEMENTS: {row.engagements}</div>
                <div>POSTS: {`${row.posts}/${row.totalPosts}`}</div>
              </div>
            </Card>
          </div>
        ))
      }
    </div>
  )
}

export default CampaignsPanel
