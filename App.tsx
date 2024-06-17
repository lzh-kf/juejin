import React, { useEffect } from 'react'
import useTheme from './src/hooks/useTheme'
import PageView from './src/components/PageView'
import Authentication from './src/components/Authentication'
import Index from './src/views/Index/Index'
import ArticleDetail from './src/views/ArticleDetail/Index'
import WarmSpotsDetail from './src/views/WarmSpotsDetail/Index'
import WebView from './src/views/WebView/Index'
import Login from './src/views/Login/Index'
import Search from './src/views/Search/Index'
import ReadRecord from './src/views/ReadRecord/Index'
import LabelManagement from './src/views/LabelManagement/Index'
import Weal from './src/views/Weal/Index'
import ContentData from './src/views/ContentData/Index'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from 'react-native-splash-screen'
import userInfoManger from './src/utils/userInfo'
const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  userInfoManger.removeUserInfo()
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  const { backgroundColor } = useTheme()
  return (
    <PageView>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{
            navigationBarColor: backgroundColor,
            headerShown: false,
          }}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
          <Stack.Screen name="WebView" component={WebView} />
          <Stack.Screen name="WarmSpotsDetail" component={WarmSpotsDetail} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ReadRecord">
            {() => {
              return (
                <Authentication>
                  <ReadRecord />
                </Authentication>
              )
            }}
          </Stack.Screen>
          <Stack.Screen name="LabelManagement">
            {() => {
              return (
                <Authentication>
                  <LabelManagement />
                </Authentication>
              )
            }}
          </Stack.Screen>
          <Stack.Screen name="Weal">
            {() => {
              return (
                <Authentication>
                  <Weal />
                </Authentication>
              )
            }}
          </Stack.Screen>
          <Stack.Screen name="ContentData">
            {() => {
              return (
                <Authentication>
                  <ContentData />
                </Authentication>
              )
            }}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PageView>
  )
}
export default App
