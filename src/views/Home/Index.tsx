import React from 'react'
import { Image, Pressable } from 'react-native'
import PageView from '../../components/PageView'
import SearchView from '../../components/SearchView'
import ContainerView from '../../components/ContainerView'
import ListView from './components/ListView'
import styleSheet from '../../utils/styleSheet'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
  const navigation = useNavigation()
  const handleSearch = () => {
    navigation.navigate('Search' as never)
  }
  return (
    <PageView style={styles.container}>
      <ContainerView style={styles.item}>
        <Pressable style={styles.searchView} onPress={handleSearch}>
          <SearchView />
        </Pressable>
        <Image
          style={styles.icon}
          source={require('../../assets/publicImg/sign.png')}
        />
      </ContainerView>
      <ListView />
    </PageView>
  )
}
const styles = styleSheet.create({
  container: {
    paddingTop: 10,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
  },
})
export default Home
