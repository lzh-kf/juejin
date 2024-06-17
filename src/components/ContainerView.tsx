import React, { memo } from 'react'
import { View, ViewProps } from 'react-native'
import useTheme from '../hooks/useTheme'
import { ViewStyle } from 'react-native'
interface Props extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
  itemKey?: any
  children?: React.ReactNode
}
const ContainerView = (props: Props) => {
  const { children, style = {}, itemKey } = props
  const { backgroundColor } = useTheme()
  return (
    <View {...props} key={itemKey} style={[{ backgroundColor }, style]}>
      {children}
    </View>
  )
}
export default memo(ContainerView)
