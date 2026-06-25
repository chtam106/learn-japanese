import { describe, expect, it } from 'vitest';
import {
  createQuizSession,
  getOptionValue,
  isQuizAnswerCorrect,
  usesCharacterOptions,
  type QuizQuestion
} from '@/pages/alphabet/exercise/exercise-quiz.ts';

const sampleQuestion: QuizQuestion = {
  mode: 'romaji',
  correctItem: { char: 'あ', romaji: 'a' },
  optionItems: [{ char: 'あ', romaji: 'a' }],
  correctAnswers: ['a']
};

describe('isQuizAnswerCorrect', () => {
  it('returns true only for an accepted answer', () => {
    expect(isQuizAnswerCorrect(sampleQuestion, 'a')).toBe(true);
    expect(isQuizAnswerCorrect(sampleQuestion, 'i')).toBe(false);
  });
});

describe('getOptionValue', () => {
  const cell = { char: 'か', romaji: 'ka' };

  it('uses romaji for the romaji mode and the character otherwise', () => {
    expect(getOptionValue(cell, 'romaji')).toBe('ka');
    expect(getOptionValue(cell, 'character')).toBe('か');
    expect(getOptionValue(cell, 'listen')).toBe('か');
  });
});

describe('usesCharacterOptions', () => {
  it('is false for romaji and true for the character-based modes', () => {
    expect(usesCharacterOptions('romaji')).toBe(false);
    expect(usesCharacterOptions('character')).toBe(true);
    expect(usesCharacterOptions('listen')).toBe(true);
    expect(usesCharacterOptions('script-pair')).toBe(true);
  });
});

describe('createQuizSession', () => {
  it('serves every item once before repeating and always includes the answer among the options', () => {
    const session = createQuizSession('hiragana', 'romaji', 'seion');
    expect(session.total).toBeGreaterThan(0);

    const seen = new Set<string>();
    for (let i = 0; i < session.total; i += 1) {
      const question = session.next();
      seen.add(question.correctItem.char);
      expect(question.optionItems).toContainEqual(question.correctItem);
      expect(question.correctAnswers).toContain(question.correctItem.romaji);
    }

    expect(seen.size).toBe(session.total);
    expect(session.remaining).toBe(0);

    // Reshuffles and keeps serving once the deck is exhausted.
    expect(session.next().correctItem).toBeDefined();
  });
});
