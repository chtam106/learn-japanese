import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  LinearProgress,
  Link,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import {
  getCourse,
  getLesson,
  type Course,
  type CourseLevel,
  type Lesson
} from '@/constants/courses/index.ts';
import { PageContainer } from '@/components/page-container';
import { SpeakButton } from '@/components/speak-button';
import { useTranslation } from '@/i18n/use-translation.ts';
import { isSpeechSupported, speakJapanese } from '@/utils/speech.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { ChoiceButton } from '@/pages/course/choice-button';
import { buildLessonQuiz, normalizeAnswer, type QuizQuestion } from './course-quiz.ts';
import { LessonNotFound, LessonQuizHeader, ResultScreen } from '@/pages/course/shared';

type LessonQuizProps = {
  course: Course;
  lesson: Lesson;
};

function LessonQuiz({ course, lesson }: LessonQuizProps) {
  const { locale, t } = useTranslation();
  const canSpeak = isSpeechSupported();

  const [questions, setQuestions] = useState<QuizQuestion[]>(() =>
    buildLessonQuiz(course, lesson, locale)
  );
  const [index, setIndex] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [correctPicked, setCorrectPicked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputSolved, setInputSolved] = useState(false);
  const [inputWrong, setInputWrong] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const question = questions[index];
  const isLast = index === total - 1;
  const solved = question.format === 'choice' ? correctPicked : inputSolved;
  const canPlayPromptAudio =
    canSpeak &&
    Boolean(question.promptJa) &&
    question.kind !== 'grammar-pattern' &&
    question.kind !== 'grammar-cloze';

  const goToNext = () => {
    if (isLast) {
      setFinished(true);
      return;
    }

    setIndex((previous) => previous + 1);
    setWrongIds([]);
    setCorrectPicked(false);
    setInputValue('');
    setInputSolved(false);
    setInputWrong(false);
    setRevealed(false);
  };

  // Auto-advance shortly after a correct answer; wrong answers let you retry.
  useEffect(() => {
    if (!solved) {
      return;
    }

    const timer = window.setTimeout(goToNext, 900);

    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solved, isLast]);

  // For a wrong choice we only mark that option and let the user choose again.
  const handleSelect = (optionId: string) => {
    if (question.format !== 'choice' || correctPicked || wrongIds.includes(optionId)) {
      return;
    }

    if (optionId === question.correctId) {
      setCorrectPicked(true);

      if (wrongIds.length === 0) {
        setScore((previous) => previous + 1);
      }
    } else {
      setWrongIds((previous) => [...previous, optionId]);
    }
  };

  // A wrong answer just marks the field red; the user keeps typing until correct.
  const handleSubmitInput = () => {
    if (question.format !== 'input' || inputSolved || inputValue.trim() === '') {
      return;
    }

    if (question.accepted.includes(normalizeAnswer(inputValue))) {
      setInputSolved(true);

      if (!inputWrong) {
        setScore((previous) => previous + 1);
      }
    } else {
      setInputWrong(true);
    }
  };

  const handleRetry = () => {
    setQuestions(buildLessonQuiz(course, lesson, locale));
    setIndex(0);
    setWrongIds([]);
    setCorrectPicked(false);
    setInputValue('');
    setInputSolved(false);
    setInputWrong(false);
    setRevealed(false);
    setScore(0);
    setFinished(false);
  };

  return (
    <PageContainer>
      <Stack spacing={3}>
        <LessonQuizHeader level={course.level} lesson={lesson} section="exercise" />

        {finished && (
          <ResultScreen
            score={score}
            total={total}
            level={course.level}
            lessonId={lesson.id}
            onRetry={handleRetry}
          />
        )}
        {!finished && (
          <>
            <Box>
              <Stack
                direction="row"
                sx={{ justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}
              >
                <Typography variant="body2" color="text.secondary">
                  {t('course.questionProgress', { current: index + 1, total })}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {score} / {total}
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={total === 0 ? 0 : (index / total) * 100}
                sx={{ borderRadius: 1, height: 8 }}
              />
            </Box>

            <Paper elevation={0} sx={[elevatedSurfaceSx, { p: { xs: 2.5, md: 3 } }]}>
              <Typography variant="overline" color="text.secondary">
                {question.format === 'input' ? t('course.typeAnswer') : t('course.chooseAnswer')}
              </Typography>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: 'flex-start', mt: 0.5 }}>
                <Typography
                  variant="h4"
                  component="p"
                  onClick={
                    canPlayPromptAudio ? () => speakJapanese(question.promptPrimary) : undefined
                  }
                  role={canPlayPromptAudio ? 'button' : undefined}
                  tabIndex={canPlayPromptAudio ? 0 : undefined}
                  aria-label={canPlayPromptAudio ? t('common.playAudio') : undefined}
                  onKeyDown={
                    canPlayPromptAudio
                      ? (event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            speakJapanese(question.promptPrimary);
                          }
                        }
                      : undefined
                  }
                  sx={{
                    flex: 1,
                    fontWeight: 600,
                    cursor: canPlayPromptAudio ? 'pointer' : undefined
                  }}
                  lang={question.promptJa ? 'ja' : undefined}
                >
                  {question.promptPrimary}
                </Typography>
                {canPlayPromptAudio && <SpeakButton text={question.promptPrimary} size="medium" />}
              </Stack>
              {question.promptSecondary && (
                <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                  {question.promptSecondary}
                </Typography>
              )}
            </Paper>

            {question.format === 'choice' && (
              <Stack spacing={1.5}>
                {question.options.map((option) => {
                  const isCorrectOption = option.id === question.correctId;
                  const showCorrect = correctPicked && isCorrectOption;
                  const showWrong = wrongIds.includes(option.id);
                  const locked = correctPicked || showWrong;

                  return (
                    <ChoiceButton
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      dimmed={locked}
                      state={showCorrect ? 'correct' : showWrong ? 'wrong' : 'default'}
                      lang={option.ja ? 'ja' : undefined}
                    >
                      {option.label}
                    </ChoiceButton>
                  );
                })}
              </Stack>
            )}
            {question.format !== 'choice' && (
              <Stack spacing={2}>
                <Box aria-live="polite" sx={{ display: 'grid', justifyItems: 'start' }}>
                  <Link
                    component="button"
                    type="button"
                    variant="body1"
                    underline="hover"
                    onClick={() => setRevealed(true)}
                    sx={{
                      gridArea: '1 / 1',
                      lineHeight: 1.66,
                      visibility: revealed ? 'hidden' : 'visible'
                    }}
                  >
                    {t('exercise.showAnswer')}
                  </Link>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      gridArea: '1 / 1',
                      alignItems: 'baseline',
                      flexWrap: 'wrap',
                      visibility: revealed ? 'visible' : 'hidden'
                    }}
                  >
                    <Link
                      component="button"
                      type="button"
                      variant="body1"
                      underline="hover"
                      onClick={() => setRevealed(false)}
                      sx={{ lineHeight: 1.66 }}
                    >
                      {t('exercise.hideAnswer')}
                    </Link>
                    <Typography
                      lang="ja"
                      variant="body1"
                      sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.66 }}
                    >
                      {question.answer}
                    </Typography>
                  </Stack>
                </Box>
                <Box
                  component="form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmitInput();
                  }}
                >
                  <Stack direction="row" spacing={1.5}>
                    <TextField
                      value={inputValue}
                      onChange={(event) => {
                        setInputValue(event.target.value);
                        if (inputWrong) {
                          setInputWrong(false);
                        }
                      }}
                      placeholder={t('course.inputPlaceholder')}
                      fullWidth
                      autoComplete="off"
                      autoFocus
                      color={inputSolved ? 'success' : 'primary'}
                      focused={inputSolved || undefined}
                      error={inputWrong}
                      sx={{ minWidth: 0 }}
                      slotProps={{
                        input: { readOnly: inputSolved },
                        htmlInput: {
                          autoCapitalize: 'none',
                          autoCorrect: 'off',
                          spellCheck: false
                        }
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={inputSolved || inputValue.trim() === ''}
                      sx={{ flexShrink: 0, whiteSpace: 'nowrap' }}
                    >
                      {t('course.check')}
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            )}
          </>
        )}
      </Stack>
    </PageContainer>
  );
}

type ExercisePageProps = {
  level: CourseLevel;
};

function ExercisePage({ level }: ExercisePageProps) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { locale } = useTranslation();
  const lesson = lessonId ? getLesson(level, lessonId) : undefined;

  if (!lesson) {
    return <LessonNotFound level={level} />;
  }

  return (
    <LessonQuiz key={`${level}:${lesson.id}:${locale}`} course={getCourse(level)} lesson={lesson} />
  );
}

export default ExercisePage;
