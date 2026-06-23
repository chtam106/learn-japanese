import { useMemo, useState } from 'react'
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

function getGroupToggleKey(groupPath: string, pathname: string) {
  return `${groupPath}:${pathname}`
}

function AppLayout() {
  const location = useLocation()
  const theme = useTheme()
  const { locale, t } = useTranslation()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [groupToggleState, setGroupToggleState] = useState<Record<string, boolean>>({})

  const expandedGroups = useMemo(
    () =>
      Object.fromEntries(
        navGroups.map((group) => {
          const toggleKey = getGroupToggleKey(group.path, location.pathname)
          const toggled = groupToggleState[toggleKey]

          if (toggled !== undefined) {
            return [group.path, toggled]
          }

          return [group.path, isNavGroupActive(group, location.pathname)]
        }),
      ),
    [groupToggleState, location.pathname],
  )

  const toggleGroup = (path: string) => {
    const toggleKey = getGroupToggleKey(path, location.pathname)

    setGroupToggleState((previous) => ({
      ...previous,
      [toggleKey]: !expandedGroups[path],
    }))
  }

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Toolbar />

      <List sx={{ px: 1, flex: 1 }}>
        {navGroups.map((group) => {
          const groupLabel = t(group.labelKey)
          const isExpanded = expandedGroups[group.path] ?? false
          const GroupIcon = group.icon
          const hasChildren = group.children.length > 0

          const isGroupHighlighted = location.pathname === group.path

          return (
            <Box key={group.path} sx={{ mb: 0.5 }}>
              {hasChildren ? (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 1,
                    bgcolor: isGroupHighlighted ? 'action.selected' : 'transparent',
                    '&:hover': {
                      bgcolor: isGroupHighlighted ? 'action.selected' : 'action.hover',
                    },
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
                      '&:hover': { bgcolor: 'transparent' },
                      '&.Mui-selected': {
                        bgcolor: 'transparent',
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
                  sx={{ borderRadius: 1 }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {GroupIcon ? <GroupIcon fontSize="small" /> : null}
                  </ListItemIcon>
                  <ListItemText primary={groupLabel} />
                </ListItemButton>
              )}

              {hasChildren && (
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ mt: 0.5 }}>
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
                        sx={{ pl: 3, py: 0.5, borderRadius: 1, mb: 0.25 }}
                      >
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <NavItemIcon item={child} />
                        </ListItemIcon>
                        <ListItemText
                          primary={child.label ? child.label[locale] : t(child.labelKey ?? '')}
                          slotProps={{ primary: { variant: 'body2' } }}
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
        <Toolbar sx={{ gap: 1.5 }}>
          {isMobile ? (
            <IconButton
              edge="start"
              onClick={() => setMobileOpen((previous) => !previous)}
              aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : null}
          <Brand showTagline={!isMobile} showLogo={!isMobile} />
          <Box sx={{ flexGrow: 1 }} />
          <AudioSettings />
          <LanguageSwitcher />
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
