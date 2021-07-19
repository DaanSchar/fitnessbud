export const palette = {
  a: '#03254c',
  b: '#315176',
  c: '#187bcd',
  d: '#2a9df4',
  e: '#d0efff',
}

let isDarkMode = false;

export const color = {
  primary: palette.a,
  secondary: palette.b,
  tertiary: '#c3c3c7',

  textDark: palette.a,
  textLight: '#707070',

  background: 'white',
  border: '#e8e8eb',

  white: 'white',
  black: 'black',
  delete: '#9a0c0c',
  error: 'red',

  success: '#6cb67c'
}

const darkTheme = {
  primary: 'black',
  secondary: 'black',
  tertiary: 'black',

  textDark: 'black',
  textLight: 'black',

  background: 'black',
  border: 'black',

  white: 'white',
  black: 'black',
}

export function getColor() {
  if (isDarkMode)
    return { ...darkTheme };
  return { ...color };
}


