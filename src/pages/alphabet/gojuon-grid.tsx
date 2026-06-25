import type { ReactNode } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Heading } from '@/components/heading';
import type { GridRow } from '@/pages/alphabet/gojuon.ts';

type CellButtonProps = {
  ariaLabel: string;
  onActivate: () => void;
  romaji: string;
  compact: boolean;
  children: ReactNode;
};

/** Interactive chart cell: a tap/keyboard target that plays audio, with romaji below. */
export function CellButton({ ariaLabel, onActivate, romaji, compact, children }: CellButtonProps) {
  return (
    <Box
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onClick={onActivate}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onActivate();
        }
      }}
      sx={{
        height: '100%',
        minHeight: { xs: 52, md: 68 },
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
      {children}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ lineHeight: 1.1, fontSize: compact ? 13 : 15 }}
      >
        {romaji}
      </Typography>
    </Box>
  );
}

const HEADER_LABEL_SX = {
  fontWeight: 500,
  color: 'text.secondary',
  fontSize: { xs: '1rem', md: '1.2rem' }
} as const;

type GojuonGridProps<T> = {
  rows: GridRow<T>[];
  headers: string[];
  renderCell: (cell: T, compact: boolean) => ReactNode;
  minCellWidth?: number;
  maxCellWidth?: number;
};

export function GojuonGrid<T>({
  rows,
  headers,
  renderCell,
  minCellWidth = 44,
  maxCellWidth = 96
}: GojuonGridProps<T>) {
  const theme = useTheme();
  const compact = useMediaQuery(theme.breakpoints.down('md'));
  const columnCount = headers.length;

  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `28px repeat(${columnCount}, minmax(${minCellWidth}px, ${maxCellWidth}px))`,
          gap: 0.5,
          width: 'fit-content',
          maxWidth: '100%'
        }}
      >
        <Box />
        {headers.map((header) => (
          <Typography key={header} align="center" sx={{ ...HEADER_LABEL_SX, pb: 0.5 }}>
            {header}
          </Typography>
        ))}

        {rows.map((row, rowIndex) => (
          <Box key={`${row.label}-${rowIndex}`} sx={{ display: 'contents' }}>
            <Typography
              sx={{
                ...HEADER_LABEL_SX,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {row.label}
            </Typography>
            {row.cells.map((cell, colIndex) => (
              <Box key={`${row.label}-${rowIndex}-${colIndex}`}>
                {cell && renderCell(cell, compact)}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

type ChartBlockProps = {
  heading: string;
  children: ReactNode;
};

export function ChartBlock({ heading, children }: ChartBlockProps) {
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
