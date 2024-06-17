import React, { memo } from 'react'
import { View, Image } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
const Notice = (props: any) => {
  props
  return (
    <ContainerView style={styles.container}>
      <Image
        style={styles.cover}
        resizeMode="stretch"
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/banner.d73d31c.png"
      />
      <ContainerView style={styles.Content}>
        <View style={styles.titleInfo}>
          <Image
            style={styles.icon}
            source={require('../../../assets/Weal/trumpet.png')}
          />
          <ContainerText style={styles.title}>公告栏</ContainerText>
        </View>
        <ContainerText style={styles.text}>
          1.
          小铺专属问题反馈和建议，请拍「小铺反馈通道」商品，并在备注处描述问题，工作人员将在工作日24小时内以私信的方式联系您并处理相关问题。（若备注内容为空将无法进行处理反馈）
          2. 所有中奖/兑换商品30个自然日内未提交收件信息视为自动放弃，逾期不补；
          3.
          抽奖/兑换商品将于15个工作日内发货，商品物流信息查询：关注“顺丰速运+”小程序-“查快递”；虚拟物品我们也是十五个工作日下发到个人账号
          4.
          矿石回收请使用「回收功能」提交回收，备注回收统计不到数据，无法进行回收操作
          5.收件地址请填写详细，地址不详导致无法发货后果自负
          6.多次发货，拒收的用户，我们将建立黑名单库，后续任何物品不再发货。 💗
          公益说明：本次公益协议审批的流程较长，目前刚刚走完双方协议签署流程。后续财务会进行捐赠打款动作，壹基金收到款项后会进行捐赠。捐赠的凭证和反馈都会在站内文章发布，流程较长，但不会缺席，敬请谅解。
        </ContainerText>
      </ContainerView>
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    width: '100%',
    height: 100,
  },
  Content: {
    padding: 20,
  },
  titleInfo: {
    height: 40,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  text: {
    lineHeight: 30,
    fontSize: 14,
  },
})
export default memo(Notice)
