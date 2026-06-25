import type { ComponentType } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import type { SvgIconProps } from '@mui/material';
import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';
import { interactiveSurfaceSx } from '@/theme/surfaces.ts';

export type NavCardItem = {
  to: string;
  title: string;
  description: string;
  /** A Japanese glyph shown as the card marker (takes priority over icon). */
  symbol?: string;
  icon?: ComponentType<SvgIconProps>;
};

type NavCardGridProps = {
  items: NavCardItem[];
  titleComponent?: 'h2' | 'h3';
};

/** Responsive 2-column grid of clickable cards linking to a route. */
export function NavCardGrid({ items, titleComponent = 'h2' }: NavCardGridProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: 2
      }}
    >
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.to} elevation={0} sx={[interactiveSurfaceSx, { height: '100%' }]}>
            <CardActionArea
              component={RouterLink}
              to={item.to}
              sx={{ height: '100%', alignItems: 'stretch' }}
            >
              <CardContent>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{ display: 'inline-flex', lineHeight: 1 }}
                  >
                    {item.symbol}
                    {item.symbol == null && Icon && <Icon fontSize="inherit" />}
                  </Typography>
                  <Typography variant="h6" component={titleComponent} sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
}
