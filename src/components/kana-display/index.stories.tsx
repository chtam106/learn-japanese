import type { Meta, StoryObj } from '@storybook/react-vite';
import { KanaDisplay } from '@/components/kana-display';

const meta = {
  title: 'Components/KanaDisplay',
  component: KanaDisplay,
  parameters: {
    layout: 'centered'
  },
  args: {
    cell: { char: 'あ', romaji: 'a' },
    variant: 'option'
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['prompt', 'option', 'chart']
    }
  }
} satisfies Meta<typeof KanaDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Option: Story = {};

export const Prompt: Story = {
  args: {
    variant: 'prompt'
  }
};

export const Chart: Story = {
  args: {
    variant: 'chart'
  }
};

export const Yoon: Story = {
  args: {
    cell: { char: 'きゃ', romaji: 'kya', yoonBase: 'き', yoonSuffix: 'ゃ' },
    variant: 'prompt'
  }
};
