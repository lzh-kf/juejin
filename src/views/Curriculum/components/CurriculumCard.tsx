import React, { memo } from 'react'
import { View, Image, Pressable, Alert } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
import useTheme from '../../../hooks/useTheme'
const CurriculumCard = (props: any): React.JSX.Element => {
  const handlePress = () => {
    Alert.alert('功能开发中..')
    props
  }
  const { isDark } = useTheme()
  return (
    <Pressable onPress={() => handlePress()}>
      <ContainerView style={styles.container}>
        <Image
          style={styles.cover}
          src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f65f20108f814332b910528bbffad04d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1300&h=1820&s=263317&e=jpg&b=d8454a"
        />
        <View>
          <ContainerText numberOfLines={1} style={styles.title}>
            深入浅出SVG
          </ContainerText>
          <ContainerText style={styles.author}>大漠_w3cplusom</ContainerText>
          <ContainerText style={styles.info}>
            已更新32小节 597人已经购买
          </ContainerText>
          <ContainerText style={styles.price}>￥79.9</ContainerText>
        </View>
        <View />
      </ContainerView>
      <View
        style={{
          backgroundColor: isDark ? '#474747' : '#f6f6f6',
          height: 1,
        }}
      />
    </Pressable>
  )
}
const styles = styleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 20,
  },
  cover: {
    width: 64,
    height: 90,
    borderRadius: 5,
    marginRight: 16,
  },
  title: {
    height: 20,
    verticalAlign: 'middle',
  },
  author: {
    height: 22,
    verticalAlign: 'middle',
    fontSize: 12,
  },
  info: {
    height: 20,
    verticalAlign: 'middle',
    fontSize: 12,
  },
  price: {
    marginTop: 10,
    color: '#f64041',
  },
})
export default memo(CurriculumCard)
