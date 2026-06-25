import type { Meta, StoryObj } from '@storybook/react-vite';
import { PhoneticsLine } from '@/components/phonetics-line';

const meta = {
  title: 'Components/PhoneticsLine',
  component: PhoneticsLine,
  parameters: {
    layout: 'padded'
  },
  args: {
    romaji: 'Watashi wa gakusei desu.'
  }
} satisfies Meta<typeof PhoneticsLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
