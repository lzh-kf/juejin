import React from 'react'
import { View, Image } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
const Content = (): React.JSX.Element => {
  return (
    <ContainerView style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3796/2975850990~200x200.awebp"
          style={styles.headPortrait}
        />
        <View style={styles.info}>
          <ContainerText style={styles.name} numberOfLines={1}>
            kf_007
          </ContainerText>
          <ContainerText numberOfLines={1}>前端在线炒粉 三星期前</ContainerText>
        </View>
        <ContainerText>...</ContainerText>
      </View>
      <View style={styles.content}>
        <ContainerText>
          根据上一条沸点中兄弟们的建议，挑了两天的主机终于挑好了，结果刚送到家才拆开看一眼就被老婆给劝退了[绝望的凝视]
          说买个这么大的机箱，把家里当网吧了...
          说给我换个mac的全家桶，我说那玩意打游戏麻烦，光显示器就1w5了，这好钢不能用在刀把上。
          所以问问兄弟们有没有其他方案推荐的，想搞个4070系的显卡的，准备打打黑神话，目前看了雷神的那个mini主机还有拯救者Y9000的今年新款...
        </ContainerText>
      </View>
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    padding: 20,
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  headPortrait: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
    display: 'flex',
    paddingRight: 80,
  },
  name: {
    fontWeight: 600,
    fontSize: 16,
    height: 28,
    verticalAlign: 'middle',
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
})
export default Content
