import { StyleSheet, ImageStyle, TextStyle, ViewStyle } from 'react-native'
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }
import dp2px from './dp2px'
const styleSheet = {
  create<T extends NamedStyles<T> | NamedStyles<any>>(style: T) {
    let s = { ...style }
    let list = [
      'width',
      'height',
      'marginTop',
      'marginBottom',
      'marginLeft',
      'marginRight',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'top',
      'right',
      'bottom',
      'left',
      'fontSize',
      'lineHeight',
    ]
    for (let outKey in s) {
      for (let innerKey in s[outKey]) {
        if (
          list.includes(innerKey) &&
          typeof s[outKey][innerKey] === 'number'
        ) {
          s[outKey][innerKey] = dp2px(s[outKey][innerKey]) as T[Extract<
            keyof T,
            string
          >][Extract<keyof T[Extract<keyof T, string>], string>] &
            number
        }
      }
    }
    return StyleSheet.create(s)
  },
}
export default styleSheet
