import React from 'react'
import { Card, List, Avatar } from 'antd'

const data = [
  {
    name: 'Ant Design Title 1',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
    avatar: 'https://skreem.s3.amazonaws.com/campaigns/156/small_vivavideo-15c81017.jpg'
  },
  {
    name: 'Ant Design Title 2',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
    avatar: 'https://skreem.s3.amazonaws.com/campaigns/156/small_vivavideo-15c81017.jpg'
  },
  {
    name: 'Ant Design Title 3',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
    avatar: 'https://skreem.s3.amazonaws.com/campaigns/156/small_vivavideo-15c81017.jpg'
  },
  {
    name: 'Ant Design Title 4',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
    avatar: 'https://skreem.s3.amazonaws.com/campaigns/156/small_vivavideo-15c81017.jpg'
  }
]

function RecentCampaigns () {
  return (
    <Card title='Recent Campaigns'>
      <List
        itemLayout='horizontal'
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href='https://ant.design'>{item.name}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Card>
  )
}

export default RecentCampaigns
