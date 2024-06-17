import React, { memo } from 'react'
import { FlatList } from 'react-native'
import CommentCard from '../../../components/CommentCard'
import ContainerView from '../../../components/ContainerView'
import SegmentationBlock from '../../../components/SegmentationBlock'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'

const CommentList = (props: any) => {
  const list = Array.from({ length: 20 }).map((i, index) => {
    return {
      id: index + '',
    }
  })
  return (
    <ContainerView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <ContainerView>
              <props.ListHeaderComponent />
              <SegmentationBlock />
              <ContainerText style={styles.title}>评论数（20）</ContainerText>
            </ContainerView>
          )
        }}
        data={list}
        renderItem={({ item }) => (
          <ContainerView style={styles.item}>
            <CommentCard {...item} />
          </ContainerView>
        )}
        ListFooterComponent={() => {
          return <ContainerView style={styles.listFooter} />
        }}
        keyExtractor={item => item.id}
      />
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {},
  listFooter: {
    marginBottom: 60,
  },
  item: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    marginTop: 10,
    height: 40,
    verticalAlign: 'middle',
    fontSize: 18,
    paddingLeft: 15,
  },
})
export default memo(CommentList)
