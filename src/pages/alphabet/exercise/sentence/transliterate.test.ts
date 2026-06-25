import { describe, expect, it } from 'vitest';
import {
  canonicalizeRomaji,
  isSentenceAnswerCorrect,
  transliterateSentence
} from '@/pages/alphabet/exercise/sentence/transliterate.ts';

describe('transliterateSentence', () => {
  it('spaces the shown answer by word boundaries and reads a standalone は as "wa"', () => {
    const { display } = transliterateSentence('わたし は がくせい です。');
    expect(display).toBe('watashi wa gakusei desu');
  });

  it('expands the katakana long-vowel mark into a repeated vowel', () => {
    const { display } = transliterateSentence('コーヒー');
    expect(display).toBe('koohii');
  });

  it('doubles the consonant for the small tsu (sokuon)', () => {
    const { display } = transliterateSentence('がっこう');
    expect(display).toBe('gakkou');
  });
});

describe('isSentenceAnswerCorrect', () => {
  const { accepted } = transliterateSentence('わたし は がくせい です。');

  it('accepts the Hepburn spelling shown as the answer', () => {
    expect(isSentenceAnswerCorrect('watashi wa gakusei desu', accepted)).toBe(true);
  });

  it('accepts the literal "ha" reading of the は particle as well as "wa"', () => {
    expect(isSentenceAnswerCorrect('watashi ha gakusei desu', accepted)).toBe(true);
    expect(isSentenceAnswerCorrect('watashi wa gakusei desu', accepted)).toBe(true);
  });

  it('accepts Kunrei-shiki spellings (shi/si, tsu/tu)', () => {
    expect(isSentenceAnswerCorrect('watasi wa gakusei desu', accepted)).toBe(true);
  });

  it('rejects an unrelated answer', () => {
    expect(isSentenceAnswerCorrect('konnichiwa', accepted)).toBe(false);
  });

  it('accepts both readings for the へ and を particles', () => {
    const he = transliterateSentence('がっこう へ いきます。');
    expect(isSentenceAnswerCorrect('gakkou e ikimasu', he.accepted)).toBe(true);
    expect(isSentenceAnswerCorrect('gakkou he ikimasu', he.accepted)).toBe(true);

    const wo = transliterateSentence('ごはん を たべます。');
    expect(isSentenceAnswerCorrect('gohan o tabemasu', wo.accepted)).toBe(true);
    expect(isSentenceAnswerCorrect('gohan wo tabemasu', wo.accepted)).toBe(true);
  });
});

describe('canonicalizeRomaji', () => {
  it('lowercases, strips punctuation/spacing, and removes macrons', () => {
    expect(canonicalizeRomaji('Kōhī!')).toBe('kohi');
  });

  it('collapses Hepburn digraphs to their canonical form', () => {
    expect(canonicalizeRomaji('shi')).toBe('si');
    expect(canonicalizeRomaji('chi')).toBe('ti');
    expect(canonicalizeRomaji('tsu')).toBe('tu');
    expect(canonicalizeRomaji('fu')).toBe('hu');
  });
});
