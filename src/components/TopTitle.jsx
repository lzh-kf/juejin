import React from 'react'
import ContainerView from './ContainerView'
import ContainerText from './ContainerText'
import { View, Image, Pressable } from 'react-native'
import styleSheet from '../utils/styleSheet'
import useTheme from '../hooks/useTheme'
import { useNavigation } from '@react-navigation/native'
const TopTitle = props => {
  const navigation = useNavigation()
  const { isDark } = useTheme()
  const handleGoback = () => {
    navigation.goBack()
  }
  const handleGoHome = () => {
    navigation.replace('Index')
  }
  return (
    <ContainerView style={styles.container}>
      <Pressable onPress={() => handleGoHome()}>
        <Image
          style={styles.img}
          source={
            isDark
              ? require('../assets/icons/home-dark.png')
              : require('../assets/icons/home-light.png')
          }
        />
      </Pressable>
      <Pressable onPress={() => handleGoback()}>
        <Image
          style={styles.img}
          source={
            isDark
              ? require('../assets/publicImg/back-dark.png')
              : require('../assets/publicImg/back-light.png')
          }
        />
      </Pressable>
      <View style={styles.title}>
        <ContainerText
          style={styles.text}
          numberOfLines={1}
          ellipsizeMode="tail">
          {props.title}
        </ContainerText>
      </View>
    </ContainerView>
  )
}

const styles = styleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  title: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 70,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    maxWidth: 190,
    textAlign: 'center',
  },
})

export default TopTitle
