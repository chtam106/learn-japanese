import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { KANA_STROKE_VIEWBOX, kanaStrokes } from '@/constants/kana-strokes.ts';

const STROKE_DURATION = 0.7; // seconds to draw one stroke

const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

type StrokeProps = {
  order: number;
};

const Stroke = styled('path', {
  shouldForwardProp: (prop) => prop !== 'order'
})<StrokeProps>(({ order, theme }) => ({
  fill: 'none',
  stroke: theme.palette.primary.main,
  strokeWidth: 5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeDasharray: 1,
  strokeDashoffset: 1,
  // Draw once and hold the finished stroke.
  animation: `${draw} ${STROKE_DURATION}s linear forwards`,
  animationDelay: `${order * STROKE_DURATION}s`
}));

type KanaStrokeOrderProps = {
  char: string;
  /** CSS width/height; accepts a responsive object (e.g. `{ xs: 40, sm: 48 }`). */
  size?: number | { xs?: number; sm?: number; md?: number };
  ariaLabel?: string;
};

/**
 * Animates a kana stroke by stroke (KanjiVG paths), drawing once then holding.
 * Click or press Enter/Space to replay. Renders nothing when the character has
 * no stroke data (callers should fall back to a static glyph).
 */
export function KanaStrokeOrder({ char, size = 48, ariaLabel }: KanaStrokeOrderProps) {
  const strokes = kanaStrokes[char];
  const [runId, setRunId] = useState(0);
  const animatingRef = useRef(true);
  const totalMs = (strokes?.length ?? 0) * STROKE_DURATION * 1000;

  // Mark the run as animating, then clear the flag once the strokes finish.
  useEffect(() => {
    animatingRef.current = true;
    const timer = window.setTimeout(() => {
      animatingRef.current = false;
    }, totalMs);

    return () => window.clearTimeout(timer);
  }, [runId, totalMs]);

  if (!strokes) {
    return null;
  }

  const replay = () => {
    // Ignore replays while the current animation is still drawing.
    if (animatingRef.current) {
      return;
    }

    setRunId((previous) => previous + 1);
  };

  return (
    <Box
      key={runId}
      component="svg"
      lang="ja"
      viewBox={`0 0 ${KANA_STROKE_VIEWBOX} ${KANA_STROKE_VIEWBOX}`}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel ?? char}
      onClick={replay}
      // Prevent focus (and its ring) on pointer clicks; keyboard focus still works.
      onMouseDown={(event) => event.preventDefault()}
      onKeyDown={(event: KeyboardEvent<SVGSVGElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          replay();
        }
      }}
      sx={{
        width: size,
        height: size,
        display: 'block',
        cursor: 'pointer',
        borderRadius: 1,
        '&:focus-visible': {
          outline: '2px solid',
          outlineColor: 'primary.main',
          outlineOffset: 2
        }
      }}
    >
      {strokes.map((d, index) => (
        <path
          key={`guide-${index}`}
          d={d}
          fill="none"
          stroke="rgba(0, 0, 0, 0.1)"
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {strokes.map((d, index) => (
        <Stroke key={`stroke-${index}`} d={d} order={index} pathLength={1} />
      ))}
    </Box>
  );
}

export default KanaStrokeOrder;
