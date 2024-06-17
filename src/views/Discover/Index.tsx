import React from 'react'
import { Pressable } from 'react-native'
import PageView from '../../components/PageView'
import SearchView from '../../components/SearchView'
import ContainerView from '../../components/ContainerView'
import ListView from './components/ListView'
import styleSheet from '../../utils/styleSheet'
import { useNavigation } from '@react-navigation/native'
const Discover = () => {
  const navigation = useNavigation()
  const handleSearch = () => {
    navigation.navigate('Search' as never)
  }
  return (
    <PageView style={styles.container}>
      <ContainerView style={styles.searchView}>
        <Pressable onPress={handleSearch}>
          <SearchView />
        </Pressable>
      </ContainerView>
      <ListView />
    </PageView>
  )
}
const styles = styleSheet.create({
  container: {
    paddingTop: 10,
  },
  searchView: {
    marginRight: 20,
    marginLeft: 20,
    paddingBottom: 15,
  },
})
export default Discover
