import { Suspense, lazy, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Brand } from '@/components/brand.tsx'
import { PageMeta } from '@/components/page-meta.tsx'
import { SiteFooter } from '@/components/site-footer.tsx'
import { useTranslation } from '@/i18n/use-translation.ts'
import { loadJapaneseUiFont } from '@/theme/fonts.ts'

const drawerWidth = 320
const AppDrawerContent = lazy(() => import('@/components/app-drawer-content.tsx'))
const AudioSettings = lazy(() =>
  import('@/components/audio-settings.tsx').then((module) => ({ default: module.AudioSettings })),
)
const LanguageSwitcher = lazy(() =>
  import('@/components/language-switcher.tsx').then((module) => ({
    default: module.LanguageSwitcher,
  })),
)

function AppLayout() {
  const location = useLocation()
  const theme = useTheme()
  const { t } = useTranslation()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const shouldRenderDrawerContent = !isMobile || mobileOpen

  useEffect(() => {
    if (location.pathname !== '/') {
      void loadJapaneseUiFont()
    }
  }, [location.pathname])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <PageMeta />

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (muiTheme) => muiTheme.zIndex.drawer + 1,
          color: 'text.primary',
          bgcolor: (muiTheme) => alpha(muiTheme.palette.background.paper, 0.85),
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)',
        }}
      >
        <Toolbar
          sx={{
            gap: { xs: 1.5, md: 0 },
            px: { xs: 2, sm: 4, md: 0 },
            alignItems: 'center',
          }}
        >
          {isMobile ? (
            <IconButton
              edge="start"
              onClick={() => setMobileOpen((previous) => !previous)}
              aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            <Box sx={{ width: drawerWidth, flexShrink: 0 }} aria-hidden />
          )}
          <Box
            sx={{
              flexGrow: 1,
              minWidth: 0,
              width: '100%',
              maxWidth: { md: 1200 },
              mx: { md: 'auto' },
            }}
          >
            <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', px: { md: 6 } }}>
              <Brand showTagline={false} showLogo={false} />
              <Box sx={{ flexGrow: 1 }} />
              <Stack direction="row" spacing={0.5}>
                <Suspense fallback={<Box sx={{ width: 80, height: 40 }} aria-hidden />}>
                  <AudioSettings />
                  <LanguageSwitcher />
                </Suspense>
              </Stack>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        aria-label={t('nav.mainNavigation')}
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? mobileOpen : true}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              border: 'none',
              overflow: 'hidden',
              boxShadow: '1px 0 2px rgba(0, 0, 0, 0.06), 2px 0 8px rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          {shouldRenderDrawerContent ? (
            <Suspense
              fallback={
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Toolbar />
                </Box>
              }
            >
              <AppDrawerContent onNavigate={() => setMobileOpen(false)} />
            </Suspense>
          ) : null}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toolbar />
        <Outlet />
        <SiteFooter />
      </Box>
    </Box>
  )
}

export default AppLayout
