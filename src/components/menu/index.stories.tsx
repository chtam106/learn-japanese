import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Menu } from '@/components/menu';

const meta = {
  title: 'Layout/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    drawerWidth: 320,
    isMobile: false,
    mobileOpen: false,
    onClose: fn()
  }
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};

export const MobileOpen: Story = {
  args: {
    isMobile: true,
    mobileOpen: true
  }
};
