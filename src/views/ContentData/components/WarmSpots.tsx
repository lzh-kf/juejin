import React from 'react'
import ContainerView from '../../../components/ContainerView'
import styleSheet from '../../../utils/styleSheet'
import BaseStatistics from './BaseStatistics'
const WarmSpots = () => {
  const articleData = [
    {
      title: '总沸点数',
      count: 1,
    },
    {
      title: '沸点点赞数',
      count: 0,
    },
    {
      title: '沸点评论数',
      count: 0,
    },
  ]
  return (
    <ContainerView style={styles.container}>
      <BaseStatistics articleData={articleData} style={{ width: '30%' }} />
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {},
})
export default WarmSpots
