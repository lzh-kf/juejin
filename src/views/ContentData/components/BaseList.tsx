import React, { memo } from 'react'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
import useTheme from '../../../hooks/useTheme'
const BaseList = (props: any) => {
  const { isDark } = useTheme()
  return (
    <ContainerView style={styles.container}>
      <ContainerText style={styles.title}>{props.title}</ContainerText>
      <ContainerView>
        {props.list.map((item: any, index: number) => {
          return (
            <ContainerView
              itemKey={index}
              key={index}
              style={[
                styles.item,
                { borderBottomColor: isDark ? '#333333' : '#ebebeb' },
              ]}>
              <ContainerText style={styles.name} numberOfLines={1}>
                {item.title}
              </ContainerText>
              <ContainerText>{item.date}</ContainerText>
            </ContainerView>
          )
        })}
      </ContainerView>
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    marginTop: 20,
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
    marginBottom: 10,
  },
})
export default memo(BaseList)
