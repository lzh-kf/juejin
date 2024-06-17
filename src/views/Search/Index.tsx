import React from 'react'
import PageView from '../../components/PageView'
import SearchInput from './components/SearchInput'
import styleSheet from '../../utils/styleSheet'
const WarmSpotsDetail = () => {
  return (
    <PageView style={styles.container}>
      <SearchInput />
    </PageView>
  )
}
const styles = styleSheet.create({
  container: {
    padding: 20,
  },
  containerView: {},
})

export default WarmSpotsDetail
