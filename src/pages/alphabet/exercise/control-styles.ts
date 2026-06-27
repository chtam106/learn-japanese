/**
 * Shrink outlined selects to the same height as the segmented toggle buttons
 * (~48px) so the exercise controls line up. Also re-centers the resting
 * (non-floated) label for the reduced height - otherwise an empty/disabled
 * select shows its label too low. Apply on the wrapping FormControl.
 */
export const buttonSizedSelectSx = {
  '& .MuiSelect-select': {
    paddingTop: '12.5px',
    paddingBottom: '12.5px'
  },
  '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
    transform: 'translate(14px, 12.5px)'
  }
};
