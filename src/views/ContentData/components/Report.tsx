import * as React from 'react'
import { useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import { SVGRenderer, SvgChart } from '@wuba/react-native-echarts'
import * as echarts from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components'
import ContainerView from '../../../components/ContainerView'
import useTheme from '../../../hooks/useTheme'
import styleSheet from '../../../utils/styleSheet'

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  SVGRenderer,
  LegendComponent,
  BarChart,
  LineChart,
])

const E_HEIGHT = 400
const E_WIDTH = Dimensions.get('screen').width
function SvgComponent({ option }: any) {
  const { backgroundColor } = useTheme()
  const svgRef = useRef<any>(null)

  useEffect(() => {
    let chart: any
    if (svgRef.current) {
      chart = echarts.init(svgRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT,
      })
      chart.setOption(option)
    }
    return () => chart?.dispose()
  }, [option])

  return <SvgChart ref={svgRef} style={{ backgroundColor }} />
}

const option = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['展现', '阅读', '点赞', '评论', '收藏'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '展现',
      type: 'line',
      data: [2000, 1320, 1500, 1340, 1900, 2300, 2200],
    },
    {
      name: '阅读',
      type: 'line',
      data: [100, 120, 140, 225, 239, 300, 342],
    },
    {
      name: '点赞',
      type: 'line',
      data: [10, 22, 21, 14, 19, 33, 41],
    },
    {
      name: '评论',
      type: 'line',
      data: [3, 3, 3, 3, 3, 3, 3],
    },
    {
      name: '收藏',
      type: 'line',
      data: [8, 9, 1, 9, 12, 13, 13],
    },
  ],
}
function App() {
  return (
    <ContainerView style={styles.container}>
      <SvgComponent option={option} />
    </ContainerView>
  )
}

const styles = styleSheet.create({
  container: {
    paddingTop: 20,
  },
})
export default App
