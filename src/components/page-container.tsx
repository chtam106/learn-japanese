import type { ReactNode } from 'react'
import { Container } from '@mui/material'

/**
 * Shared page wrapper. Width and padding are centralised here (and in the
 * MuiContainer theme overrides) so individual pages don't redefine layout.
 */
export function PageContainer({ children }: { children: ReactNode }) {
  return <Container maxWidth={false}>{children}</Container>
}
