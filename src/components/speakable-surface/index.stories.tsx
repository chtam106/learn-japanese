import { Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SpeakableSurface } from '@/components/speakable-surface';

const meta = {
  title: 'Components/SpeakableSurface',
  component: SpeakableSurface,
  parameters: {
    layout: 'padded'
  },
  args: {
    text: 'こんにちは',
    sx: { p: 2, maxWidth: 360 },
    children: (
      <>
        <Typography variant="h6" lang="ja">
          こんにちは
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tap the card or press Enter to hear it.
        </Typography>
      </>
    )
  }
} satisfies Meta<typeof SpeakableSurface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
