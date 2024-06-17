import React from 'react'
import PageView from '../../components/PageView'
import ContainerView from '../../components/ContainerView'
import styleSheet from '../../utils/styleSheet'
import TopTitle from '../../components/TopTitle'
import ListView from './components/ListView'

function LabelManagement(): React.JSX.Element {
  return (
    <PageView style={styles.container}>
      <TopTitle title={'内容数据'} />
      <ContainerView style={{ flex: 1 }}>
        <ListView />
      </ContainerView>
    </PageView>
  )
}
const styles = styleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
})
export default LabelManagement
