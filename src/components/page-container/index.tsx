import type { ReactNode } from 'react';
import { Container } from '@mui/material';

type PageContainerProps = {
  children: ReactNode;
};

/**
 * Shared page wrapper. Width and padding are centralised here (and in the
 * MuiContainer theme overrides) so individual pages don't redefine layout.
 */
export function PageContainer({ children }: PageContainerProps) {
  return (
    <Container maxWidth={false} sx={{ width: '100%', maxWidth: 1200, mx: 'auto' }}>
      {children}
    </Container>
  );
}
