import { DAKUTEN_MARK, HANDAKUTEN_MARK } from '@/constants/kana-terminology.ts';

export type Locale = 'en' | 'vi';

export type TranslationParams = Record<string, string | number>;

const en: TranslationTree = {
  common: {
    playAudio: 'Play pronunciation',
    back: 'Back'
  },
  errorBoundary: {
    title: 'Something went wrong',
    body: 'An unexpected error occurred. Please reload the page to continue.',
    reload: 'Reload page'
  },
  audio: {
    settings: 'Audio settings',
    voice: 'Voice',
    auto: 'Automatic',
    speed: 'Speed',
    test: 'Test voice',
    noVoices: 'No Japanese voice was found in your browser.'
  },
  seo: {
    home: {
      title: 'Learn Japanese Hiragana & Katakana',
      description:
        'Start learning Japanese kana with interactive hiragana and katakana charts, native audio, and free practice quizzes.'
    },
    alphabet: {
      title: 'Japanese Alphabet - Hiragana & Katakana',
      description:
        'Explore hiragana and katakana writing systems with complete charts, pronunciation audio, and guided exercises.',
      hiragana: {
        title: 'Hiragana Chart & Practice (ひらがな)',
        description:
          'Learn hiragana with an interactive chart covering seion, dakuten, handakuten, and yoon. Tap any character to hear native audio.'
      },
      katakana: {
        title: 'Katakana Chart & Practice (カタカナ)',
        description:
          'Master katakana with a full interactive chart, native pronunciation, and practice exercises for loanwords and emphasis.'
      },
      combined: {
        title: 'Hiragana + Katakana Combined Chart',
        description:
          'A single gojuon chart that pairs hiragana and katakana in every cell with romaji and native audio - compare both syllabaries side by side.'
      },
      exercise: {
        title: 'Japanese Kana Exercises & Quizzes',
        description:
          'Practice hiragana and katakana with romaji, character, listening, and script-matching quizzes.',
        romaji: {
          title: 'Romaji Quiz - Hiragana & Katakana Practice',
          description:
            'See a kana character and choose the correct romaji. Practice hiragana and katakana reading step by step.'
        },
        character: {
          title: 'Choose the Kana Character Quiz',
          description:
            'See romaji and pick the matching hiragana or katakana character. Build kana recognition with instant feedback.'
        },
        listen: {
          title: 'Listen & Choose Kana Quiz',
          description:
            'Train your ear with native audio and pick the correct hiragana or katakana character.'
        },
        scriptPair: {
          title: 'Hiragana ↔ Katakana Matching Quiz',
          description:
            'Match hiragana and katakana pairs to strengthen both Japanese syllabaries at once.'
        },
        writing: {
          title: 'Kana Writing Practice with Stroke Order Animation',
          description:
            'Pick a basic hiragana or katakana character, practice writing by hand, and follow the stroke order animation guide.'
        }
      }
    }
  },
  language: {
    label: 'Language',
    en: 'English',
    vi: 'Tiếng Việt'
  },
  nav: {
    home: 'Home',
    alphabet: 'Alphabet',
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    combined: 'Combined chart',
    exercise: 'Exercise',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNavigation: 'Main navigation',
    collapse: 'Collapse {{label}}',
    expand: 'Expand {{label}}'
  },
  home: {
    title: 'Learn Japanese with Langwish',
    intro:
      'Read and practice kana step by step, then keep going with structured JLPT N5-N1 and frontend Japanese courses - interactive charts, audio, quizzes, and writing practice.',
    hiraganaDescription: 'Learn the basic syllabary used for native Japanese words.',
    katakanaDescription: 'Learn the script used for loanwords and emphasis.',
    combinedDescription: 'Compare hiragana and katakana side by side in one chart.',
    exerciseDescription: 'Quiz yourself on romaji and characters with audio feedback.',
    alphabetSection: 'Alphabet & practice',
    coursesSection: 'Courses'
  },
  alphabet: {
    title: 'Alphabet',
    subtitle: 'Choose a writing system to study.',
    intro:
      'Written Japanese combines three scripts. Hiragana and katakana are phonetic syllabaries - each character is exactly one sound - while kanji are meaning-based characters borrowed from Chinese. Learn the two kana sets first: together they cover every sound in the language and are the foundation for everything else.',
    systemsHeading: 'The Japanese writing system',
    systemHiragana:
      'Hiragana (ひらがな) - the rounded syllabary of 46 basic sounds, used for native words, grammar particles, and word endings.',
    systemKatakana:
      'Katakana (カタカナ) - the same sounds in an angular form, used for loanwords, foreign names, and emphasis.',
    systemKanji:
      'Kanji (漢字) - meaning-based characters borrowed from Chinese; you pick these up gradually through the JLPT courses.',
    hiraganaDescription: 'ひらがな - basic Japanese syllabary',
    katakanaDescription: 'カタカナ - used for foreign words and emphasis',
    combinedDescription: 'See hiragana and katakana side by side in one chart',
    exerciseDescription: 'Practice hiragana and katakana',
    hiraganaPageDescription:
      'Hiragana is the foundation of written Japanese. Its 46 basic sounds (seion) spell grammar particles, verb and adjective endings, and native words. Voicing marks (dakuten and handakuten) and the small ゃ/ゅ/ょ of yoon extend the same set to cover every Japanese sound.',
    katakanaPageDescription:
      'Katakana shares the exact same sounds as hiragana but uses sharper, more angular strokes. It is reserved for loanwords, foreign names, onomatopoeia, scientific terms, and words written for emphasis. Learning it alongside hiragana lets you read signs, menus, and product names.',
    combinedPageDescription:
      'Both kana sets share the same sounds, so this chart pairs them in every cell: hiragana on the left, katakana on the right. Use it to compare shapes side by side and reinforce both syllabaries at once.',
    tapHint: 'Tap a character to hear its pronunciation.'
  },
  chart: {
    seion: 'Seion',
    voiced: 'Dakuten / Handakuten ({{dakuten}} / {{handakuten}})',
    voicedDescription:
      'Add the dakuten mark ({{dakuten}}) to voice a sound: k→g, s→z, t→d, h→b. The handakuten mark ({{handakuten}}) turns h→p. e.g. {{base}} ({{baseRomaji}}) + {{dakuten}} = {{voiced}} ({{voicedRomaji}}).',
    yoon: 'Yoon',
    yoonDescription:
      'Combined sounds with small {{small1}}, {{small2}}, {{small3}} - e.g. {{base}} + {{small1}} = {{result}} ({{romaji}}).',
    playAudio: 'Play {{char}}, {{romaji}}'
  },
  exercise: {
    title: 'Exercise',
    hubSubtitle: 'Choose an exercise type.',
    romajiDescription: 'See kana and choose the matching romaji.',
    characterDescription: 'See romaji and choose the matching kana.',
    listenDescription: 'Listen and choose the matching kana.',
    scriptPairDescription: 'Match hiragana and katakana pairs.',
    writing: 'Writing practice',
    writingDescription:
      'Choose a basic character and practice writing it with stroke-order animation guidance.',
    writingCharacter: 'Character',
    writingGuideAlt: '{{script}} stroke order for {{char}}',
    writingReplayHint: 'Tap the character image to replay the stroke order and hear it.',
    writingCanvasAria: 'Writing canvas for {{char}}',
    writingClear: 'Clear writing',
    writingPreviousCharacter: 'Previous character {{char}}',
    writingNextCharacter: 'Next character {{char}}',
    chooseCharacter: 'Choose the kana character',
    listenPickShort: 'Listen & choose',
    script: 'Script',
    scriptAll: 'All',
    scriptBoth: 'Hiragana & Katakana',
    scope: 'Scope',
    rowFrom: 'From row',
    rowTo: 'To row',
    allRows: 'All rows',
    guessRomaji: 'Choose romaji',
    scriptPair: 'Hiragana ↔ Katakana',
    pairDirection: 'Direction',
    pairHiraToKata: 'Hiragana → Katakana',
    pairKataToHira: 'Katakana → Hiragana',
    pairMixed: 'Mixed',
    questionListen: 'Which {{script}} character do you hear?',
    questionScriptPairHiraToKata: 'What is the matching katakana?',
    questionScriptPairKataToHira: 'What is the matching hiragana?',
    replayAudio: 'Replay audio',
    questionRomaji: 'What is the romaji for this {{script}}?',
    questionCharacter: 'What is the {{script}} character?',
    scopeAll: 'All characters',
    scopeSeion: 'Seion',
    scopeDakuten: 'Dakuten ({{mark}})',
    scopeHandakuten: 'Handakuten ({{mark}})',
    scopeYoon: 'Yoon',
    groupSeionRows: 'Seion rows',
    groupYoonRows: 'Yoon rows',
    rowDefault: 'Row',
    yoonRowDefault: 'Yoon row',
    rowLabel: '{{name}} row ({{char}})',
    voicedRowLabel: '{{name}} row - {{mark}} ({{char}})'
  },
  course: {
    lessonsHeading: 'Lessons',
    frontendTrackTag: 'Frontend',
    lessonLabel: 'Lesson {{number}}',
    focusLabel: 'In this lesson',
    vocabulary: 'Vocabulary',
    grammar: 'Grammar',
    examples: 'Examples',
    openLesson: 'Study lesson',
    previousLesson: 'Previous',
    nextLesson: 'Next',
    counts: '{{vocab}} words · {{grammar}} grammar points',
    notFoundTitle: 'Lesson not found',
    notFoundBody: 'This lesson does not exist. Go back to the course overview.',
    practiceHeading: 'Practice this lesson',
    exercise: 'Practice',
    exerciseSubtitle: "Test yourself on this lesson's vocabulary, grammar, and reading.",
    startExercise: 'Start practice',
    listening: 'Listening',
    startListening: 'Start listening',
    listenPrompt: 'What did you hear?',
    play: 'Play audio',
    replay: 'Replay',
    speechUnsupported: 'Your browser does not support audio playback for this exercise.',
    reading: 'Reading',
    startReading: 'Start reading',
    comprehension: 'Comprehension question',
    showTranslation: 'Show translation',
    hideTranslation: 'Hide translation',
    questionProgress: 'Question {{current}} of {{total}}',
    chooseAnswer: 'Choose the correct answer',
    typeAnswer: 'Type the missing word',
    inputPlaceholder: 'Your answer (kana)',
    check: 'Check',
    answerWas: 'Answer: {{answer}}',
    correct: 'Correct',
    incorrect: 'Incorrect',
    next: 'Next',
    seeResults: 'See results',
    resultTitle: 'Practice complete!',
    resultGreat: 'Excellent work! You know this lesson well.',
    resultGood: 'Nice progress - review the misses and try again.',
    resultKeepGoing: 'Keep practicing - revisit the lesson and try again.',
    retry: 'Try again',
    reviewLesson: 'Review lesson'
  }
} satisfies TranslationTree;

type TranslationLeaf = string;
type TranslationNode = { [key: string]: TranslationLeaf | TranslationNode };
export type TranslationTree = TranslationNode;

export const enTranslations: TranslationTree = en;

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_STORAGE_KEY = 'langwish-locale';

export function getChartSectionLabels(t: (key: string, params?: TranslationParams) => string) {
  return {
    seion: t('chart.seion'),
    voiced: t('chart.voiced', { dakuten: DAKUTEN_MARK, handakuten: HANDAKUTEN_MARK }),
    yoon: t('chart.yoon')
  };
}
