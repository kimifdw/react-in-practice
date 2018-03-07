import React from 'react'
import { Card, Tooltip, Icon } from 'antd'
import { MiniArea, ChartCard, Field } from '../../../components/Charts'

import visitData from './visitData'

function TrendingCampaign () {
  return (
    <Card title='Trending Campaign'>
      <ChartCard
        bordered={false}
        title='访问量'
        action={
          <Tooltip title='指标说明'>
            <Icon type='info-circle-o' />
          </Tooltip>
        }
        total={'8,886'}
        footer={<Field label='日访问量' value={'1,234'} />}
        contentHeight={46}
      >
        <MiniArea color='#975FE4' data={visitData} />
      </ChartCard>
    </Card>
  )
}

export default TrendingCampaign
