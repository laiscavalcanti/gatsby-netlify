const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#00000"
  if (theme === "dark") return "#16202c"
}

export default getThemeColor
