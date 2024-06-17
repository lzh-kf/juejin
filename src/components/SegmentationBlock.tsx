import React from 'react'
import { View } from 'react-native'
import useTheme from '../hooks/useTheme'
const SegmentationBlock = (props: any): React.JSX.Element => {
  const { isDark } = useTheme()
  const { height = 10 } = props
  return (
    <View
      style={{
        backgroundColor: isDark ? '#000' : '#e6e6e6',
        height,
      }}
    />
  )
}
export default SegmentationBlock
