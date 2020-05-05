import React, { useContext, useState, useEffect } from "react"

export const StateContext = React.createContext({
  menuOpen: false,
  toggleMenu: () => {},
})

export const StateProvider = props => {
  const [menuOpen, setMenu] = useState(false)

  useEffect(() => {}, [menuOpen])

  const toggleMenu = () => {
    setMenu(menuOpen => !menuOpen)
  }
  return <StateContext.Provider value={{ menuOpen, toggleMenu }}>{props.children}</StateContext.Provider>
}
