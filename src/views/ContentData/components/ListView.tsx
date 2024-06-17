import React, { memo } from 'react'
import { ScrollView } from 'react-native'
import ArticleDataStatistics from './ArticleDataStatistics'
import ArticleList from './ArticleList'
import SpecialColumn from './SpecialColumn'
import SpecialColumnList from './SpecialColumnList'
import WarmSpots from './WarmSpots'
import WarmSpotsList from './WarmSpotsList'
import Report from './Report'
import ContainerView from '../../../components/ContainerView'
import SegmentationBlock from '../../../components/SegmentationBlock'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import useTheme from '../../../hooks/useTheme'
const Tab = createMaterialTopTabNavigator()
function ListView(): React.JSX.Element {
  const { backgroundColor, color } = useTheme()
  const tabs = [
    {
      title: '文章数据',
      name: 'Article',
      componnet: memo(() => {
        return (
          <ScrollView>
            <ContainerView>
              <ArticleDataStatistics />
              <SegmentationBlock height={5} />
              <Report />
              <ArticleList />
            </ContainerView>
          </ScrollView>
        )
      }),
    },
    {
      title: '专栏数据',
      name: 'SpecialColumn',
      componnet: memo(() => {
        return (
          <ScrollView>
            <ContainerView>
              <SpecialColumn />
              <SegmentationBlock height={5} />
              <Report />
              <SpecialColumnList />
            </ContainerView>
          </ScrollView>
        )
      }),
    },
    {
      title: '沸点数据',
      name: 'WarmSpots',
      componnet: memo(() => {
        return (
          <ScrollView>
            <ContainerView>
              <WarmSpots />
              <SegmentationBlock height={5} />
              <Report />
              <WarmSpotsList />
            </ContainerView>
          </ScrollView>
        )
      }),
    },
  ]
  return (
    <Tab.Navigator
      initialRouteName="Article"
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
            }}
            component={item.componnet}
          />
        )
      })}
    </Tab.Navigator>
  )
}
export default memo(ListView)
