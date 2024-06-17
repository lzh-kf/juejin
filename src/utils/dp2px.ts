import { Dimensions } from 'react-native'
const deviceWidth = Dimensions.get('window').width
const uiWidth = 375
const dp2px = (uiElementPx: number) => (uiElementPx * deviceWidth) / uiWidth
export default dp2px
