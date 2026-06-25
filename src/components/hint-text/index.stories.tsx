import type { Meta, StoryObj } from '@storybook/react-vite';
import { HintText } from '@/components/hint-text';

const meta = {
  title: 'Components/HintText',
  component: HintText,
  args: {
    children: 'Tap the Japanese text to hear it.'
  }
} satisfies Meta<typeof HintText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Wrapping: Story = {
  args: {
    children:
      'This is a longer hint that wraps across multiple lines, so you can verify the asterisk stays aligned to the first line.'
  }
};
