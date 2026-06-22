import { useEffect, useRef, useState } from 'react'
import {
  createQuizSession,
  getOptionValue,
  isQuizAnswerCorrect,
  type ExerciseMode,
  type ExerciseScope,
  type ExerciseScript,
  type QuizQuestion,
  type QuizSession,
  type ScriptPairDirection,
} from '@/pages/alphabet/exercise/exercise-quiz.ts'
import { playKanaAudio, playWrongAnswerSound } from '@/utils/kana-audio.ts'

type UseExerciseQuizOptions = {
  mode: ExerciseMode
  script: ExerciseScript
  scope: ExerciseScope
  pairDirection?: ScriptPairDirection
}

function sessionKey(
  script: ExerciseScript,
  mode: ExerciseMode,
  scope: ExerciseScope,
  pairDirection: ScriptPairDirection,
) {
  return `${script}-${mode}-${scope}-${pairDirection}`
}

export function useExerciseQuiz({
  mode,
  script,
  scope,
  pairDirection = 'hiragana-to-katakana',
}: UseExerciseQuizOptions) {
  const [initialQuiz] = useState(() => {
    const session = createQuizSession(script, mode, scope, pairDirection)

    return { session, question: session.next() }
  })
  const sessionRef = useRef<QuizSession>(initialQuiz.session)
  const sessionKeyRef = useRef(sessionKey(script, mode, scope, pairDirection))
  const [question, setQuestion] = useState<QuizQuestion>(initialQuiz.question)
  const [wrongAnswers, setWrongAnswers] = useState<string[]>([])
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false)

  useEffect(() => {
    const key = sessionKey(script, mode, scope, pairDirection)

    if (key === sessionKeyRef.current) {
      return
    }

    sessionKeyRef.current = key
    sessionRef.current = createQuizSession(script, mode, scope, pairDirection)
    setQuestion(sessionRef.current.next())
    setWrongAnswers([])
    setAnsweredCorrectly(false)
  }, [script, mode, scope, pairDirection])

  useEffect(() => {
    if (mode !== 'listen' || answeredCorrectly) {
      return
    }

    playKanaAudio(question.correctItem.romaji, question.correctItem.char)
  }, [mode, question.correctItem.char, question.correctItem.romaji, answeredCorrectly])

  const handleAnswer = (answer: string) => {
    if (answeredCorrectly || wrongAnswers.includes(answer)) {
      return
    }

    if (isQuizAnswerCorrect(question, answer)) {
      setAnsweredCorrectly(true)

      if (mode !== 'listen') {
        const matchedItem =
          question.optionItems.find((item) => getOptionValue(item, mode) === answer) ??
          question.correctItem
        playKanaAudio(matchedItem.romaji, matchedItem.char)
      }
    } else {
      setWrongAnswers((previous) => [...previous, answer])
      playWrongAnswerSound()
    }
  }

  useEffect(() => {
    if (!answeredCorrectly) {
      return
    }

    const timer = window.setTimeout(() => {
      setQuestion(sessionRef.current.next())
      setWrongAnswers([])
      setAnsweredCorrectly(false)
    }, 1000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [answeredCorrectly])

  return {
    question,
    wrongAnswers,
    answeredCorrectly,
    handleAnswer,
  }
}
