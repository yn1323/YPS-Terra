export const mediaQueries = (size: 'sm' | 'md' | 'lg' | 'xl') => {
  const screen = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  }
  return `@media (min-width: ${screen[size]}px)`
}
