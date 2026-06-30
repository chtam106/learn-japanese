import { Box, Button, Typography } from '@mui/material';

function SentryTestPage() {
  const handleThrow = () => {
    throw new Error('[Sentry test] Render error from /sentry-test');
  };
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Sentry test
      </Typography>
      <Button variant="contained" color="error" onClick={handleThrow}>
        Throw error
      </Button>
    </Box>
  );
}

export default SentryTestPage;
