import React, { memo } from 'react'
import { View, Image } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
import useTheme from '../../../hooks/useTheme'
const ArticleCard = (props: any): React.JSX.Element => {
  props
  const { isDark } = useTheme()
  return (
    <ContainerView style={styles.container}>
      <View style={styles.title}>
        <ContainerText style={styles.titleText} numberOfLines={2}>
          分析700万份工作需求，市场需求最奥德编程语言是这些
        </ContainerText>
      </View>
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <View style={styles.authorInfo}>
            <Image
              style={styles.headPortrait}
              src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3796/2975850990~200x200.awebp"
            />
            <View style={styles.name}>
              <ContainerText numberOfLines={1}>kf_007|一年前</ContainerText>
            </View>
          </View>
          <ContainerText numberOfLines={2}>
            在过去的8个月时间里（从2010年10月到2022年6月），DevJObScanner分析了超过700万份开发者工作需求，得出了目前行业需求量最高的8中编程语言"
          </ContainerText>
        </View>
        {true ? (
          <View>
            <Image
              style={styles.cover}
              src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3796/2975850990~200x200.awebp"
            />
          </View>
        ) : (
          <View />
        )}
      </View>
      <View style={styles.bottomContent}>
        <View style={styles.bottomItem}>
          <View style={styles.item}>
            <Image
              style={styles.icon}
              source={
                isDark
                  ? require('../../../assets/publicImg/like-dark.png')
                  : require('../../../assets/publicImg/like-light.png')
              }
            />
            <ContainerText numberOfLines={1} style={styles.itemText}>
              520
            </ContainerText>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.icon}
              source={
                isDark
                  ? require('../../../assets/publicImg/commet-dark.png')
                  : require('../../../assets/publicImg/commet-light.png')
              }
            />
            <ContainerText numberOfLines={1}>41</ContainerText>
          </View>
        </View>
      </View>
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {},
  title: {
    marginTop: 10,
    display: 'flex',
    fontWeight: '600',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authorInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
    marginTop: 10,
    marginBottom: 10,
  },
  name: {
    flex: 1,
  },
  leftContent: {
    display: 'flex',
    flex: 1,
    paddingRight: 15,
  },
  headPortrait: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  cover: {
    width: 110,
    height: 80,
    borderRadius: 3,
  },
  bottomContent: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
    flexDirection: 'row',
  },
  itemText: {
    maxWidth: 70,
  },
})
export default memo(ArticleCard)
