export function resultBorderSx(color: 'success.main' | 'error.main') {
  return {
    borderWidth: 2,
    borderColor: color,
    color: color,
    '&.Mui-disabled': {
      borderWidth: 2,
      borderColor: color,
      color: color,
      opacity: 1,
    },
  }
}
