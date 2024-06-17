import React, { memo } from 'react'
import { SectionList, Pressable } from 'react-native'
import TradeCard from './TradeCard'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import SegmentationBlock from '../../../components/SegmentationBlock'
import styleSheet from '../../../utils/styleSheet'
import { useNavigation } from '@react-navigation/native'

function ListView(): React.JSX.Element {
  const navigation = useNavigation()
  const list = Array.from({ length: 20 }).map((i, index) => {
    return {
      id: index + '',
    }
  })
  const handlePress = () => {
    navigation.navigate('WebView' as never)
  }
  const data = [
    {
      title: '行业速递',
      data: list,
    },
  ]
  return (
    <ContainerView style={styles.container}>
      <SectionList
        sections={data}
        initialNumToRender={5}
        renderItem={({ item }) => (
          <ContainerView>
            <Pressable
              onPress={() => handlePress()}
              style={{ paddingLeft: 20, paddingRight: 20 }}>
              <TradeCard {...item} />
            </Pressable>
            <SegmentationBlock />
          </ContainerView>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ContainerText style={styles.title}>{title}</ContainerText>
        )}
      />
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    marginBottom: 50,
  },
  title: {
    paddingLeft: 20,
    fontSize: 20,
    height: 40,
    verticalAlign: 'middle',
  },
})
export default memo(ListView)
