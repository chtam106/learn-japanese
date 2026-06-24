import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import type { AlphabetCell } from '@/constants/alphabet-charts.ts';
import {
  hiraganaChartRows,
  hiraganaYoonChartRows,
  katakanaChartRows,
  katakanaYoonChartRows
} from '@/constants/alphabet-charts.ts';
import type { AlphabetChartRow } from '@/pages/alphabet/alphabet-chart.tsx';
import { Heading } from '@/components/heading.tsx';
import { HintText } from '@/components/hint-text.tsx';
import { KanaDisplay } from '@/components/kana-display.tsx';
import { PageContainer } from '@/components/page-container.tsx';
import { playKanaAudio } from '@/utils/kana-audio.ts';
import { routes } from '@/constants/routes.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { getChartSectionLabels } from '@/i18n/translations.ts';

type CombinedCell = {
  romaji: string;
  hiragana: AlphabetCell;
  katakana: AlphabetCell;
};

type GridRow = {
  label: string;
  cells: (CombinedCell | null)[];
};

const VOWEL_HEADERS = ['a', 'i', 'u', 'e', 'o'];
const YOON_HEADERS = ['ya', 'yu', 'yo'];

function firstCell(cells: (AlphabetCell | null)[]) {
  return cells.find((cell): cell is AlphabetCell => cell !== null);
}

function consonantLabel(cells: (AlphabetCell | null)[]) {
  const cell = firstCell(cells);
  if (!cell) return '';
  const match = cell.romaji.toLowerCase().match(/^[^aeiou]+/);
  return match ? match[0] : '–';
}

function zipCells(
  hiraganaCells: (AlphabetCell | null)[],
  katakanaCells: (AlphabetCell | null)[]
): (CombinedCell | null)[] {
  return hiraganaCells.map((hiragana, index) => {
    const katakana = katakanaCells[index] ?? null;
    if (!hiragana || !katakana) return null;
    return { romaji: hiragana.romaji, hiragana, katakana };
  });
}

type SectionKey = 'seion' | 'dakuten' | 'handakuten';

function pairRowsForSection(
  hiraganaRows: AlphabetChartRow[],
  katakanaRows: AlphabetChartRow[],
  section: SectionKey
): GridRow[] {
  const rows: GridRow[] = [];

  hiraganaRows.forEach((hiraganaRow, index) => {
    const katakanaRow = katakanaRows[index];
    const hiraganaCells = hiraganaRow[section];
    const katakanaCells = katakanaRow?.[section];
    if (!hiraganaCells || !katakanaCells || !firstCell(hiraganaCells)) return;

    rows.push({
      label: consonantLabel(hiraganaCells),
      cells: zipCells(hiraganaCells, katakanaCells)
    });
  });

  return rows;
}

function CombinedKanaCell({ cell, compact }: { cell: CombinedCell; compact: boolean }) {
  const { t } = useTranslation();
  const handlePlay = () => playKanaAudio(cell.romaji, cell.hiragana.char);

  return (
    <Box
      role="button"
      tabIndex={0}
      aria-label={t('chart.playAudio', { char: cell.hiragana.char, romaji: cell.romaji })}
      onClick={handlePlay}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handlePlay();
        }
      }}
      sx={{
        height: '100%',
        minHeight: { xs: 56, md: 72 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.25,
        borderRadius: 2,
        cursor: 'pointer',
        bgcolor: 'action.hover',
        transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
        '&:hover': {
          bgcolor: 'action.selected',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)'
        },
        '&:focus-visible': {
          outline: '2px solid',
          outlineColor: 'primary.main',
          outlineOffset: 2
        }
      }}
    >
      <Stack
        direction="row"
        spacing={compact ? 0.5 : 1}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <KanaDisplay cell={cell.hiragana} variant="chart" compact />
        <KanaDisplay cell={cell.katakana} variant="chart" compact />
      </Stack>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ lineHeight: 1.1, fontSize: compact ? 13 : 15 }}
      >
        {cell.romaji}
      </Typography>
    </Box>
  );
}

function CombinedGrid({ rows, headers }: { rows: GridRow[]; headers: string[] }) {
  const theme = useTheme();
  const compact = useMediaQuery(theme.breakpoints.down('md'));
  const columnCount = headers.length;

  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `minmax(28px, auto) repeat(${columnCount}, minmax(56px, 1fr))`,
          gap: 0.5,
          minWidth: 'min-content'
        }}
      >
        <Box />
        {headers.map((header) => (
          <Typography
            key={header}
            align="center"
            sx={{
              fontWeight: 700,
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.2rem' },
              pb: 0.5
            }}
          >
            {header}
          </Typography>
        ))}

        {rows.map((row, rowIndex) => (
          <Box key={`${row.label}-${rowIndex}`} sx={{ display: 'contents' }}>
            <Typography
              sx={{
                fontWeight: 700,
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.2rem' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {row.label}
            </Typography>
            {row.cells.map((cell, colIndex) => (
              <Box key={`${row.label}-${rowIndex}-${colIndex}`}>
                {cell && <CombinedKanaCell cell={cell} compact={compact} />}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function ChartBlock({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Heading
        component="h2"
        sx={{ mb: 1.5, fontSize: { xs: '1.125rem', md: '1.25rem' }, fontWeight: 600 }}
      >
        {heading}
      </Heading>
      {children}
    </Box>
  );
}

function CombinedChartPage() {
  const { t } = useTranslation();
  const sectionLabels = getChartSectionLabels(t);

  const seionRows = pairRowsForSection(hiraganaChartRows, katakanaChartRows, 'seion');
  const voicedRows = [
    ...pairRowsForSection(hiraganaChartRows, katakanaChartRows, 'dakuten'),
    ...pairRowsForSection(hiraganaChartRows, katakanaChartRows, 'handakuten')
  ];
  const yoonRows = pairRowsForSection(hiraganaYoonChartRows, katakanaYoonChartRows, 'seion').map(
    (row) => ({ label: row.label, cells: row.cells.filter((cell) => cell !== null) })
  );

  return (
    <PageContainer>
      <Button
        component={RouterLink}
        to={routes.alphabet.index}
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2, ml: -1 }}
      >
        {t('common.back')}
      </Button>

      <Heading component="h1" gutterBottom>
        {t('nav.combined')}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
        {t('alphabet.combinedPageDescription')}
      </Typography>
      <HintText sx={{ mt: 1.5, mb: { xs: 3, md: 4 } }}>{t('alphabet.tapHint')}</HintText>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 } }}>
        <ChartBlock heading={sectionLabels.seion}>
          <CombinedGrid rows={seionRows} headers={VOWEL_HEADERS} />
        </ChartBlock>

        <ChartBlock heading={sectionLabels.voiced}>
          <CombinedGrid rows={voicedRows} headers={VOWEL_HEADERS} />
        </ChartBlock>

        <ChartBlock heading={sectionLabels.yoon}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {t('chart.yoonDescription')}
          </Typography>
          <CombinedGrid rows={yoonRows} headers={YOON_HEADERS} />
        </ChartBlock>
      </Box>
    </PageContainer>
  );
}

export default CombinedChartPage;
