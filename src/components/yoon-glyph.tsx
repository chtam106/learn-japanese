import { Box, Typography } from '@mui/material';
import { FONT_FAMILY_JP } from '@/theme/fonts.ts';

type YoonGlyphProps = {
  base: string;
  suffix: string;
  compact?: boolean;
  large?: boolean;
};

export function YoonGlyph({ base, suffix, compact = false, large = false }: YoonGlyphProps) {
  const baseVariant = large ? 'h2' : compact ? 'h6' : 'h4';
  const suffixSize = large ? '1.35rem' : compact ? '0.55rem' : '0.95rem';
  const suffixMb = large ? '0.18em' : compact ? '0.08em' : '0.12em';

  const kanaFontSx = { fontFamily: FONT_FAMILY_JP, fontWeight: 400, lineHeight: 1 } as const;

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        lineHeight: 1,
        fontFamily: FONT_FAMILY_JP
      }}
    >
      <Typography component="span" variant={baseVariant} sx={kanaFontSx}>
        {base}
      </Typography>
      <Typography
        component="span"
        sx={{
          ...kanaFontSx,
          fontSize: suffixSize,
          mb: suffixMb,
          ml: '-0.06em'
        }}
      >
        {suffix}
      </Typography>
    </Box>
  );
}
