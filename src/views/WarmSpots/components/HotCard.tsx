import React, { useState, memo } from 'react'
import { View, Image, Text } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
import useTheme from '../../../hooks/useTheme'
const ArticleCard = (props: any): React.JSX.Element => {
  props
  const [row, setRow] = useState(3)
  const { isDark } = useTheme()
  return (
    <ContainerView style={styles.container}>
      {/* 1 */}
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
      {/* 2 */}
      <View style={styles.content}>
        <ContainerText numberOfLines={row}>
          根据上一条沸点中兄弟们的建议，挑了两天的主机终于挑好了，结果刚送到家才拆开看一眼就被老婆给劝退了[绝望的凝视]
          说买个这么大的机箱，把家里当网吧了...
          说给我换个mac的全家桶，我说那玩意打游戏麻烦，光显示器就1w5了，这好钢不能用在刀把上。
          所以问问兄弟们有没有其他方案推荐的，想搞个4070系的显卡的，准备打打黑神话，目前看了雷神的那个mini主机还有拯救者Y9000的今年新款...
        </ContainerText>
        <View>
          {row === 3 ? (
            <Text style={styles.open} onPress={() => setRow(0)}>
              展开
            </Text>
          ) : (
            <Text style={styles.close} onPress={() => setRow(3)}>
              收起
            </Text>
          )}
        </View>
      </View>
      {/* 3 */}
      {/* <View style={styles.coverContent}>
        <Image
          style={styles.cover}
          src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/593c1df83f48400ba5723e2a355aaf25~tplv-k3u1fbpfcp-jj-mark:253:253:253:253:q75.avis"
        />
      </View> */}
      {/* 4 */}
      <View style={styles.bottomContent}>
        <View style={styles.view}>
          <Image
            style={styles.icon}
            source={
              isDark
                ? require('../../../assets/publicImg/share-dark.png')
                : require('../../../assets/publicImg/share-light.png')
            }
          />
          <ContainerText>分享</ContainerText>
        </View>
        <View style={styles.view}>
          <Image
            style={styles.icon}
            source={
              isDark
                ? require('../../../assets/publicImg/commet-dark.png')
                : require('../../../assets/publicImg/commet-light.png')
            }
          />
          <ContainerText numberOfLines={1}>2015</ContainerText>
        </View>
        <View style={styles.view}>
          <Image
            style={styles.icon}
            source={
              isDark
                ? require('../../../assets/publicImg/like-dark.png')
                : require('../../../assets/publicImg/like-light.png')
            }
          />
          <ContainerText numberOfLines={1}>300</ContainerText>
        </View>
      </View>
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {},
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  headPortrait: {
    width: 48,
    height: 48,
    borderRadius: 24,
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
  label: {
    height: 20,
    verticalAlign: 'middle',
  },
  content: {
    marginTop: 8,
    paddingLeft: 25,
    paddingRight: 25,
  },
  contentText: {
    fontSize: 14,
  },
  open: {
    marginTop: 5,
    color: '#1e80ff',
  },
  close: {
    marginTop: 5,
    color: '#1e80ff',
  },
  coverContent: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'blue',
    marginTop: 5,
    marginBottom: 5,
  },
  cover: {
    width: 100,
    height: 100,
    borderRadius: 3,
  },
  bottomContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 36,
    marginTop: 10,
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: 100,
  },
  icon: {
    marginRight: 5,
    width: 20,
    height: 20,
  },
})
export default memo(ArticleCard)
