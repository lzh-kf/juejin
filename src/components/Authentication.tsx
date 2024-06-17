import React from 'react'
import PageView from './PageView'
import Login from '../views/Login/Index'
import userInfoManger from '../utils/userInfo'
interface Props {
  children: React.ReactNode
}
const Authentication = (props: Props) => {
  const userInfo = userInfoManger.userInfo
  const { children } = props
  return userInfo ? <PageView>{children}</PageView> : <Login />
}
export default Authentication
