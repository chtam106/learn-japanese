import { useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Button,
  Chip,
  LinearProgress,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { pink } from '@mui/material/colors';
import {
  getCourse,
  getLesson,
  lessonPath,
  type Course,
  type CourseLevel,
  type Lesson
} from '@/constants/courses/index.ts';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { SpeakButton } from '@/components/speak-button';
import { useTranslation } from '@/i18n/use-translation.ts';
import { isSpeechSupported, speakJapanese } from '@/utils/speech.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { ChoiceButton } from '@/pages/course/choice-button';
import { buildLessonQuiz, normalizeAnswer, type QuizQuestion } from './course-quiz.ts';
import { LessonNotFound, ResultScreen } from '@/pages/course/shared';

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
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const question = questions[index];
  const isLast = index === total - 1;
  const answered = question.format === 'choice' ? selectedId !== undefined : submitted;
  const isCorrect =
    question.format === 'choice'
      ? selectedId === question.correctId
      : question.accepted.includes(normalizeAnswer(inputValue));
  const canPlayPromptAudio =
    canSpeak &&
    Boolean(question.promptJa) &&
    question.kind !== 'grammar-pattern' &&
    question.kind !== 'grammar-cloze';

  const handleSelect = (optionId: string) => {
    if (question.format !== 'choice' || answered) {
      return;
    }

    setSelectedId(optionId);

    if (optionId === question.correctId) {
      setScore((previous) => previous + 1);
    }
  };

  const handleSubmitInput = () => {
    if (question.format !== 'input' || submitted || inputValue.trim() === '') {
      return;
    }

    setSubmitted(true);

    if (question.accepted.includes(normalizeAnswer(inputValue))) {
      setScore((previous) => previous + 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      setFinished(true);

      return;
    }

    setIndex((previous) => previous + 1);
    setSelectedId(undefined);
    setInputValue('');
    setSubmitted(false);
  };

  const handleRetry = () => {
    setQuestions(buildLessonQuiz(course, lesson, locale));
    setIndex(0);
    setSelectedId(undefined);
    setInputValue('');
    setSubmitted(false);
    setScore(0);
    setFinished(false);
  };

  return (
    <PageContainer>
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 1 }}>
            <Button
              component={RouterLink}
              to={lessonPath(course.level, lesson.id)}
              startIcon={<ArrowBackIcon />}
              size="small"
              sx={{ ml: -0.5 }}
            >
              {t('common.back')}
            </Button>
          </Box>
          <Chip
            label={t('course.lessonLabel', { number: lesson.number })}
            color="primary"
            variant="outlined"
            size="small"
            sx={{ mb: 1 }}
          />
          <Heading component="h1">
            {lesson.title[locale]} · {t('course.exercise')}
          </Heading>
        </Box>

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
                  const showCorrect = answered && isCorrectOption;
                  const showWrong = answered && option.id === selectedId && !isCorrectOption;

                  return (
                    <ChoiceButton
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      dimmed={answered && !showCorrect && !showWrong}
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
                    onChange={(event) => setInputValue(event.target.value)}
                    placeholder={t('course.inputPlaceholder')}
                    fullWidth
                    autoComplete="off"
                    autoFocus
                    color={submitted ? (isCorrect ? 'success' : 'error') : 'primary'}
                    focused={submitted || undefined}
                    slotProps={{
                      input: { readOnly: submitted },
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
                    disabled={submitted || inputValue.trim() === ''}
                  >
                    {t('course.check')}
                  </Button>
                </Stack>
              </Box>
            )}

            <Box sx={{ minHeight: 56 }}>
              {answered && (
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: isCorrect ? 'info.main' : pink[500] }}
                    >
                      {isCorrect ? t('course.correct') : t('course.incorrect')}
                    </Typography>
                    {question.format === 'input' && !isCorrect && (
                      <Typography variant="body2" color="text.secondary">
                        {t('course.answerWas', { answer: question.answer })}
                      </Typography>
                    )}
                  </Box>
                  <Button variant="contained" onClick={handleNext}>
                    {isLast ? t('course.seeResults') : t('course.next')}
                  </Button>
                </Stack>
              )}
            </Box>
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
