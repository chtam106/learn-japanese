import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReplayIcon from '@mui/icons-material/Replay';
import VolumeUpIcon from '@mui/icons-material/VolumeUpOutlined';
import {
  Box,
  Button,
  Chip,
  IconButton,
  LinearProgress,
  Paper,
  Stack,
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
import { useTranslation } from '@/i18n/use-translation.ts';
import { cancelSpeech, isSpeechSupported, speakJapanese } from '@/utils/speech.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { ChoiceButton } from '@/pages/course/choice-button';
import { buildLessonListening, type ListeningQuestion } from './course-listening.ts';
import { LessonNotFound, ResultScreen } from '@/pages/course/shared';

type ListeningQuizProps = {
  course: Course;
  lesson: Lesson;
};

function ListeningQuiz({ course, lesson }: ListeningQuizProps) {
  const { locale, t } = useTranslation();

  const [questions, setQuestions] = useState<ListeningQuestion[]>(() =>
    buildLessonListening(course, lesson, locale)
  );
  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const question = questions[index];
  const isLast = index === total - 1;
  const answered = selectedId !== undefined;

  useEffect(() => {
    if (finished) {
      return;
    }

    speakJapanese(question.audioText);

    return () => {
      cancelSpeech();
    };
  }, [question.audioText, finished]);

  const handleSelect = (optionId: string) => {
    if (answered) {
      return;
    }

    setSelectedId(optionId);

    if (optionId === question.correctId) {
      setScore((previous) => previous + 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      cancelSpeech();
      setFinished(true);

      return;
    }

    setIndex((previous) => previous + 1);
    setSelectedId(undefined);
  };

  const handleRetry = () => {
    setQuestions(buildLessonListening(course, lesson, locale));
    setIndex(0);
    setSelectedId(undefined);
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
            {lesson.title[locale]} · {t('course.listening')}
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

            <Paper
              elevation={0}
              sx={[
                elevatedSurfaceSx,
                {
                  p: { xs: 3, md: 4 },
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1
                }
              ]}
            >
              <Typography variant="overline" color="text.secondary">
                {t('course.listenPrompt')}
              </Typography>
              <IconButton
                onClick={() => speakJapanese(question.audioText)}
                color="primary"
                aria-label={t('course.play')}
                sx={{
                  width: 84,
                  height: 84,
                  border: 2,
                  borderColor: 'primary.main',
                  '& svg': { fontSize: 44 }
                }}
              >
                <VolumeUpIcon />
              </IconButton>
              <Button
                size="small"
                startIcon={<ReplayIcon />}
                onClick={() => speakJapanese(question.audioText)}
              >
                {t('course.replay')}
              </Button>

              {answered && (
                <Box sx={{ mt: 1 }}>
                  <Typography variant="h5" component="p" lang="ja" sx={{ fontWeight: 600 }}>
                    {question.reveal.jp}
                  </Typography>
                </Box>
              )}
            </Paper>

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

            <Box sx={{ minHeight: 56 }}>
              {answered && (
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: selectedId === question.correctId ? 'info.main' : pink[500]
                    }}
                  >
                    {selectedId === question.correctId
                      ? t('course.correct')
                      : t('course.incorrect')}
                  </Typography>
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

type SpeechUnavailableProps = {
  level: CourseLevel;
  lesson: Lesson;
};

function SpeechUnavailable({ level, lesson }: SpeechUnavailableProps) {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Heading component="h1" gutterBottom>
        {t('course.listening')}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('course.speechUnsupported')}
      </Typography>
      <Button component={RouterLink} to={lessonPath(level, lesson.id)} variant="contained">
        {t('course.reviewLesson')}
      </Button>
    </PageContainer>
  );
}

type ListeningPageProps = {
  level: CourseLevel;
};

function ListeningPage({ level }: ListeningPageProps) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { locale } = useTranslation();
  const lesson = lessonId ? getLesson(level, lessonId) : undefined;

  if (!lesson) {
    return <LessonNotFound level={level} />;
  }

  if (!isSpeechSupported()) {
    return <SpeechUnavailable level={level} lesson={lesson} />;
  }

  return (
    <ListeningQuiz
      key={`${level}:${lesson.id}:${locale}`}
      course={getCourse(level)}
      lesson={lesson}
    />
  );
}

export default ListeningPage;
