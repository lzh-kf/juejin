import React from 'react'
import { ScrollView } from 'react-native'
import PageView from '../../components/PageView'
import ContainerView from '../../components/ContainerView'
import ContainerText from '../../components/ContainerText'
import ListView from './components/ListView'
import styleSheet from '../../utils/styleSheet'

function WarmSpots(): React.JSX.Element {
  return (
    <PageView style={styles.container}>
      <ScrollView stickyHeaderIndices={[4]}>
        <ContainerView style={{ height: 40 }}>
          <ContainerText>测试</ContainerText>
        </ContainerView>
        <ContainerView style={{ height: 40 }}>
          <ContainerText>测试</ContainerText>
        </ContainerView>
        <ContainerView style={{ height: 40 }}>
          <ContainerText>测试</ContainerText>
        </ContainerView>
        <ListView />
      </ScrollView>
    </PageView>
  )
}
const styles = styleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
})
export default WarmSpots
