import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { ErrorBoundary } from '@/components/error-boundary';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Menu } from '@/components/menu';
import { PageMeta } from '@/components/page-meta';
import { loadJapaneseUiFont } from '@/theme/fonts.ts';

const drawerWidth = 320;

function AppLayout() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      void loadJapaneseUiFont();
    }
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <PageMeta />

      <Header
        drawerWidth={drawerWidth}
        isMobile={isMobile}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((previous) => !previous)}
      />

      <Menu
        drawerWidth={drawerWidth}
        isMobile={isMobile}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Toolbar />
        <ErrorBoundary key={location.pathname}>
          <Outlet />
        </ErrorBoundary>
        <Footer />
      </Box>
    </Box>
  );
}

export default AppLayout;
