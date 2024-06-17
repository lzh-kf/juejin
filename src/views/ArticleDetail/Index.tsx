import React from 'react'
import Markdown from '../../components/MarkDowm'
import PageView from '../../components/PageView'
import ContainerView from '../../components/ContainerView'
import CommentList from './components/CommentList'
import TopTitle from '../../components/TopTitle'
import styleSheet from '../../utils/styleSheet'
import data from './data.json'
const ArticleDetail = () => {
  return (
    <PageView style={styles.container}>
      <TopTitle title={'从零开始搭建前端项目（webpack+ts+vue'} />
      <CommentList
        ListHeaderComponent={() => {
          return (
            <ContainerView style={styles.containerView}>
              <Markdown code={data.data.article_draft.mark_content} />
            </ContainerView>
          )
        }}
      />
    </PageView>
  )
}
const styles = styleSheet.create({
  container: {
    paddingBottom: 20,
  },
  containerView: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
})

export default ArticleDetail
