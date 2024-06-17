import React, { memo } from 'react'
import { View, Image } from 'react-native'
import ContainerView from './ContainerView'
import ContainerText from './ContainerText'
import styleSheet from '../utils/styleSheet'
import useTheme from '../hooks/useTheme'
const ArticleCard = (props: any): React.JSX.Element => {
  props
  const { isDark } = useTheme()
  return (
    <ContainerView style={styles.container}>
      <View style={styles.title}>
        <ContainerText style={styles.titleText} numberOfLines={1}>
          从零开始搭建前端项目（webpack+ts+vue）
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
              <ContainerText style={{}} numberOfLines={1}>
                kf_007
              </ContainerText>
            </View>
          </View>
          <ContainerText numberOfLines={2}>
            不知道什么时候，搭建一个前端项目，慢慢成为了我的执念，总感觉不搭建一个，总是缺点什么（虽然日常根本用不到，因为公司都是用那些集成脚手架，从vue-cli再到vite），正是抱着这种心态，我写了这篇文章（从零开始搭建(基于webpack5+)，最后部署在github）。
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
                  ? require('../assets/publicImg/like-dark.png')
                  : require('../assets/publicImg/like-light.png')
              }
            />
            <ContainerText numberOfLines={1} style={styles.itemText}>
              50
            </ContainerText>
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
            <ContainerText numberOfLines={1}>201</ContainerText>
          </View>
        </View>
        <View style={styles.bottomItem}>
          <View
            style={[
              styles.label,
              {
                backgroundColor: isDark ? '#343434' : '#f3f4f6',
              },
            ]}>
            <ContainerText>前端</ContainerText>
          </View>
          <View style={styles.item}>
            <ContainerText>...</ContainerText>
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
    maxWidth: 240,
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
  label: {
    width: 40,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
})
export default memo(ArticleCard)
