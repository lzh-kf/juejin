import React from 'react'
import { View, Image, Alert } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
const UserInfo = () => {
  const handleToPersonHome = () => {
    Alert.alert('功能开发中...')
  }
  return (
    <ContainerView style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          style={styles.headPortrait}
          src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3796/2975850990~200x200.awebp"
        />
        <View style={styles.nameView}>
          <ContainerText style={styles.name} numberOfLines={1}>
            kf_007
          </ContainerText>
        </View>
        <ContainerText
          style={styles.personCenter}
          onPress={() => handleToPersonHome()}>
          个人主页&nbsp;&nbsp; {'>'}
        </ContainerText>
      </View>
      <View style={styles.countInfo}>
        <View style={styles.item}>
          <ContainerText style={styles.count}>21</ContainerText>
          <ContainerText>点赞</ContainerText>
        </View>
        <View style={styles.item}>
          <ContainerText style={styles.count}>23</ContainerText>
          <ContainerText>收藏</ContainerText>
        </View>
        <View style={styles.item}>
          <ContainerText style={styles.count}>17</ContainerText>
          <ContainerText>关注</ContainerText>
        </View>
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
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  headPortrait: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameView: {
    flex: 1,
    display: 'flex',
    paddingLeft: 15,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    maxWidth: 150,
  },
  personCenter: {
    fontSize: 12,
  },
  countInfo: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  count: {
    fontWeight: '600',
    marginBottom: 5,
  },
})
export default UserInfo
