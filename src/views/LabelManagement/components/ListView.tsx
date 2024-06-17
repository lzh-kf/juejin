import React, { memo } from 'react'
import { FlatList, Pressable } from 'react-native'
import LabelCard from './LabelCard'
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
    navigation
  }
  return (
    <ContainerView>
      <FlatList
        initialNumToRender={10}
        data={list}
        renderItem={({ item }) => (
          <ContainerView>
            <Pressable
              onPress={() => handlePress()}
              style={{ paddingLeft: 20, paddingRight: 20 }}>
              <LabelCard {...item} />
            </Pressable>
            <SegmentationBlock height={1} />
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
      title: '全部标签',
      name: 'all',
    },
    {
      title: '关注',
      name: 'focus',
    },
  ]
  return (
    <Tab.Navigator
      initialRouteName="all"
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
