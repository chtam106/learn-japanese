import type { Meta, StoryObj } from '@storybook/react-vite';
import { YoonGlyph } from '@/components/yoon-glyph';

const meta = {
  title: 'Components/YoonGlyph',
  component: YoonGlyph,
  parameters: {
    layout: 'centered'
  },
  args: {
    base: 'き',
    suffix: 'ゃ'
  }
} satisfies Meta<typeof YoonGlyph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    compact: true
  }
};

export const Large: Story = {
  args: {
    large: true
  }
};
