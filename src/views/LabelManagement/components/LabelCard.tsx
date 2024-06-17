import React, { memo } from 'react'
import { View, Image } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
import useTheme from '../../../hooks/useTheme'
const LabelCard = (props: any): React.JSX.Element => {
  props
  const { isDark } = useTheme()
  return (
    <ContainerView style={styles.container}>
      <Image
        style={styles.cover}
        src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/d83da9d012ddb7ae85f4.png~tplv-t2oaga2asx-image.image"
      />
      <View style={styles.labelInfo}>
        <ContainerText style={styles.name}>后端</ContainerText>
        <ContainerText style={styles.countInfo}>
          55.3w人关注 35.7w篇文章
        </ContainerText>
      </View>
      <View
        style={[
          styles.btn,
          { backgroundColor: isDark ? '#333333' : '#f7f8fa' },
        ]}>
        <ContainerText>已关注</ContainerText>
      </View>
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  cover: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  labelInfo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
  },
  countInfo: {},
  btn: {
    height: 30,
    width: 70,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
})
export default memo(LabelCard)
