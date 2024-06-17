import React, { memo } from 'react'
import { FlatList, Pressable } from 'react-native'
import HotCard from './HotCard'
import ContainerView from '../../../components/ContainerView'
import SegmentationBlock from '../../../components/SegmentationBlock'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import useTheme from '../../../hooks/useTheme'
import { useNavigation } from '@react-navigation/native'
const Tab = createMaterialTopTabNavigator()

const Content = memo(() => {
  const navigation = useNavigation()
  const list = Array.from({ length: 20 }).map((i, index) => {
    return {
      id: index + '',
    }
  })

  const handlePress = () => {
    navigation.navigate('WarmSpotsDetail' as never)
  }
  return (
    <ContainerView>
      <FlatList
        initialNumToRender={5}
        data={list}
        renderItem={({ item }) => (
          <ContainerView>
            <Pressable
              onPress={() => handlePress()}
              style={{ paddingLeft: 20, paddingRight: 20 }}>
              <HotCard {...item} />
            </Pressable>
            <SegmentationBlock />
          </ContainerView>
        )}
        keyExtractor={item => item.id}
      />
    </ContainerView>
  )
})

function ListView(): React.JSX.Element {
  const { backgroundColor, color } = useTheme()
  const tabs = [
    {
      title: '发现',
      name: 'web',
    },
    {
      title: '关注',
      name: 'server',
    },
  ]
  return (
    <Tab.Navigator
      initialRouteName="web"
      screenOptions={{
        tabBarStyle: {
          backgroundColor,
        },
        tabBarActiveTintColor: color,
        lazy: true,
        lazyPreloadDistance: 1,
      }}>
      {tabs.map(item => {
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            options={{
              tabBarLabel: item.title,
              tabBarActiveTintColor: '#1e80ff',
              tabBarInactiveTintColor: color,
              tabBarLabelStyle: {
                fontSize: 16,
              },
              tabBarIndicatorContainerStyle: {
                width: 150,
                marginLeft: '15%',
              },
            }}
            component={Content}
          />
        )
      })}
    </Tab.Navigator>
  )
}
export default memo(ListView)
