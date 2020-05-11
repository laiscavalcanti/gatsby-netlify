const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#000000"
  if (theme === "dark") return "#191919"
}

export default getThemeColor
