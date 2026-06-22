import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import {
  Box,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { playKanaAudio } from '@/utils/kana-audio.ts'
import { KanaDisplay } from '@/components/kana-display.tsx'
import { useTranslation } from '@/i18n/use-translation.ts'
import { getChartSectionLabels } from '@/i18n/translations.ts'

export type AlphabetCell = {
  char: string
  romaji: string
  yoonBase?: string
  yoonSuffix?: string
}

export type AlphabetChartRow = {
  seion: (AlphabetCell | null)[]
  dakuten?: (AlphabetCell | null)[]
  handakuten?: (AlphabetCell | null)[]
}

type VoicedCell = {
  dakuten: AlphabetCell | null
  handakuten: AlphabetCell | null
}

type DisplayRow = {
  seion: (AlphabetCell | null)[]
  voiced: VoicedCell[]
  tall: boolean
}

function toDisplayRows(rows: AlphabetChartRow[]): DisplayRow[] {
  return rows.map((row) => ({
    seion: row.seion,
    voiced: row.seion.map((_, index) => ({
      dakuten: row.dakuten?.[index] ?? null,
      handakuten: row.handakuten?.[index] ?? null,
    })),
    tall: Boolean(row.handakuten),
  }))
}

const DESKTOP_CELL_SIZE = 90
const MOBILE_CELL_SIZE = 56

function getCellSize(compact: boolean) {
  return compact ? MOBILE_CELL_SIZE : DESKTOP_CELL_SIZE
}

function getRowHeight(tall: boolean, cellSize: number) {
  return tall ? cellSize * 2 : cellSize
}

function getCellSx(
  tall: boolean,
  isLastRow: boolean,
  isLastCol: boolean,
  cellSize: number,
  columnCount: number,
) {
  const height = getRowHeight(tall, cellSize)

  return {
    width: `${100 / columnCount}%`,
    height,
    minHeight: height,
    p: { xs: 0.5, md: 1 },
    verticalAlign: 'middle' as const,
    boxSizing: 'border-box' as const,
    borderTop: 0,
    borderLeft: 0,
    borderRight: isLastCol ? 0 : '1px solid',
    borderBottom: isLastRow ? 0 : '1px solid',
    borderColor: 'divider',
  }
}

function hasAnyCell(cells: (AlphabetCell | null)[] | undefined) {
  return cells?.some((cell) => cell !== null) ?? false
}

function hasVoicedContent(row: DisplayRow) {
  return row.voiced.some((cell) => cell.dakuten || cell.handakuten)
}

function rowIsTall(row: DisplayRow, variant: 'seion' | 'voiced', isMobileChart: boolean) {
  if (variant === 'seion') {
    return !isMobileChart && row.tall
  }

  return row.tall
}

function ChartCell({ cell, compact = false }: { cell: AlphabetCell; compact?: boolean }) {
  return (
    <>
      <KanaDisplay cell={cell} variant="chart" compact={compact} />
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', lineHeight: 1.1, fontSize: compact ? 13 : 14 }}
      >
        {cell.romaji}
      </Typography>
    </>
  )
}

function PlayableChartCell({ cell, compact = false }: { cell: AlphabetCell; compact?: boolean }) {
  const { t } = useTranslation()
  const handlePlay = () => playKanaAudio(cell.romaji, cell.char)

  return (
    <Box
      className="playable-cell"
      onClick={handlePlay}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
        cursor: 'pointer',
        '&:hover .speaker-button': { opacity: 1 },
        '&:focus-within .speaker-button': { opacity: 1 },
        '@media (hover: none)': {
          '& .speaker-button': { opacity: 0.85 },
        },
      }}
    >
      <ChartCell cell={cell} compact={compact} />
      <IconButton
        className="speaker-button"
        size="small"
        aria-label={t('chart.playAudio', { char: cell.char, romaji: cell.romaji })}
        onClick={(event) => {
          event.stopPropagation()
          handlePlay()
        }}
        sx={{
          position: 'absolute',
          right: 0,
          bottom: { xs: 0, md: 4 },
          p: { xs: 0.25, md: 1 },
          opacity: 0,
          transition: 'opacity 0.15s',
          '&:focus-visible': {
            opacity: 1,
          },
        }}
      >
        <VolumeUpIcon sx={{ fontSize: compact ? 14 : 20 }} />
      </IconButton>
    </Box>
  )
}

function VoicedChartCell({
  cell,
  tall,
  cellSize,
  compact,
}: {
  cell: VoicedCell
  tall: boolean
  cellSize: number
  compact: boolean
}) {
  const voicedCompact = compact || Boolean(cell.dakuten && cell.handakuten)
  const innerHeight = getRowHeight(tall, cellSize) - (compact ? 8 : 16)

  return (
    <Box
      sx={{
        height: innerHeight,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: tall ? 0.5 : voicedCompact ? 0.25 : 0,
        width: '100%',
      }}
    >
      {cell.dakuten && (
        <Box sx={{ flex: 1, width: '100%', minHeight: 0 }}>
          <PlayableChartCell cell={cell.dakuten} compact={voicedCompact} />
        </Box>
      )}
      {cell.handakuten && (
        <Box sx={{ flex: 1, width: '100%', minHeight: 0 }}>
          <PlayableChartCell cell={cell.handakuten} compact={voicedCompact} />
        </Box>
      )}
    </Box>
  )
}

function BaseChartCell({
  cell,
  tall,
  cellSize,
  compact,
}: {
  cell: AlphabetCell | null
  tall: boolean
  cellSize: number
  compact: boolean
}) {
  return (
    <Box
      sx={{
        height: getRowHeight(tall, cellSize) - (compact ? 8 : 16),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {cell && <PlayableChartCell cell={cell} compact={compact} />}
    </Box>
  )
}

function AlphabetChartTable({
  rows,
  variant,
  hideEmptyRows = false,
}: {
  rows: DisplayRow[]
  variant: 'seion' | 'voiced'
  hideEmptyRows?: boolean
}) {
  const theme = useTheme()
  const compact = useMediaQuery(theme.breakpoints.down('md'))
  const isMobileChart = useMediaQuery(theme.breakpoints.down('lg'))
  const cellSize = getCellSize(compact)
  const columnCount = rows[0]?.seion.length ?? 5
  const tableRows = hideEmptyRows
    ? rows.filter((row) => (variant === 'seion' ? hasAnyCell(row.seion) : hasVoicedContent(row)))
    : rows

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: 'none',
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
    >
      <Table
        sx={{
          tableLayout: 'fixed',
          width: '100%',
          minWidth: columnCount * cellSize,
          borderCollapse: 'collapse',
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <TableBody>
          {tableRows.map((row, rowIndex) => {
            const tall = rowIsTall(row, variant, isMobileChart)
            const cells = variant === 'seion' ? row.seion : row.voiced

            return (
              <TableRow
                key={`${variant}-${rowIndex}`}
                sx={{ height: getRowHeight(tall, cellSize) }}
              >
                {cells.map((cell, colIndex) => (
                  <TableCell
                    key={`${variant}-${rowIndex}-${colIndex}`}
                    align="center"
                    sx={getCellSx(
                      tall,
                      rowIndex === tableRows.length - 1,
                      colIndex === cells.length - 1,
                      cellSize,
                      columnCount,
                    )}
                  >
                    {variant === 'seion' ? (
                      <BaseChartCell
                        cell={cell as AlphabetCell | null}
                        tall={tall}
                        cellSize={cellSize}
                        compact={compact}
                      />
                    ) : (
                      <VoicedChartCell
                        cell={cell as VoicedCell}
                        tall={tall}
                        cellSize={cellSize}
                        compact={compact}
                      />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

type AlphabetChartPageProps = {
  title: string
  description: string
  chartRows: AlphabetChartRow[]
  yoonChartRows: AlphabetChartRow[]
}

const chartSectionHeadingSx = {
  mb: 1,
  minHeight: 20,
  fontWeight: 600,
  fontSize: { xs: '1rem', md: '1.125rem' },
  color: 'text.secondary',
} as const

function ChartSectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="subtitle1" component="h3" sx={chartSectionHeadingSx}>
      {children}
    </Typography>
  )
}

function ChartSection({ chartRows }: { chartRows: AlphabetChartRow[] }) {
  const theme = useTheme()
  const { t } = useTranslation()
  const sectionLabels = getChartSectionLabels(t)
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))
  const displayRows = toDisplayRows(chartRows)

  if (isMobile) {
    const hasVoiced = displayRows.some(hasVoicedContent)

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
        <Box sx={{ width: '100%' }}>
          <ChartSectionHeading>{sectionLabels.seion}</ChartSectionHeading>
          <AlphabetChartTable rows={displayRows} variant="seion" hideEmptyRows />
        </Box>

        {hasVoiced && (
          <Box sx={{ width: '100%' }}>
            <ChartSectionHeading>{sectionLabels.voiced}</ChartSectionHeading>
            <AlphabetChartTable rows={displayRows} variant="voiced" hideEmptyRows />
          </Box>
        )}
      </Box>
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'flex-start',
        width: '100%',
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
        <ChartSectionHeading>{sectionLabels.seion}</ChartSectionHeading>
        <AlphabetChartTable rows={displayRows} variant="seion" />
      </Box>

      <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
        <ChartSectionHeading>{sectionLabels.voiced}</ChartSectionHeading>
        <AlphabetChartTable rows={displayRows} variant="voiced" />
      </Box>
    </Box>
  )
}

export function AlphabetChartPage({
  title,
  description,
  chartRows,
  yoonChartRows,
}: AlphabetChartPageProps) {
  const { t } = useTranslation()
  const sectionLabels = getChartSectionLabels(t)

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, px: { xs: 1.5, sm: 3 } }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 600 }}
      >
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: { xs: 2, md: 3 } }}>
        {description}
      </Typography>

      <ChartSection chartRows={chartRows} />

      <Box sx={{ mt: { xs: 3, md: 4 } }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ mb: 2, fontSize: { xs: '1.375rem', md: '1.625rem' }, fontWeight: 600 }}
        >
          {sectionLabels.yoon}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {t('chart.yoonDescription')}
        </Typography>
        <ChartSection chartRows={yoonChartRows} />
      </Box>
    </Container>
  )
}
