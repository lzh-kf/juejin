import { useMemo } from 'react'
import { Appearance } from 'react-native'
const colorScheme = Appearance.getColorScheme()
const useTheme = () => {
  const isDark = useMemo(() => colorScheme === 'dark', [colorScheme])
  const backgroundColor = useMemo(() => (isDark ? '#222222' : '#fff'), [isDark])
  const color = useMemo(() => (isDark ? '#fff' : '#000'), [isDark])
  return { color, isDark, backgroundColor }
}
export default useTheme

