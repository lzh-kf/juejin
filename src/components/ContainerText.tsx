import React from 'react'
import { Text, TextProps } from 'react-native'
import useTheme from '../hooks/useTheme'
import { TextStyle } from 'react-native'
interface Props extends TextProps {
  style?: TextStyle | Array<TextStyle>
  key?: any
  children?: React.ReactNode
}
const ContainerText = (props: Props): React.JSX.Element => {
  const { color } = useTheme()
  const { children, style = {}, key } = props
  return (
    <Text ellipsizeMode="tail" {...props} key={key} style={[{ color }, style]}>
      {children}
    </Text>
  )
}
export default ContainerText
