/**
 * Trim the height of segmented toggle controls on mobile (smaller vertical
 * padding), restoring the default padding from the `sm` breakpoint up. Plain
 * objects (not annotated `SxProps`) so they compose inside `sx={[...]}` arrays.
 */
export const compactToggleSx = {
  '& .MuiToggleButton-root': {
    py: { xs: 0.5, sm: 1.375 }
  }
};

/**
 * Same idea for outlined selects: shorter on mobile, default on larger screens.
 * Apply on the wrapping FormControl (not the Select) so the resting (non-floated)
 * label is also re-centered for the reduced height - otherwise an empty/disabled
 * select shows its label too low.
 */
export const compactSelectSx = {
  '& .MuiSelect-select': {
    py: { xs: 1, sm: 2 }
  },
  '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
    transform: { xs: 'translate(14px, 9px)', sm: 'translate(14px, 16px)' }
  }
};
