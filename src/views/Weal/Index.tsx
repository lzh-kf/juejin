import React from 'react'
import { ScrollView } from 'react-native'
import PageView from '../../components/PageView'
import ListView from './components/ListView'
import styleSheet from '../../utils/styleSheet'
import TopTitle from '../../components/TopTitle'
import Notice from './components/Notice'
import SegmentationBlock from '../../components/SegmentationBlock'

function Weal(): React.JSX.Element {
  return (
    <PageView style={styles.container}>
      <TopTitle title={'福利兑换'} />
      <ScrollView>
        <Notice />
        <SegmentationBlock />
        <ListView />
      </ScrollView>
    </PageView>
  )
}
const styles = styleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
})
export default Weal
