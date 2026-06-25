import { Box, Container, Link, Typography } from '@mui/material';

// The footer copy stays in English regardless of the selected locale.
const FOOTER_VIBE = 'Designed by CHT, coded with AI.';
const CONTACT_EMAIL = 'chtam106@gmail.com';
const CONTACT_HREF = `mailto:${CONTACT_EMAIL}?subject=Langwish`;

export function Footer() {
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
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          <Link href={CONTACT_HREF} color="primary" underline="hover">
            Contact us
          </Link>
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
          © {year} Langwish · All rights not reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
