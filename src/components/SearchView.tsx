import React, { memo } from 'react'
import { View, Image } from 'react-native'
import ContainerText from './ContainerText'
import styleSheet from '../utils/styleSheet'
import useTheme from '../hooks/useTheme'
const SearchView = (props: any) => {
  const { isDark } = useTheme()
  const { style = {} } = props
  return (
    <View
      style={[
        styles.container,
        style,
        {
          backgroundColor: isDark ? '#343434' : '#f3f4f6',
        },
      ]}>
      <Image
        style={styles.icon}
        source={
          isDark
            ? require('../assets/publicImg/search-dark.png')
            : require('../assets/publicImg/search-light.png')
        }
      />
      <ContainerText style={styles.text}>搜索稀土掘金</ContainerText>
    </View>
  )
}
const styles = styleSheet.create({
  container: {
    height: 40,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
  },
})
export default memo(SearchView)
