import React from 'react'
import PageView from '../../components/PageView'
import TopTitle from '../../components/TopTitle'
import ListView from './components/ListView'
import styleSheet from '../../utils/styleSheet'
const ReadRecord = () => {
  return (
    <PageView style={styles.container}>
      <TopTitle title={'阅读记录'} />
      <ListView />
    </PageView>
  )
}
const styles = styleSheet.create({
  container: {},
  searchView: {
    marginRight: 10,
    paddingBottom: 15,
  },
})
export default ReadRecord
