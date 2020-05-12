import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"
import Header from "../Header"
import Footer from "../Footer"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Header />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <Footer />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
