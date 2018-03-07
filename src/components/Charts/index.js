import MiniArea from './MiniArea'
import ChartCard from './ChartCard'
import Field from './Field'

import { track, setTheme } from 'bizcharts/es6'

track(false)

const config = {
  defaultColor: '#1089ff',
  shape: {
    interval: {
      fillOpacity: 1
    }
  }
}

setTheme(config)

export {
  MiniArea,
  Field,
  ChartCard
}
