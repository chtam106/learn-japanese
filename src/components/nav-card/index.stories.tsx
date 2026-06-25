import type { Meta, StoryObj } from '@storybook/react-vite';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { NavCardGrid } from '@/components/nav-card';

const meta = {
  title: 'Components/NavCardGrid',
  component: NavCardGrid,
  parameters: {
    layout: 'padded'
  },
  args: {
    titleComponent: 'h2',
    items: [
      {
        to: '/n5',
        title: 'JLPT N5',
        description: 'Start with the basics: kana, greetings, and core grammar.',
        symbol: '入'
      },
      {
        to: '/n4',
        title: 'JLPT N4',
        description: 'Build on N5 with more verbs and grammar patterns.',
        symbol: '次'
      },
      {
        to: '/hiragana',
        title: 'Hiragana',
        description: 'Learn the foundational Japanese syllabary.',
        icon: MenuBookOutlinedIcon
      },
      {
        to: '/frontend',
        title: 'Frontend Japanese',
        description: 'Practical Japanese for software engineers.',
        icon: SchoolOutlinedIcon
      }
    ]
  }
} satisfies Meta<typeof NavCardGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwoCards: Story = {
  args: {
    items: [
      {
        to: '/hiragana',
        title: 'Hiragana',
        description: 'Learn the foundational Japanese syllabary.',
        icon: MenuBookOutlinedIcon
      },
      {
        to: '/katakana',
        title: 'Katakana',
        description: 'The script used for loanwords and emphasis.',
        icon: MenuBookOutlinedIcon
      }
    ]
  }
};
