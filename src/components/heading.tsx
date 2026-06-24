import { Typography, type TypographyProps } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

export type HeadingScale = 'display' | 'page' | 'section' | 'subsection';
type SemanticHeading = 'h1' | 'h2' | 'h3';

const HEADING_VARIANT: Record<HeadingScale, 'h3' | 'h4' | 'h5' | 'h6'> = {
  display: 'h3',
  page: 'h4',
  section: 'h5',
  subsection: 'h6',
};

const HEADING_SX: Record<HeadingScale, SxProps<Theme>> = {
  display: { fontWeight: 600, lineHeight: 1.2 },
  page: { fontWeight: 600, lineHeight: 1.25 },
  section: { fontWeight: 600, lineHeight: 1.3 },
  subsection: { fontWeight: 600, lineHeight: 1.35 },
};

const SCALE_FROM_COMPONENT: Record<SemanticHeading, HeadingScale> = {
  h1: 'page',
  h2: 'section',
  h3: 'subsection',
};

export type HeadingProps = Omit<TypographyProps, 'variant'> & {
  scale?: HeadingScale;
};

export function Heading({ scale, sx, component, ...props }: HeadingProps) {
  const inferredScale =
    typeof component === 'string' && component in SCALE_FROM_COMPONENT
      ? SCALE_FROM_COMPONENT[component as SemanticHeading]
      : undefined;
  const resolvedScale = scale ?? inferredScale ?? 'page';
  const mergedSx = sx
    ? ([HEADING_SX[resolvedScale], sx] as SxProps<Theme>)
    : HEADING_SX[resolvedScale];

  if (component) {
    return (
      <Typography
        component={component}
        variant={HEADING_VARIANT[resolvedScale]}
        sx={mergedSx}
        {...props}
      />
    );
  }

  return <Typography variant={HEADING_VARIANT[resolvedScale]} sx={mergedSx} {...props} />;
}
