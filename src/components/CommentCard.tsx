import React, { memo } from 'react'
import { Image, View } from 'react-native'
import ContainerView from './ContainerView'
import ContainerText from './ContainerText'
import styleSheet from '../utils/styleSheet'
import useTheme from '../hooks/useTheme'
const CommentCard = (props: any) => {
  props
  const { isDark } = useTheme()
  return (
    <ContainerView style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3796/2975850990~60x60.awebp"
          style={styles.headPortrait}
        />
        <View style={{ flex: 1 }}>
          <ContainerText style={styles.name} numberOfLines={1}>
            kf_007
          </ContainerText>
          <ContainerText style={styles.content} numberOfLines={5}>
            一学习就头晕，犯困，怎么办啊！！！很想吃家里的胡辣汤、水煎包。这边的肠粉是真的吃不惯
          </ContainerText>
        </View>
      </View>
      <View style={styles.countInfo}>
        <ContainerText style={styles.date} numberOfLines={1}>
          4月前
        </ContainerText>
        <View style={styles.operation}>
          <View style={styles.item}>
            <ContainerText>...</ContainerText>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.icon}
              source={
                isDark
                  ? require('../assets/publicImg/commet-dark.png')
                  : require('../assets/publicImg/commet-light.png')
              }
            />
            <ContainerText>17</ContainerText>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.icon}
              source={
                isDark
                  ? require('../assets/publicImg/like-dark.png')
                  : require('../assets/publicImg/like-light.png')
              }
            />
            <ContainerText>20</ContainerText>
          </View>
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
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  headPortrait: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    height: 26,
    verticalAlign: 'middle',
    maxWidth: 200,
  },
  content: {
    marginTop: 4,
    maxWidth: 300,
  },
  countInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  date: {
    marginLeft: 65,
  },
  operation: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  icon: {
    marginRight: 5,
    width: 20,
    height: 20,
  },
})
export default memo(CommentCard)
