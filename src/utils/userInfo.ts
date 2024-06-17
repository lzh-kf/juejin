import storge from './storge'
const userInfoManger = {
  userInfo: undefined as any,
  saveUserInfo(value: Object) {
    storge.save({
      key: 'userInfo',
      data: value,
    })
    userInfoManger.userInfo = value
  },
  removeUserInfo() {
    storge.remove({
      key: 'userInfo',
    })
    userInfoManger.userInfo = undefined
  },
  getUserInfo: async function () {
    try {
      const value = await storge.load({
        key: 'userInfo',
      })
      userInfoManger.userInfo = value
    } catch (error) {
      console.log('获取用户信息错误', error)
    }
  },
}
userInfoManger.getUserInfo()
export default userInfoManger
