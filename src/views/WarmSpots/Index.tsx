import React from 'react'
import PageView from '../../components/PageView'
import ListView from './components/ListView'
import styleSheet from '../../utils/styleSheet'

function WarmSpots(): React.JSX.Element {
  return (
    <PageView style={styles.container}>
      <ListView />
    </PageView>
  )
}
const styles = styleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
})
export default WarmSpots
