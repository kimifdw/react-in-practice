import React from 'react'
import { Button, Collapse, Select } from 'antd'

const Panel = Collapse.Panel
const Option = Select.Option

const statusOptions = {
  '0': 'All',
  '1': 'Live',
  '2': 'Draft',
  '3': 'Wating for approval',
  '4': 'Rejected',
  '5': 'Completed',
  '6': 'Cancelled',
  '7': 'Paused'
}

const brandOptions = {
  '0': 'All Brands',
  '1': 'VivaVideo'
}

function CampaignsFilter () {
  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header='Filter' key='1'>
        <Select defaultValue='0' style={{ width: 160 }} >
          {
            Object.keys(brandOptions).map(k => <Option key={k} value={k}>{brandOptions[k]}</Option>)
          }
        </Select>
        <Select defaultValue='0' style={{ width: 160, margin: '0 8px' }} >
          {
            Object.keys(statusOptions).map(k => <Option key={k} value={k}>{statusOptions[k]}</Option>)
          }
        </Select>
        <Button type='primary'>搜索</Button>
      </Panel>
    </Collapse>
  )
}

export default CampaignsFilter
