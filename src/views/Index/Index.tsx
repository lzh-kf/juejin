import React from 'react'
import { Image } from 'react-native'
import styleSheet from '../../utils/styleSheet'
import Home from '../Home/Index'
import WarmSpots from '../WarmSpots/Index'
import Discover from '../Discover/Index'
import Curriculum from '../Curriculum/Index'
import My from '../My/Index'
import useTheme from '../../hooks/useTheme'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
const Tab = createMaterialBottomTabNavigator()
const Index = () => {
  const { backgroundColor, isDark } = useTheme()
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#1e80ff"
      inactiveColor="#bfbfbf"
      activeIndicatorStyle={{
        backgroundColor,
      }}
      barStyle={{ backgroundColor }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={styles.img}
                source={require('../../assets/icons/home-selected.png')}
              />
            ) : (
              <Image
                style={styles.img}
                source={
                  isDark
                    ? require('../../assets/icons/home-dark.png')
                    : require('../../assets/icons/home-light.png')
                }
              />
            ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="WarmSpots"
        options={{
          tabBarLabel: '沸点',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={styles.img}
                source={require('../../assets/icons/warm-spots-selected.png')}
              />
            ) : (
              <Image
                style={styles.img}
                source={
                  isDark
                    ? require('../../assets/icons/warm-spots-dark.png')
                    : require('../../assets/icons/warm-spots-light.png')
                }
              />
            ),
        }}
        component={WarmSpots}
      />
      <Tab.Screen
        name="Discover"
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={styles.img}
                source={require('../../assets/icons/discover-selected.png')}
              />
            ) : (
              <Image
                style={styles.img}
                source={
                  isDark
                    ? require('../../assets/icons/discover-dark.png')
                    : require('../../assets/icons/discover-light.png')
                }
              />
            ),
        }}
        component={Discover}
      />
      <Tab.Screen
        name="Curriculum"
        options={{
          tabBarLabel: '课程',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={styles.img}
                source={require('../../assets/icons/curriculum-selected.png')}
              />
            ) : (
              <Image
                style={styles.img}
                source={
                  isDark
                    ? require('../../assets/icons/curriculum-dark.png')
                    : require('../../assets/icons/curriculum-light.png')
                }
              />
            ),
        }}
        component={Curriculum}
      />
      <Tab.Screen
        name="My"
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={styles.img}
                source={require('../../assets/icons/my-selected.png')}
              />
            ) : (
              <Image
                style={styles.img}
                source={
                  isDark
                    ? require('../../assets/icons/my-dark.png')
                    : require('../../assets/icons/my-light.png')
                }
              />
            ),
        }}
        component={My}
      />
    </Tab.Navigator>
  )
}
const styles = styleSheet.create({
  index: {
    paddingBottom: 80,
  },
  img: {
    width: 25,
    height: 25,
    marginBottom: 3,
  },
})
export default Index
