import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '@/i18n/context.tsx';
import { ExerciseQuizPanel } from '@/pages/alphabet/exercise/exercise-quiz-panel.tsx';
import type { QuizQuestion } from '@/pages/alphabet/exercise/exercise-quiz.ts';

function renderWithI18n(ui: ReactElement) {
  // The provider reads its locale from the URL; the root path selects English.
  return render(
    <MemoryRouter initialEntries={['/']}>
      <LanguageProvider>{ui}</LanguageProvider>
    </MemoryRouter>
  );
}

const shiQuestion: QuizQuestion = {
  mode: 'romaji',
  correctItem: { char: 'し', romaji: 'shi' },
  optionItems: [{ char: 'し', romaji: 'shi' }],
  correctAnswers: ['shi']
};

function renderRomajiPanel(props: Partial<Parameters<typeof ExerciseQuizPanel>[0]> = {}) {
  const onAnswer = vi.fn();
  renderWithI18n(
    <ExerciseQuizPanel
      mode="romaji"
      scriptLabel="Hiragana"
      question={shiQuestion}
      questionNumber={1}
      wrongAnswers={[]}
      answeredCorrectly={false}
      onAnswer={onAnswer}
      {...props}
    />
  );
  return { onAnswer };
}

describe('ExerciseQuizPanel (romaji mode)', () => {
  it('offers a manual Show answer affordance instead of revealing it upfront', () => {
    renderRomajiPanel();
    expect(screen.getByRole('button', { name: 'Show answer' })).toBeInTheDocument();
  });

  it('submits the typed romaji value', async () => {
    const user = userEvent.setup();
    const { onAnswer } = renderRomajiPanel();

    await user.type(screen.getByPlaceholderText('Type romaji'), 'shi');
    await user.click(screen.getByRole('button', { name: 'Check' }));

    expect(onAnswer).toHaveBeenCalledWith('shi');
  });

  it('only trims and lowercases the typed value (no alias conversion)', async () => {
    const user = userEvent.setup();
    const { onAnswer } = renderRomajiPanel();

    // Kunrei-shiki `si` is NOT converted to `shi`; it submits as typed.
    await user.type(screen.getByPlaceholderText('Type romaji'), ' SI ');
    await user.click(screen.getByRole('button', { name: 'Check' }));

    expect(onAnswer).toHaveBeenCalledWith('si');
  });

  it('locks the input and disables Check once answered correctly', () => {
    renderRomajiPanel({ answeredCorrectly: true });

    expect(screen.getByPlaceholderText('Type romaji')).toHaveAttribute('readonly');
    expect(screen.getByRole('button', { name: 'Check' })).toBeDisabled();
  });
});
