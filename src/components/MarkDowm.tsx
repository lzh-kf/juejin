import React from 'react'
import Markdown from 'react-native-markdown-display'
import styleSheet from '../utils/styleSheet'
import useTheme from '../hooks/useTheme'
const MarkDowmView = (props: any) => {
  const { isDark } = useTheme()
  return (
    <Markdown style={isDark ? darkStyles : lightStyles}>{props.code}</Markdown>
  )
}
const darkStyles = styleSheet.create({
  body: {
    marginBottom: 20,
    backgroundColor: '#222222',
  },
  heading1: {
    color: '#fff',
  },
  heading2: {
    color: '#fff',
  },
  heading3: {
    color: '#fff',
  },
  heading4: {
    color: '#fff',
  },
  heading5: {
    color: '#fff',
  },
  heading6: {
    color: '#fff',
  },
  code_inline: {
    color: '#ff502c',
    backgroundColor: '#222222',
  },
  blockquote: {
    backgroundColor: '#222222',
  },
  // 块级代码替代code_block
  fence: {
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#222222',
  },
  text: {
    color: '#fff',
    backgroundColor: '#222222',
  },
  span: {
    color: '#fff',
    backgroundColor: '#222222',
  },
})

const lightStyles = styleSheet.create({
  body: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  heading1: {
    color: '#000',
  },
  heading2: {
    color: '#000',
  },
  heading3: {
    color: '#000',
  },
  heading4: {
    color: '#000',
  },
  heading5: {
    color: '#000',
  },
  heading6: {
    color: '#000',
  },
  code_inline: {
    color: '#ff502c',
    backgroundColor: '#fff',
  },
  blockquote: {
    backgroundColor: '#fff',
  },
  // 块级代码替代code_block
  fence: {
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    backgroundColor: '#fff',
  },
  span: {
    color: '#000',
    backgroundColor: '#fff',
  },
})
export default MarkDowmView
