import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Heading } from '@/components/heading.tsx';
import { playKanaAudio } from '@/utils/kana-audio.ts';
import { KanaDisplay } from '@/components/kana-display.tsx';
import { PageContainer } from '@/components/page-container.tsx';
import { routes } from '@/constants/routes.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { getChartSectionLabels } from '@/i18n/translations.ts';

export type AlphabetCell = {
  char: string;
  romaji: string;
  yoonBase?: string;
  yoonSuffix?: string;
};

export type AlphabetChartRow = {
  seion: (AlphabetCell | null)[];
  dakuten?: (AlphabetCell | null)[];
  handakuten?: (AlphabetCell | null)[];
};

type GridRow = {
  label: string;
  cells: (AlphabetCell | null)[];
};

const VOWEL_HEADERS = ['a', 'i', 'u', 'e', 'o'];

function firstCell(cells: (AlphabetCell | null)[]) {
  return cells.find((cell): cell is AlphabetCell => cell !== null);
}

/** Leading consonant of a row, e.g. か→"k", さ→"s", あ→"–", きゃ→"ky". */
function consonantLabel(cells: (AlphabetCell | null)[]) {
  const cell = firstCell(cells);
  if (!cell) return '';
  const match = cell.romaji.toLowerCase().match(/^[^aeiou]+/);
  return match ? match[0] : '–';
}

function toSeionRows(rows: AlphabetChartRow[]): GridRow[] {
  return rows
    .filter((row) => firstCell(row.seion))
    .map((row) => ({ label: consonantLabel(row.seion), cells: row.seion }));
}

/** Dakuten rows (g/z/d/b) followed by handakuten rows (p), each a full row. */
function toVoicedRows(rows: AlphabetChartRow[]): GridRow[] {
  const dakuten = rows
    .filter((row) => row.dakuten && firstCell(row.dakuten))
    .map((row) => ({ label: consonantLabel(row.dakuten!), cells: row.dakuten! }));
  const handakuten = rows
    .filter((row) => row.handakuten && firstCell(row.handakuten))
    .map((row) => ({ label: consonantLabel(row.handakuten!), cells: row.handakuten! }));
  return [...dakuten, ...handakuten];
}

function PlayableCell({ cell, compact }: { cell: AlphabetCell; compact: boolean }) {
  const { t } = useTranslation();
  const handlePlay = () => playKanaAudio(cell.romaji, cell.char);

  return (
    <Box
      role="button"
      tabIndex={0}
      aria-label={t('chart.playAudio', { char: cell.char, romaji: cell.romaji })}
      onClick={handlePlay}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handlePlay();
        }
      }}
      sx={{
        height: '100%',
        minHeight: { xs: 52, md: 68 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
      <KanaDisplay cell={cell} variant="chart" compact={compact} />
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ lineHeight: 1.1, fontSize: compact ? 12 : 13 }}
      >
        {cell.romaji}
      </Typography>
    </Box>
  );
}

function GojuonGrid({ rows, headers }: { rows: GridRow[]; headers: string[] }) {
  const theme = useTheme();
  const compact = useMediaQuery(theme.breakpoints.down('md'));
  const columnCount = headers.length;

  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `minmax(28px, auto) repeat(${columnCount}, minmax(44px, 1fr))`,
          gap: 0.5,
          minWidth: 'min-content'
        }}
      >
        <Box />
        {headers.map((header) => (
          <Typography
            key={header}
            variant="caption"
            align="center"
            sx={{ fontWeight: 700, color: 'text.secondary', pb: 0.5 }}
          >
            {header}
          </Typography>
        ))}

        {rows.map((row, rowIndex) => (
          <Box key={`${row.label}-${rowIndex}`} sx={{ display: 'contents' }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {row.label}
            </Typography>
            {row.cells.map((cell, colIndex) => (
              <Box key={`${row.label}-${rowIndex}-${colIndex}`}>
                {cell && <PlayableCell cell={cell} compact={compact} />}
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

type AlphabetChartPageProps = {
  title: string;
  description: string;
  chartRows: AlphabetChartRow[];
  yoonChartRows: AlphabetChartRow[];
};

export function AlphabetChartPage({
  title,
  description,
  chartRows,
  yoonChartRows
}: AlphabetChartPageProps) {
  const { t } = useTranslation();
  const sectionLabels = getChartSectionLabels(t);

  const seionRows = toSeionRows(chartRows);
  const voicedRows = toVoicedRows(chartRows);

  const yoonRows = toSeionRows(yoonChartRows).map((row) => ({
    label: row.label,
    cells: row.cells.filter((cell) => cell !== null)
  }));
  const yoonHeaders = ['ya', 'yu', 'yo'];

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
        {title}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
        {description}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 3, md: 4 } }}>
        {t('alphabet.tapHint')}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 } }}>
        <ChartBlock heading={sectionLabels.seion}>
          <GojuonGrid rows={seionRows} headers={VOWEL_HEADERS} />
        </ChartBlock>

        <ChartBlock heading={sectionLabels.voiced}>
          <GojuonGrid rows={voicedRows} headers={VOWEL_HEADERS} />
        </ChartBlock>

        <ChartBlock heading={sectionLabels.yoon}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {t('chart.yoonDescription')}
          </Typography>
          <GojuonGrid rows={yoonRows} headers={yoonHeaders} />
        </ChartBlock>
      </Box>
    </PageContainer>
  );
}
