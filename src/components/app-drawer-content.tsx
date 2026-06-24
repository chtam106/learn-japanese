import { useCallback, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { useTranslation } from '@/i18n/use-translation.ts'
import type { CourseLevel } from '@/constants/courses/types.ts'
import {
  isNavGroupActive,
  loadCourseLessonNavItems,
  navGroups,
  type NavItem,
} from '@/constants/nav-items.ts'

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

type AppDrawerContentProps = {
  onNavigate: () => void
}

export function AppDrawerContent({ onNavigate }: AppDrawerContentProps) {
  const location = useLocation()
  const { locale, t } = useTranslation()
  const [courseChildrenByLevel, setCourseChildrenByLevel] = useState<
    Partial<Record<CourseLevel, NavItem[]>>
  >({})
  const [loadingLevels, setLoadingLevels] = useState<Partial<Record<CourseLevel, boolean>>>({})
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      navGroups.map((group) => [group.path, isNavGroupActive(group, location.pathname)]),
    ),
  )

  const ensureCourseChildren = useCallback(
    async (level: CourseLevel) => {
      if (courseChildrenByLevel[level] || loadingLevels[level]) {
        return
      }

      setLoadingLevels((previous) => ({ ...previous, [level]: true }))

      try {
        const children = await loadCourseLessonNavItems(level)
        setCourseChildrenByLevel((previous) => ({ ...previous, [level]: children }))
      } finally {
        setLoadingLevels((previous) => ({ ...previous, [level]: false }))
      }
    },
    [courseChildrenByLevel, loadingLevels],
  )

  const toggleGroup = (path: string, level?: CourseLevel) => {
    const isExpanded = expandedGroups[path] ?? false

    setExpandedGroups((previous) => ({
      ...previous,
      [path]: !isExpanded,
    }))

    if (!isExpanded && level) {
      void ensureCourseChildren(level)
    }
  }

  useEffect(() => {
    navGroups.forEach((group) => {
      if (!group.courseLevel) {
        return
      }

      if (expandedGroups[group.path]) {
        void ensureCourseChildren(group.courseLevel)
      }
    })
  }, [expandedGroups, ensureCourseChildren])

  return (
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
          const dynamicChildren = group.courseLevel ? (courseChildrenByLevel[group.courseLevel] ?? []) : []
          const children = group.courseLevel ? dynamicChildren : group.children
          const hasChildren = group.courseLevel ? true : children.length > 0
          const isLoadingChildren = group.courseLevel ? loadingLevels[group.courseLevel] : false
          const GroupIcon = group.icon
          const isAlphabetGroup = group.labelKey === 'nav.alphabet'
          const isGroupHighlighted = location.pathname === group.path

          return (
            <Box
              key={group.path}
              component="li"
              className="nav-group-item"
              sx={{ listStyle: 'none', p: 0, m: 0 }}
            >
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
                    onClick={onNavigate}
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
                    onClick={() => toggleGroup(group.path, group.courseLevel)}
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
                  onClick={onNavigate}
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
                    {isLoadingChildren ? (
                      <Box sx={{ px: 2, py: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Loading...
                        </Typography>
                      </Box>
                    ) : (
                      children.map((child) => (
                        <ListItemButton
                          key={child.path}
                          component={NavLink}
                          to={child.path}
                          selected={
                            location.pathname === child.path ||
                            location.pathname.startsWith(`${child.path}/`)
                          }
                          onClick={onNavigate}
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
                      ))
                    )}
                  </List>
                </Collapse>
              )}
            </Box>
          )
        })}
      </List>
    </Box>
  )
}

export default AppDrawerContent
