import React from 'react'
import type { Preview } from '@storybook/react-vite'
import '../src/design-system/vars.scss'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'cyberpunk', title: 'Cyberpunk', icon: 'zap' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as string

      if (theme === 'light') {
        document.documentElement.removeAttribute('data-theme')
      } else {
        document.documentElement.setAttribute('data-theme', theme)
      }

      return (
        <div
          style={{
            minHeight: '100%',
            padding: 16,
            background: 'var(--bg-color)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-family-base)',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
  },
}

export default preview
