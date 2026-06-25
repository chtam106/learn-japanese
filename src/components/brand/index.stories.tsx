import type { Meta, StoryObj } from '@storybook/react-vite';
import { Brand } from '@/components/brand';

const meta = {
  title: 'Components/Brand',
  component: Brand,
  args: {
    showLogo: true,
    showTagline: false
  }
} satisfies Meta<typeof Brand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTagline: Story = {
  args: {
    showTagline: true
  }
};

export const TextOnly: Story = {
  args: {
    showLogo: false
  }
};
