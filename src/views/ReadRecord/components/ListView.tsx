import React, { memo } from 'react'
import { FlatList, Pressable } from 'react-native'
import ArticleCard from '../../../components/ArticleCard'
import ContainerView from '../../../components/ContainerView'
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
    navigation.navigate('ArticleDetail' as never)
  }
  return (
    <ContainerView style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <ContainerView>
            <Pressable
              onPress={() => handlePress()}
              style={{ paddingLeft: 20, paddingRight: 20 }}>
              <ArticleCard {...item} />
            </Pressable>
            <SegmentationBlock />
          </ContainerView>
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
    fontSize: 20,
    height: 50,
    verticalAlign: 'middle',
  },
})
export default memo(ListView)
