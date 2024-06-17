import React, { useState, memo } from 'react'
import { FlatList, Text } from 'react-native'
import CurriculumCard from './CurriculumCard'
import ContainerView from '../../../components/ContainerView'
import useTheme from '../../../hooks/useTheme'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const Tab = createMaterialTopTabNavigator()
const Sort = memo(() => {
  const { color } = useTheme()
  const [active, setActive] = useState(0)
  const queryTypes = ['全部', '最新', '热销', '价格']
  return (
    <ContainerView
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
      }}>
      {queryTypes.map((item, index) => {
        return (
          <Text
            key={index}
            style={[
              {
                fontSize: 14,
                marginLeft: 20,
                marginRight: 20,
                color: active === index ? '#1e80ff' : color,
              },
            ]}
            onPress={() => setActive(index)}>
            {item}
          </Text>
        )
      })}
    </ContainerView>
  )
})
const Content = memo(() => {
  const list = Array.from({ length: 20 }).map((i, index) => {
    return {
      id: index + '',
    }
  })
  return (
    <ContainerView>
      <Sort />
      <FlatList
        initialNumToRender={5}
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          marginBottom: 60,
        }}
        data={list}
        renderItem={({ item }) => (
          <ContainerView>
            <CurriculumCard {...item} />
          </ContainerView>
        )}
        keyExtractor={item => item.id}
      />
    </ContainerView>
  )
})

function ListView(): React.JSX.Element {
  const { color, backgroundColor } = useTheme()
  const tabs = [
    {
      title: '前端',
      name: 'web',
    },
    {
      title: '后端',
      name: 'server',
    },
    {
      title: '排行榜',
      name: 'rank',
    },
    {
      title: '安卓',
      name: 'android',
    },
    {
      title: '苹果',
      name: 'ios',
    },
    {
      title: '工具',
      name: 'tool',
    },
    {
      title: '代码人生',
      name: 'codeLife',
    },
    {
      title: '阅读',
      name: 'read',
    },
  ]
  return (
    <Tab.Navigator
      initialRouteName="web"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: backgroundColor,
        },
        tabBarScrollEnabled: true,
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
                width: 0,
              },
              tabBarItemStyle: {
                width: 100,
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
