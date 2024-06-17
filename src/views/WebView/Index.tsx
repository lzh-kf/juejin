import React from 'react'
import { WebView } from 'react-native-webview'
import PageView from '../../components/PageView'
import ContainerView from '../../components/ContainerView'
import TopTitle from '../../components/TopTitle'
import styleSheet from '../../utils/styleSheet'
const WebContainer = () => {
  return (
    <PageView style={styles.container}>
      <ContainerView style={{ flex: 1 }}>
        <TopTitle title={'webview'} />
        <WebView source={{ uri: 'https://juejin.cn/' }} style={{ flex: 1 }} />
      </ContainerView>
    </PageView>
  )
}
const styles = styleSheet.create({
  container: {},
})

export default WebContainer
