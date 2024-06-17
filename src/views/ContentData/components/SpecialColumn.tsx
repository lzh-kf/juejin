import React from 'react'
import ContainerView from '../../../components/ContainerView'
import styleSheet from '../../../utils/styleSheet'
import BaseStatistics from './BaseStatistics'
const SpecialColumn = () => {
  const articleData = [
    {
      title: '总专栏数',
      count: 1,
    },
    {
      title: '专栏订阅数',
      count: 0,
    },
  ]
  return (
    <ContainerView style={styles.container}>
      <BaseStatistics articleData={articleData} style={{ width: '48%' }} />
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {},
})
export default SpecialColumn
