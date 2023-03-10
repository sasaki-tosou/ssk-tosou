import React from "react"
import styled from "styled-components"

export default function MicroCmsImg(props) {
  // imgタグを親要素に対して幅いっぱいに表示する
  const ImgWrapper = styled.img`
    width: 100%;
  `
  const { url } = props // 画像のURL
  // url以外のパラメータを１つの文字列型変数にセット
  let array = Object.values(props)
  let param = ""
  array.map(function (elem) {
  // propsの最初はurlなのでそれは入れない
    if (array.indexOf(elem) !== 0) {
      //最初の要素は?をつける
      if (array.indexOf(elem) == 1) {
        param = `?${elem}`
      } else {
        param = `${param}&${elem}`
      }
    }
  })

  return (
    <>    
     <ImgWrapper src={url + param} alt="" />
    </>
  )
}