// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import cinnamonbuntheme from './cinnamon-bun-theme.js'

addons.setConfig({
  theme: cinnamonbuntheme,
});