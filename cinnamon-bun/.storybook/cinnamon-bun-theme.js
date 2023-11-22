// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';

export default cinnamonbuntheme = create({
    
  base: 'light',
  // Typography
  fontBase: '"Noto Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Cinnamon-bun',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  //
  colorPrimary: '#944B00',
  colorSecondary: '#934172',

  // UI
  appBg: '#F8FDFF',
  appContentBg: '#F8FDFF',
  appBorderColor: '#84746A',
  appBorderRadius: 4,

  // Text colors
  textColor: '#001F25',
  textInverseColor: '#F8FDFF',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});