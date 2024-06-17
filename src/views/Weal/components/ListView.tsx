import React, { memo } from 'react'
import { Pressable } from 'react-native'
import CommodityCard from './CommodityCard'
import ContainerView from '../../../components/ContainerView'
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
    navigation
  }
  return (
    <ContainerView
      style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {list.map(item => {
        return (
          <Pressable
            key={item.id}
            onPress={() => handlePress()}
            style={{ width: '50%' }}>
            <CommodityCard {...item} />
          </Pressable>
        )
      })}
    </ContainerView>
  )
})

function ListView(): React.JSX.Element {
  const { backgroundColor, color } = useTheme()
  const tabs = [
    {
      title: '惊喜好物',
      name: 'Commodity',
    },
    {
      title: '社区道具',
      name: 'CommunityItem',
    },
  ]
  return (
    <Tab.Navigator
      initialRouteName="Commodity"
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
