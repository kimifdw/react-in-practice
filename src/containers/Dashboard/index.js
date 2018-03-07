import React from 'react'
import { Row, Col } from 'antd'
import Header from '../../components/Header'
import Tile from '../../components/Tile'

import TrendingCampaign from './TrendingCampaign'
import RecentActivity from './RecentActivity'
import RecentCampaigns from './RecentCampaigns'
import TopInfluencers from './TopInfluencers'

function Dashboard () {
  return (
    <div>
      <Header title={'Dashboard'} description={'Welcome to Skreem Platform!'} />
      <div style={{ margin: '8px' }}>
        <Row gutter={8}>
          <Col span={10}>
            <Row gutter={8}>
              <Col span={12}><Tile name='Total Impressions' value='0' color='#23b7e5' /></Col>
              <Col span={12}>
                <Tile name='Total Engagement' value='0' bgColor='#7266ba' color='#fff' subColor='#fff' />
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={12}>
                <Tile name='Total Posts' value='0' bgColor='#23b7e5' color='#fff' subColor='#fff' />
              </Col>
              <Col span={12}><Tile name='Live Campaigns' value='0' /></Col>
            </Row>
            <Row>
              <Col span={24}>
                <Tile name='Remaining Credits' value='0' color='#7266ba' bgColor='#e4eaec' />
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <TrendingCampaign />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <Row gutter={8}>
              <Col><RecentCampaigns /></Col>
              <Col><TopInfluencers /></Col>
            </Row>
          </Col>
          <Col span={12}><RecentActivity /></Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard
