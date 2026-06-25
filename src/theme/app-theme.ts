import { createTheme } from '@mui/material/styles';
import { FONT_FAMILY_UI } from './fonts.ts';

export const appTheme = createTheme({
  typography: {
    fontFamily: FONT_FAMILY_UI
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ ownerState, theme: muiTheme }) =>
          ownerState.disableGutters
            ? {}
            : {
                paddingTop: muiTheme.spacing(4),
                paddingBottom: `calc(${muiTheme.spacing(4)} + 50px)`,
                paddingLeft: muiTheme.spacing(2),
                paddingRight: muiTheme.spacing(2),
                [muiTheme.breakpoints.up('sm')]: {
                  paddingLeft: muiTheme.spacing(4),
                  paddingRight: muiTheme.spacing(4)
                },
                [muiTheme.breakpoints.up('md')]: {
                  paddingTop: muiTheme.spacing(6),
                  paddingBottom: `calc(${muiTheme.spacing(6)} + 30px)`,
                  paddingLeft: muiTheme.spacing(6),
                  paddingRight: muiTheme.spacing(6)
                }
              }
      }
    }
  }
});
