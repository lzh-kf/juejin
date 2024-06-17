import React from 'react'
import { View, Image, Alert, Pressable } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
import { useNavigation } from '@react-navigation/native'
const CreatorCenter = (props: any) => {
  const navigation = useNavigation()
  const handleJump = ({ routeName }: any) => {
    if (routeName) {
      navigation.navigate(routeName as never)
    } else {
      Alert.alert('功能开发中...')
    }
  }
  const tabs = [
    {
      title: '内容数据',
      darkIcon: require('../../../assets/my/data-dark.png'),
      lightIcon: require('../../../assets/my/data-light.png'),
      routeName: 'ContentData',
    },
    {
      title: '粉丝数据',
      darkIcon: require('../../../assets/my/fans-dark.png'),
      lightIcon: require('../../../assets/my/fans-light.png'),
    },
    {
      title: '创作活动',
      darkIcon: require('../../../assets/my/edit-dark.png'),
      lightIcon: require('../../../assets/my/edit-light.png'),
    },
    {
      title: '草稿箱',
      darkIcon: require('../../../assets/my/draft-dark.png'),
      lightIcon: require('../../../assets/my/draft-light.png'),
    },
  ]
  return (
    <ContainerView
      style={[
        styles.container,
        {
          backgroundColor: props.isDark ? '#181818' : '#fff',
        },
      ]}>
      <View style={styles.title}>
        <ContainerText>创作者中心</ContainerText>
        <ContainerText style={styles.backHome}>
          进去首页&nbsp;&nbsp; {'>'}
        </ContainerText>
      </View>
      <View style={styles.navs}>
        {tabs.map((item, index) => {
          return (
            <Pressable
              style={styles.item}
              onPress={() => handleJump(item)}
              key={index}>
              <Image
                style={styles.icon}
                source={props.isDark ? item.darkIcon : item.lightIcon}
              />
              <ContainerText style={styles.text}>{item.title}</ContainerText>
            </Pressable>
          )
        })}
      </View>
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    borderRadius: 5,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  navs: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    height: 40,
    verticalAlign: 'middle',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backHome: {
    fontSize: 12,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
  },
  icon: {
    width: 25,
    height: 25,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
  },
})
export default CreatorCenter
