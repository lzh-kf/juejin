import React, { memo } from 'react'
import { View, Image } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
import useTheme from '../../../hooks/useTheme'
const CommodityCard = (props: any): React.JSX.Element => {
  props
  const { isDark } = useTheme()
  return (
    <ContainerView
      style={[
        styles.container,
        {
          borderColor: isDark ? '#333333' : '#ebebeb',
        },
      ]}>
      <Image
        src="https://img01.yzcdn.cn/upload_files/2023/02/07/FpzafF46Wf7d0PBllbeMuAXaPWOo.png!280x280.jpg"
        style={styles.cover}
      />
      <ContainerText numberOfLines={1} style={styles.name}>
        烛火加湿器
      </ContainerText>
      <View style={styles.item}>
        <ContainerText style={styles.source} numberOfLines={1}>
          稀土掘金
        </ContainerText>
        <ContainerText style={styles.exchangeCount} numberOfLines={1}>
          40人已兑
        </ContainerText>
      </View>
      <ContainerText style={styles.oreCount}>
        <Image
          source={require('../../../assets/Weal/ore.png')}
          style={styles.icon}
        />
        60W
      </ContainerText>
      <View
        style={[
          styles.btnContainer,
          {
            borderTopColor: isDark ? '#333333' : '#ebebeb',
          },
        ]}>
        <ContainerText style={styles.btn} numberOfLines={1}>
          立即兑换
        </ContainerText>
      </View>
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    display: 'flex',
    marginTop: 15,
    paddingTop: 10,
    borderWidth: 1,
    width: '92%',
    margin: '4%',
  },
  cover: {
    width: 120,
    height: 120,
    borderRadius: 5,
    marginLeft: 20,
  },
  name: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 600,
    maxWidth: '90%',
    marginLeft: 20,
  },
  item: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  source: {
    backgroundColor: '#fff7e8',
    color: '#ff7d00',
    maxWidth: '49%',
    padding: 2,
    borderRadius: 2,
  },
  exchangeCount: {
    maxWidth: '49%',
  },
  icon: {
    width: 20,
    height: 20,
  },
  oreCount: {
    fontSize: 18,
    fontWeight: 600,
    color: '#1e80ff',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
  btnContainer: {
    height: 50,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
  },
  btn: {
    marginRight: 10,
    height: 30,
    minWidth: 80,
    borderRadius: 20,
    display: 'flex',
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: '#1e80ff',
    color: '#fff',
  },
})
export default memo(CommodityCard)
