import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Box, Button, Collapse, LinearProgress, Paper, Stack, Typography } from '@mui/material';
import {
  getLesson,
  type CourseLevel,
  type Lesson,
  type ReadingPassage
} from '@/constants/courses/index.ts';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { SpeakButton } from '@/components/speak-button';
import { useTranslation } from '@/i18n/use-translation.ts';
import { isSpeechSupported, speakJapanese } from '@/utils/speech.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';
import { ChoiceButton } from '@/pages/course/choice-button';
import { LessonNotFound, LessonQuizHeader, ResultScreen } from '@/pages/course/shared';

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

type PassageCardProps = {
  passage: ReadingPassage;
};

function PassageCard({ passage }: PassageCardProps) {
  const { locale, t } = useTranslation();
  const [showTranslation, setShowTranslation] = useState(false);
  const canSpeak = isSpeechSupported();

  const fullText = useMemo(() => passage.lines.map((line) => line.jp).join(' '), [passage.lines]);

  return (
    <Paper elevation={0} sx={[elevatedSurfaceSx, { p: { xs: 2.5, md: 3 } }]}>
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}
      >
        <Heading scale="subsection" component="h2">
          {passage.title[locale]}
        </Heading>
        <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', flexShrink: 0 }}>
          <SpeakButton text={fullText} size="medium" />
          <Button
            size="small"
            startIcon={<TranslateOutlinedIcon />}
            onClick={() => setShowTranslation((previous) => !previous)}
          >
            {showTranslation ? t('course.hideTranslation') : t('course.showTranslation')}
          </Button>
        </Stack>
      </Stack>

      <Stack spacing={1.5}>
        {passage.lines.map((line) => (
          <Box key={line.jp}>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: 'flex-start' }}>
              <Box sx={{ alignSelf: 'flex-start', position: 'relative', top: -2 }}>
                <SpeakButton text={line.jp} />
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="body1"
                  lang="ja"
                  onClick={canSpeak ? () => speakJapanese(line.jp) : undefined}
                  role={canSpeak ? 'button' : undefined}
                  tabIndex={canSpeak ? 0 : undefined}
                  aria-label={canSpeak ? t('common.playAudio') : undefined}
                  onKeyDown={
                    canSpeak
                      ? (event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            speakJapanese(line.jp);
                          }
                        }
                      : undefined
                  }
                  sx={{ fontWeight: 500, cursor: canSpeak ? 'pointer' : undefined }}
                >
                  {line.jp}
                </Typography>
                <Collapse in={showTranslation}>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
                    {line.meaning[locale]}
                  </Typography>
                </Collapse>
              </Box>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}

type ReadingQuizProps = {
  level: CourseLevel;
  lesson: Lesson;
};

function ReadingQuiz({ level, lesson }: ReadingQuizProps) {
  const { locale, t } = useTranslation();
  const passage = lesson.reading![0];

  const [questions, setQuestions] = useState(() =>
    passage.questions.map((question) => ({
      ...question,
      choices: shuffle(question.choices)
    }))
  );
  const [index, setIndex] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [correctPicked, setCorrectPicked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const question = questions[index];
  const isLast = index === total - 1;

  // Auto-advance shortly after a correct answer; wrong answers let you retry.
  useEffect(() => {
    if (!correctPicked) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (isLast) {
        setFinished(true);
        return;
      }

      setIndex((previous) => previous + 1);
      setWrongIds([]);
      setCorrectPicked(false);
    }, 900);

    return () => window.clearTimeout(timer);
  }, [correctPicked, isLast]);

  // For a wrong choice we only mark that option and let the user choose again.
  const handleSelect = (choiceId: string) => {
    if (correctPicked || wrongIds.includes(choiceId)) {
      return;
    }

    if (choiceId === question.correctId) {
      setCorrectPicked(true);

      if (wrongIds.length === 0) {
        setScore((previous) => previous + 1);
      }
    } else {
      setWrongIds((previous) => [...previous, choiceId]);
    }
  };

  const handleRetry = () => {
    setQuestions(passage.questions.map((item) => ({ ...item, choices: shuffle(item.choices) })));
    setIndex(0);
    setWrongIds([]);
    setCorrectPicked(false);
    setScore(0);
    setFinished(false);
  };

  return (
    <PageContainer>
      <Stack spacing={3}>
        <LessonQuizHeader level={level} lesson={lesson} section="reading" />

        <PassageCard passage={passage} />

        {finished && (
          <ResultScreen
            score={score}
            total={total}
            level={level}
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

            <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2.5, md: 3 } }]}>
              <Typography variant="overline" color="text.secondary">
                {t('course.comprehension')}
              </Typography>
              <Typography variant="h6" component="p" sx={{ fontWeight: 600, mt: 0.5 }}>
                {question.question[locale]}
              </Typography>
            </Paper>

            <Stack spacing={1.5}>
              {question.choices.map((choice) => {
                const isCorrectChoice = choice.id === question.correctId;
                const showCorrect = correctPicked && isCorrectChoice;
                const showWrong = wrongIds.includes(choice.id);
                const locked = correctPicked || showWrong;

                return (
                  <ChoiceButton
                    key={choice.id}
                    onClick={() => handleSelect(choice.id)}
                    dimmed={locked}
                    state={showCorrect ? 'correct' : showWrong ? 'wrong' : 'default'}
                  >
                    {choice.label[locale]}
                  </ChoiceButton>
                );
              })}
            </Stack>
          </>
        )}
      </Stack>
    </PageContainer>
  );
}

type ReadingPageProps = {
  level: CourseLevel;
};

function ReadingPage({ level }: ReadingPageProps) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { locale } = useTranslation();
  const lesson = lessonId ? getLesson(level, lessonId) : undefined;

  if (!lesson || !lesson.reading || lesson.reading.length === 0) {
    return <LessonNotFound level={level} />;
  }

  return <ReadingQuiz key={`${level}:${lesson.id}:${locale}`} level={level} lesson={lesson} />;
}

export default ReadingPage;
