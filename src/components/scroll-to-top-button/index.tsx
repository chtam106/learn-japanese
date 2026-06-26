import { useEffect, useRef, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';

/** Show only once the page is scrolled past this fraction of its scrollable height. */
const SHOW_AFTER_PROGRESS = 0.2;

/**
 * Floating "back to top" button, fixed to the bottom-right of the viewport.
 * Only appears on scrollable pages, when scrolling down past a threshold, and
 * hides as soon as the user scrolls up (staying hidden once they stop). On
 * desktop it rests 20px above the footer.
 */
export function ScrollToTopButton() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const gap = isDesktop ? 20 : 16;
  const [visible, setVisible] = useState(false);
  const [bottom, setBottom] = useState(gap);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const y = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const delta = y - lastY.current;
      lastY.current = y;

      if (maxScroll <= 0) {
        setVisible(false);
      } else if (delta > 0) {
        // Show only while actively scrolling down past the threshold.
        if (y / maxScroll >= SHOW_AFTER_PROGRESS) {
          setVisible(true);
        }
      } else if (delta < 0) {
        // Hide as soon as the user scrolls up; stays hidden once they stop.
        setVisible(false);
      }

      const footer = document.querySelector('footer');
      const footerHeight = footer ? footer.getBoundingClientRect().height : 0;
      setBottom(footerHeight + gap);
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [gap]);

  if (!visible) {
    return null;
  }

  return (
    <Fab
      size="medium"
      aria-label={t('common.scrollTop')}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      sx={{
        position: 'fixed',
        right: `${gap}px`,
        bottom: `${bottom}px`,
        zIndex: (muiTheme) => muiTheme.zIndex.fab,
        bgcolor: 'background.paper',
        color: 'text.primary',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 6px 16px rgba(0, 0, 0, 0.14)',
        transition: 'bottom 0.15s ease',
        '&:hover': { bgcolor: 'background.paper' }
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}
