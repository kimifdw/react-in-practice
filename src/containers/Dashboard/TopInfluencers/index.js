import React from 'react'
import { Card, List, Avatar, Tag } from 'antd'

const data = [
  {
    name: 'Ant Design Title 1',
    email: 'angela.gutierrez@example.com',
    tags: ['时尚', '搞笑', '网红'],
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  {
    name: 'Ant Design Title 2',
    email: 'angela.gutierrez@example.com',
    tags: ['时尚', '搞笑', '网红'],
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  {
    name: 'Ant Design Title 3',
    email: 'angela.gutierrez@example.com',
    tags: ['时尚', '搞笑', '网红'],
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  {
    name: 'Ant Design Title 4',
    email: 'angela.gutierrez@example.com',
    tags: ['时尚', '搞笑', '网红'],
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  }
]

const colors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple'
]

function TopInfluencers () {
  return (
    <Card title='Top Influencers'>
      <List
        itemLayout='horizontal'
        dataSource={data}
        renderItem={(item, i) => (
          <List.Item key={i}>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href='https://ant.design'>{item.name}</a>}
              description={item.email}
            />
            <div>
              {
                item.tags.map((text, i) => (<Tag key={i} color={colors[i]}>{text}</Tag>))
              }
            </div>
          </List.Item>
        )}
      />
    </Card>
  )
}

export default TopInfluencers
