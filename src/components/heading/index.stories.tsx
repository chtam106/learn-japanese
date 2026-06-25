import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '@/components/heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'padded'
  },
  args: {
    scale: 'page',
    children: 'The quick brown fox'
  },
  argTypes: {
    scale: {
      control: 'inline-radio',
      options: ['display', 'page', 'section', 'subsection']
    }
  }
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllScales: Story = {
  render: () => (
    <Stack spacing={2}>
      <Heading scale="display">Display heading</Heading>
      <Heading scale="page">Page heading</Heading>
      <Heading scale="section">Section heading</Heading>
      <Heading scale="subsection">Subsection heading</Heading>
    </Stack>
  )
};
