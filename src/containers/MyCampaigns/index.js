import React from 'react'
import { Card, Button } from 'antd'
import CampaignsFilter from '../../components/CampaignsFilter'
import CampaignsPanel from '../../components/CampaignsPanel'

function MyCampaigns () {
  return (
    <Card title='MyCampaigns' extra={<Button icon='plus-circle' type='primary'>添加</Button>}>
      <CampaignsFilter />
      <CampaignsPanel />
    </Card>
  )
}

export default MyCampaigns
