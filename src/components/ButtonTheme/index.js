import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Lightbulb } from "@styled-icons/fa-regular/Lightbulb"

const ButtonTheme = () => {
  const [theme, setTheme] = useState(null)
  const isLightMode = theme === "light"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])
  return (
    <WrapperLight
      title="Apagar a luz"
      onClick={() => {
        window.__setPreferredTheme(isLightMode ? "dark" : "light")
      }}
      className={theme}
    >
      <IconLight>
        <Lightbulb />
      </IconLight>
    </WrapperLight>
  )
}

export const WrapperLight = styled.div`
  height: auto;
  margin: 1rem;
  padding: 1rem;
`

export const IconLight = styled.div`
  width: 17px;
  height: 17px;
  border: none;
  background: none;
  cursor: pointer;
`

export default ButtonTheme
