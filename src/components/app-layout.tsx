import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { AudioSettings } from '@/components/audio-settings.tsx'
import { Brand } from '@/components/brand.tsx'
import { LanguageSwitcher } from '@/components/language-switcher.tsx'
import { PageMeta } from '@/components/page-meta.tsx'
import { SiteFooter } from '@/components/site-footer.tsx'
import { useTranslation } from '@/i18n/use-translation.ts'
import { isNavGroupActive, navGroups, type NavItem } from '@/constants/nav-items.ts'

const drawerWidth = 320

function NavItemIcon({ item }: { item: Pick<NavItem, 'icon' | 'symbol'> }) {
  const Icon = item.icon

  if (Icon) {
    return <Icon fontSize="small" />
  }

  return (
    <Typography variant="body1" component="span" sx={{ fontWeight: 600 }}>
      {item.symbol}
    </Typography>
  )
}

function AppLayout() {
  const location = useLocation()
  const theme = useTheme()
  const { locale, t } = useTranslation()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      navGroups.map((group) => [group.path, isNavGroupActive(group, location.pathname)]),
    ),
  )

  const toggleGroup = (path: string) => {
    setExpandedGroups((previous) => ({
      ...previous,
      [path]: !previous[path],
    }))
  }

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Toolbar />

      <List
        className="thin-scrollbar"
        sx={(muiTheme) => ({
          px: 1,
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          minHeight: 0,
          '& > .nav-group-item + .nav-group-item': {
            borderTop: `1px solid ${alpha(
              muiTheme.palette.text.primary,
              muiTheme.palette.mode === 'light' ? 0.08 : 0.16,
            )}`,
            mt: 0.5,
            pt: 0.5,
          },
        })}
      >
        {navGroups.map((group) => {
          const groupLabel = group.label ? group.label[locale] : t(group.labelKey ?? '')
          const isExpanded = expandedGroups[group.path] ?? false
          const GroupIcon = group.icon
          const hasChildren = group.children.length > 0
          const isAlphabetGroup = group.labelKey === 'nav.alphabet'

          const isGroupHighlighted = location.pathname === group.path

          return (
            <Box key={group.path} className="nav-group-item">
              {hasChildren ? (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 1,
                    bgcolor: 'transparent',
                    '&:hover': { bgcolor: 'transparent' },
                  }}
                >
                  <ListItemButton
                    component={NavLink}
                    to={group.path}
                    selected={isGroupHighlighted}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      flex: 1,
                      borderRadius: 1,
                      bgcolor: 'transparent',
                      '&:hover': {
                        bgcolor: 'transparent',
                        '& .MuiListItemText-primary': { color: 'primary.main' },
                        '& .MuiListItemIcon-root': { color: 'primary.main' },
                      },
                      '&.Mui-selected': {
                        bgcolor: 'transparent',
                        '& .MuiListItemText-primary': { color: 'primary.main' },
                        '& .MuiListItemIcon-root': { color: 'primary.main' },
                        '&:hover': { bgcolor: 'transparent' },
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {GroupIcon ? <GroupIcon fontSize="small" /> : null}
                    </ListItemIcon>
                    <ListItemText primary={groupLabel} />
                  </ListItemButton>

                  <IconButton
                    size="small"
                    aria-label={
                      isExpanded
                        ? t('nav.collapse', { label: groupLabel })
                        : t('nav.expand', { label: groupLabel })
                    }
                    aria-expanded={isExpanded}
                    onClick={() => toggleGroup(group.path)}
                    sx={{
                      mr: 0.5,
                      bgcolor: 'transparent',
                      '&:hover': { bgcolor: 'transparent' },
                    }}
                  >
                    {isExpanded ? (
                      <ExpandLessIcon fontSize="small" />
                    ) : (
                      <ExpandMoreIcon fontSize="small" />
                    )}
                  </IconButton>
                </Box>
              ) : (
                <ListItemButton
                  component={NavLink}
                  to={group.path}
                  selected={isGroupHighlighted}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: 'transparent',
                      '& .MuiListItemText-primary': { color: 'primary.main' },
                      '& .MuiListItemIcon-root': { color: 'primary.main' },
                    },
                    '&.Mui-selected': {
                      bgcolor: 'transparent',
                      '& .MuiListItemText-primary': { color: 'primary.main' },
                      '& .MuiListItemIcon-root': { color: 'primary.main' },
                    },
                    '&.Mui-selected:hover': { bgcolor: 'transparent' },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {GroupIcon ? <GroupIcon fontSize="small" /> : null}
                  </ListItemIcon>
                  <ListItemText primary={groupLabel} />
                </ListItemButton>
              )}

              {hasChildren && (
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <List
                    component="div"
                    disablePadding
                    sx={(muiTheme) => ({
                      mt: 0.5,
                      pl: 0,
                      '& .MuiListItemButton-root': {
                        position: 'relative',
                      },
                      '& .MuiListItemButton-root + .MuiListItemButton-root::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: isAlphabetGroup
                          ? `calc(${muiTheme.spacing(7)} + 32px)`
                          : `calc(${muiTheme.spacing(2)} + 40px)`,
                        right: muiTheme.spacing(1),
                        borderTop: `1px solid ${alpha(
                          muiTheme.palette.text.primary,
                          muiTheme.palette.mode === 'light' ? 0.08 : 0.16,
                        )}`,
                      },
                    })}
                  >
                    {group.children.map((child) => (
                      <ListItemButton
                        key={child.path}
                        component={NavLink}
                        to={child.path}
                        selected={
                          location.pathname === child.path ||
                          location.pathname.startsWith(`${child.path}/`)
                        }
                        onClick={() => setMobileOpen(false)}
                        sx={{
                          pl: isAlphabetGroup ? 7 : 2,
                          py: 0.5,
                          borderRadius: 1,
                          minHeight: 56,
                          '&:hover': {
                            bgcolor: 'transparent',
                            '& .MuiListItemText-primary': { color: 'primary.main' },
                            '& .MuiListItemIcon-root': { color: 'primary.main' },
                          },
                          '&.Mui-selected': {
                            bgcolor: 'transparent',
                            '& .MuiListItemText-primary': { color: 'primary.main' },
                            '& .MuiListItemIcon-root': { color: 'primary.main' },
                          },
                          '&.Mui-selected:hover': { bgcolor: 'transparent' },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: isAlphabetGroup ? 32 : 40 }}>
                          <NavItemIcon item={child} />
                        </ListItemIcon>
                        <ListItemText
                          primary={child.label ? child.label[locale] : t(child.labelKey ?? '')}
                          slotProps={{
                            primary: {
                              variant: 'body2',
                              sx: {
                                lineHeight: 1.35,
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              },
                            },
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          )
        })}
      </List>
    </Box>
  )

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
                <AudioSettings />
                <LanguageSwitcher />
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
          {drawerContent}
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
