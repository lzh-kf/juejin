import React, { memo } from 'react'
import { Image, TextInput, Pressable } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
import { useNavigation } from '@react-navigation/native'
import useTheme from '../../../hooks/useTheme'
const SearchInput = () => {
  const navigation = useNavigation()
  const { isDark } = useTheme()
  const handleBack = () => {
    navigation.goBack()
  }
  return (
    <ContainerView style={[styles.container]}>
      <Pressable onPress={() => handleBack()}>
        <Image
          style={styles.icon}
          source={
            isDark
              ? require('../../../assets/search/back-dark.png')
              : require('../../../assets/search/back-light.png')
          }
        />
      </Pressable>
      <TextInput
        autoFocus={true}
        placeholderTextColor={isDark ? '#777777' : '#6d6d6d'}
        style={[
          styles.TextInput,
          {
            backgroundColor: isDark ? '#343434' : '#f3f4f6',
            color: isDark ? '#777777' : '#000',
          },
        ]}
        placeholder="搜索稀土掘金"
      />
      <ContainerText style={styles.btn}>搜索</ContainerText>
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  TextInput: {
    flex: 1,
    verticalAlign: 'middle',
    borderRadius: 5,
    paddingLeft: 15,
    fontSize: 14,
  },
  btn: {
    marginLeft: 15,
    fontSize: 14,
    color: '#1e80ff',
  },
})
export default memo(SearchInput)
