// ref: https://github.com/styled-components/styled-components/issues/709#issuecomment-409810928
export const getBoxShadow = (
  elevation = 4,
  width = 5,
  height = 5,
  color = 'grey',
  opacity = 0.5,
  radius = 10,
) => ({
  elevation,
  shadowOffset: { width, height },
  shadowColor: color,
  shadowOpacity: opacity,
  shadowRadius: radius,
});
