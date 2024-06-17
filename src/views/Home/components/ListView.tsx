import React, { memo, useState, useMemo } from 'react'
import { FlatList, Pressable } from 'react-native'
import ArticleCard from '../../../components/ArticleCard'
import ContainerView from '../../../components/ContainerView'
import SegmentationBlock from '../../../components/SegmentationBlock'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useNavigation } from '@react-navigation/native'
import useTheme from '../../../hooks/useTheme'
const Tab = createMaterialTopTabNavigator()

const Item = memo((props: any) => {
  const navigation = useNavigation()
  const _list = useMemo(() => props.list, [props.list])
  const handlePress = () => {
    navigation.navigate('ArticleDetail' as never)
  }
  return (
    <ContainerView>
      <FlatList
        initialNumToRender={5}
        data={_list}
        renderItem={({ item }) => (
          <ContainerView>
            <Pressable
              onPress={() => handlePress()}
              style={{ paddingLeft: 20, paddingRight: 20 }}>
              <ArticleCard {...item} />
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
  const [list] = useState(
    Array.from({ length: 20 }).map((i, index) => {
      return {
        id: index + '',
      }
    }),
  )
  return (
    <Tab.Navigator
      initialRouteName="web"
      initialLayout={{
        width: undefined,
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor,
        },
        tabBarActiveTintColor: color,
        tabBarScrollEnabled: true,
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
              tabBarIndicatorContainerStyle: {},
              tabBarItemStyle: {
                width: 100,
              },
            }}>
            {() => {
              return <Item list={list} />
            }}
          </Tab.Screen>
        )
      })}
    </Tab.Navigator>
  )
}
export default memo(ListView)
