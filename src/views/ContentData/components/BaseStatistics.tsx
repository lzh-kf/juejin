import React, { memo } from 'react'
import { View } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
import useTheme from '../../../hooks/useTheme'
const BaseStatistics = (props: any) => {
  const { isDark } = useTheme()
  return (
    <ContainerView style={styles.container}>
      {props.articleData.map((item: any, index: number) => {
        return (
          <View
            key={index}
            style={[
              styles.item,
              props.style,
              { borderColor: isDark ? '#333333' : '#ebebeb' },
            ]}>
            <ContainerText style={styles.title}>{item.title}</ContainerText>
            <ContainerText style={styles.count}>{item.count}</ContainerText>
          </View>
        )
      })}
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexWrap: 'wrap',
  },
  item: {
    height: 80,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  title: {
    fontSize: 15,
  },
  count: {
    fontWeight: 600,
    marginTop: 10,
    fontSize: 14,
  },
})
export default memo(BaseStatistics)
