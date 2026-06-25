import type { Meta, StoryObj } from '@storybook/react-vite';
import { GrammarPointCard } from '@/components/grammar-point-card';

const meta = {
  title: 'Components/GrammarPointCard',
  component: GrammarPointCard,
  parameters: {
    layout: 'padded'
  },
  args: {
    point: {
      pattern: 'NはNです',
      title: { en: 'A is B (statement)', vi: 'A là B (câu khẳng định)' },
      explanation: {
        en: 'Use は to mark the topic and です to politely state what it is.',
        vi: 'Dùng は để đánh dấu chủ đề và です để khẳng định một cách lịch sự.'
      },
      examples: [
        {
          jp: '私は学生です。',
          romaji: 'Watashi wa gakusei desu.',
          meaning: { en: 'I am a student.', vi: 'Tôi là học sinh.' }
        },
        {
          jp: 'これは本です。',
          romaji: 'Kore wa hon desu.',
          meaning: { en: 'This is a book.', vi: 'Đây là quyển sách.' }
        }
      ]
    }
  }
} satisfies Meta<typeof GrammarPointCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
