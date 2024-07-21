import type { Meta, StoryObj } from '@storybook/react';
import { Page404 } from './404';

const meta: Meta<typeof Page404> = {
  component: Page404,
  parameters: {
    docs: {
      description: {
        component: '404 Page',
      },
    },
    layout: 'centered',
  },

};

export default meta;

type Story = StoryObj<typeof Page404>;

export const Basic: Story = {};
