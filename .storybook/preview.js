// .storybook/preview.js
import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#0D0D0D',
      },
      {
        name: 'light',
        value: '#FAFAFA',
      },
    ],
  },
};
