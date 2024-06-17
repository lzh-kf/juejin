import React from 'react'
import ContainerView from '../../../components/ContainerView'
import BaseList from './BaseList'
import styleSheet from '../../../utils/styleSheet'
const SpecialColumnList = () => {
  const list = [
    {
      title: 'pinia的实现',
      date: '2024-05-17',
    },
  ]
  return (
    <ContainerView style={styles.container}>
      <BaseList title={'单个分析'} list={list} />
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
  },
  item: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  name: {
    fontWeight: 600,
    fontSize: 14,
    maxWidth: 300,
  },
})
export default SpecialColumnList
