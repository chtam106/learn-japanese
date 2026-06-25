import type { Meta, StoryObj } from '@storybook/react-vite';
import { SpeakButton } from '@/components/speak-button';

const meta = {
  title: 'Components/SpeakButton',
  component: SpeakButton,
  args: {
    text: 'こんにちは',
    size: 'small'
  }
} satisfies Meta<typeof SpeakButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {};

export const Medium: Story = {
  args: {
    size: 'medium'
  }
};
