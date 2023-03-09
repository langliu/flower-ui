import { themes } from '@storybook/theming'
import { defineCustomElements } from '../loader'

defineCustomElements()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: {
      ...themes.dark,
      appBg: 'rgb(15, 23, 42)',
    },
    light: {
      ...themes.normal,
      appBg: 'white',
    },
  },
}
