import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorFallback } from '@/components/error-fallback';

const meta = {
  title: 'Components/ErrorFallback',
  component: ErrorFallback,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ErrorFallback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ErrorFallback />
};
