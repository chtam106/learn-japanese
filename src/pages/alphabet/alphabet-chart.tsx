import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Typography } from '@mui/material';
import { Heading } from '@/components/heading.tsx';
import { HintText } from '@/components/hint-text.tsx';
import { playKanaAudio } from '@/utils/kana-audio.ts';
import { KanaDisplay } from '@/components/kana-display.tsx';
import { PageContainer } from '@/components/page-container.tsx';
import { CellButton, ChartBlock, GojuonGrid } from '@/pages/alphabet/gojuon-grid.tsx';
import {
  VOWEL_HEADERS,
  YOON_HEADERS,
  consonantLabel,
  firstCell,
  getVoicedDescription,
  getYoonDescription,
  type AlphabetCell,
  type AlphabetChartRow,
  type GridRow
} from '@/pages/alphabet/gojuon.ts';
import { routes } from '@/constants/routes.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { getChartSectionLabels } from '@/i18n/translations.ts';

export type { AlphabetCell, AlphabetChartRow } from '@/pages/alphabet/gojuon.ts';

function toSeionRows(rows: AlphabetChartRow[]): GridRow<AlphabetCell>[] {
  return rows
    .filter((row) => firstCell(row.seion))
    .map((row) => ({ label: consonantLabel(row.seion), cells: row.seion }));
}

/** Dakuten rows (g/z/d/b) followed by handakuten rows (p), each a full row. */
function toVoicedRows(rows: AlphabetChartRow[]): GridRow<AlphabetCell>[] {
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

  return (
    <CellButton
      ariaLabel={t('chart.playAudio', { char: cell.char, romaji: cell.romaji })}
      onActivate={() => playKanaAudio(cell.romaji, cell.char)}
      romaji={cell.romaji}
      compact={compact}
    >
      <KanaDisplay cell={cell} variant="chart" compact={compact} />
    </CellButton>
  );
}

const renderKanaCell = (cell: AlphabetCell, compact: boolean) => (
  <PlayableCell cell={cell} compact={compact} />
);

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
      <HintText sx={{ mt: 1.5, mb: { xs: 3, md: 4 } }}>{t('alphabet.tapHint')}</HintText>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 } }}>
        <ChartBlock heading={sectionLabels.seion}>
          <GojuonGrid rows={seionRows} headers={VOWEL_HEADERS} renderCell={renderKanaCell} />
        </ChartBlock>

        <ChartBlock heading={sectionLabels.voiced}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {getVoicedDescription(t, chartRows)}
          </Typography>
          <GojuonGrid rows={voicedRows} headers={VOWEL_HEADERS} renderCell={renderKanaCell} />
        </ChartBlock>

        <ChartBlock heading={sectionLabels.yoon}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {getYoonDescription(t, yoonChartRows)}
          </Typography>
          <GojuonGrid rows={yoonRows} headers={YOON_HEADERS} renderCell={renderKanaCell} />
        </ChartBlock>
      </Box>
    </PageContainer>
  );
}
