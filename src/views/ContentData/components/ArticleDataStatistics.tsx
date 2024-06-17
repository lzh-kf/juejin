import React from 'react'
import ContainerView from '../../../components/ContainerView'
import styleSheet from '../../../utils/styleSheet'
import BaseStatistics from './BaseStatistics'
const ArticleDataStatistics = () => {
  const articleData = [
    {
      title: '总文章数',
      count: 9,
    },
    {
      title: '展现数',
      count: 40254,
    },
    {
      title: '阅读数',
      count: 2165,
    },
    {
      title: '收藏数',
      count: 23,
    },
    {
      title: '点赞数',
      count: 21,
    },
    {
      title: '评论数',
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
export default ArticleDataStatistics
