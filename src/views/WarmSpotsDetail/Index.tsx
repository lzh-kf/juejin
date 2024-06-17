import React from 'react'
import PageView from '../../components/PageView'
import ContainerView from '../../components/ContainerView'
import TopTitle from '../../components/TopTitle'
import Content from './components/Content'
import CommentList from './components/CommentList'
import styleSheet from '../../utils/styleSheet'
const WarmSpotsDetail = () => {
  return (
    <PageView style={styles.container}>
      <TopTitle title={'沸点详情'} />
      <CommentList
        ListHeaderComponent={() => {
          return (
            <ContainerView style={styles.containerView}>
              <Content />
            </ContainerView>
          )
        }}
      />
    </PageView>
  )
}
const styles = styleSheet.create({
  container: {},
  containerView: {},
})

export default WarmSpotsDetail
