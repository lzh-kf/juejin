import React from 'react'
import { View, Image, Pressable, Alert } from 'react-native'
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
      title: '课程中心',
      darkIcon: require('../../../assets/my/curriculum-center-dark.png'),
      lightIcon: require('../../../assets/my/curriculum-center-light.png'),
    },
    {
      title: '推广中心',
      darkIcon: require('../../../assets/my/promotion-center-dark.png'),
      lightIcon: require('../../../assets/my/promotion-center-light.png'),
    },
    {
      title: '我的优惠券',
      darkIcon: require('../../../assets/my/discount-dark.png'),
      lightIcon: require('../../../assets/my/discount-light.png'),
    },
    {
      title: '我的圈子',
      darkIcon: require('../../../assets/my/group-dark.png'),
      lightIcon: require('../../../assets/my/group-light.png'),
    },
    {
      title: '阅读记录',
      darkIcon: require('../../../assets/my/record-dark.png'),
      lightIcon: require('../../../assets/my/record-light.png'),
      routeName: 'ReadRecord',
    },
    {
      title: '标签管理',
      darkIcon: require('../../../assets/my/label-dark.png'),
      lightIcon: require('../../../assets/my/label-light.png'),
      routeName: 'LabelManagement',
    },
    {
      title: '我的报名',
      darkIcon: require('../../../assets/my/join-dark.png'),
      lightIcon: require('../../../assets/my/join-light.png'),
    },
    {
      title: '意见反馈',
      darkIcon: require('../../../assets/my/feedback-dark.png'),
      lightIcon: require('../../../assets/my/feedback-light.png'),
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
      <ContainerText style={styles.title}>更多功能</ContainerText>
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
    display: 'flex',
    height: 'auto',
  },
  title: {
    height: 40,
    verticalAlign: 'middle',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navs: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 50,
    marginBottom: 20,
  },
  icon: {
    width: 25,
    height: 25,
  },
  text: {
    marginTop: 10,
    fontSize: 12,
  },
})
export default CreatorCenter
