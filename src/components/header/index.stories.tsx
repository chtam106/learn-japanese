import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Header } from '@/components/header';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    drawerWidth: 320,
    isMobile: false,
    mobileOpen: false,
    onToggleMobile: fn()
  }
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};

export const Mobile: Story = {
  args: {
    isMobile: true
  }
};

export const MobileOpen: Story = {
  args: {
    isMobile: true,
    mobileOpen: true
  }
};
