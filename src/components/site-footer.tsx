import { Box, Container, Typography } from '@mui/material';

// The footer copy stays in English regardless of the selected locale.
const FOOTER_VIBE = 'Designed by CHT, coded with AI.';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        px: 2,
        textAlign: 'center',
        boxShadow: '0 -1px 2px rgba(0, 0, 0, 0.06), 0 -2px 8px rgba(0, 0, 0, 0.04)'
      }}
    >
      <Container maxWidth="md" disableGutters>
        <Typography variant="body2" color="text.secondary">
          {FOOTER_VIBE}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
          © {year} Langwish · All rights not reserved.
        </Typography>
      </Container>
    </Box>
  );
}
