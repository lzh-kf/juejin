import React, { memo } from 'react'
import SecondListView from './SecondListView'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import useTheme from '../../../hooks/useTheme'
const Tab = createMaterialTopTabNavigator()
const ListView = () => {
  const { backgroundColor, color } = useTheme()
  const tabs = [
    {
      title: '掘金小册',
      name: 'brochure',
    },
    {
      title: '字节内部课',
      name: 'byte',
    },
  ]
  return (
    <Tab.Navigator
      initialRouteName="brochure"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: backgroundColor,
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
                width: 130,
                marginLeft: 30,
              },
              tabBarItemStyle: {
                width: 120,
              },
            }}
            component={SecondListView}
          />
        )
      })}
    </Tab.Navigator>
  )
}
export default memo(ListView)
