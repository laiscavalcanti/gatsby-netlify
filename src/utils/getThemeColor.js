const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#fff"
  if (theme === "dark") return "#191919"
}

export default getThemeColor
