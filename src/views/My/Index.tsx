import React from 'react'
import PageView from '../../components/PageView'
import UserInfo from './components/UserInfo'
import FastNav from './components/FastNav'
import CreatorCenter from './components/CreatorCenter'
import More from './components/More'
import useTheme from '../../hooks/useTheme'

function My(): React.JSX.Element {
  const { isDark } = useTheme()
  return (
    <PageView
      style={{
        backgroundColor: isDark ? '#000' : '#f3f4f6',
      }}>
      <UserInfo />
      <FastNav isDark={isDark} />
      <CreatorCenter isDark={isDark} />
      <More isDark={isDark} />
    </PageView>
  )
}
export default My
