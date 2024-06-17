import React from 'react'
import PageView from '../../components/PageView'
import ListView from './components/ListView'
import styleSheet from '../../utils/styleSheet'
import TopTitle from '../../components/TopTitle'

function LabelManagement(): React.JSX.Element {
  return (
    <PageView style={styles.container}>
      <TopTitle title={'标签管理'} />
      <ListView />
    </PageView>
  )
}
const styles = styleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
})
export default LabelManagement
