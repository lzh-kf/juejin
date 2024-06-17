import React from 'react'
import ContainerView from '../../../components/ContainerView'
import BaseList from './BaseList'
import styleSheet from '../../../utils/styleSheet'
const ArticleList = () => {
  const list = [
    {
      title: '移动端的适配方案',
      date: '2024-06-04',
    },
    {
      title: '从零开始搭建前端项目（webpack+ts+vue）',
      date: '2024-06-01',
    },
    {
      title: 'web端的项目，如何实时更新',
      date: '2024-05-31',
    },
    {
      title: '压缩图片和切割大文件',
      date: '2024-05-29',
    },
    {
      title: 'vite打包优化（vue篇）',
      date: '2024-05-23',
    },
    {
      title: '管理系统的权限设计（vue）',
      date: '2024-05-21',
    },
    {
      title: '项目获取最新的请求（axios和vue的watch来实现）',
      date: '2024-05-19',
    },
    {
      title: 'pinia数据本地持久化',
      date: '2024-05-16',
    },
  ]
  return (
    <ContainerView style={styles.container}>
      <BaseList title={'单篇分析'} list={list} />
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
  },
  item: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  name: {
    fontWeight: 600,
    fontSize: 14,
    maxWidth: 300,
  },
})
export default ArticleList
