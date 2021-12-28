import { createTheme, ThemeOptions, Theme } from '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
  interface ColorRange {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteColor extends ColorRange {}

  interface Palette {
    primaryDark: PaletteColor
    svgBg: {
      base: string
      active: string
    }
    svgFilled: {
      base: string
      active: string
    }
    svgStroke: {
      base: string
      active: string
    }
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    code: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    code?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    code: true
  }
}

const theme = createTheme()

// const theme = createTheme({
//   palette: {
//     light: {
//       pink: {
//         50: '#ffeff7',
//         100: '#ffd3eb',
//         200: '#ffadda',
//         300: '#ff80c8',
//         400: '#e85aad',
//         500: '#bf3989',
//         600: '#99286e',
//         700: '#772057',
//         800: '#611347',
//         900: '#4d0336',
//       },
//     },
//   },
// })

// const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === 'light'
//       ? {
//           pink: {
//             50: '#ffeff7',
//             100: '#ffd3eb',
//             200: '#ffadda',
//             300: '#ff80c8',
//             400: '#e85aad',
//             500: '#bf3989',
//             600: '#99286e',
//             700: '#772057',
//             800: '#611347',
//             900: '#4d0336',
//           },
//         }
//       : {
//           pink: {
//             50: '#ffdaec',
//             100: '#ffbedd',
//             200: '#ff9bce',
//             300: '#f778ba',
//             400: '#db61a2',
//             500: '#bf4b8a',
//             600: '#9e3670',
//             700: '#7d2457',
//             800: '#5e103e',
//             900: '#42062a',
//           },
//         }),
//   },
// })

export const lightPink = {
  50: '#ffeff7',
  100: '#ffd3eb',
  200: '#ffadda',
  300: '#ff80c8',
  400: '#e85aad',
  500: '#bf3989',
  600: '#99286e',
  700: '#772057',
  800: '#611347',
  900: '#4d0336',
}
export const lightRed = {
  50: '#FFEBE9',
  100: '#ffcecb',
  200: '#ffaba8',
  300: '#ff8182',
  400: '#fa4549',
  500: '#cf222e',
  600: '#a40e26',
  700: '#82071e',
  800: '#660018',
  900: '#4c0014',
}
export const lightCoral = {
  50: '#FFF0EB',
  100: '#FFD6CC',
  200: '#FFB4A1',
  300: '#FD8C73',
  400: '#EC6547',
  500: '#C4432B',
  600: '#9E2F1C',
  700: '#801F0F',
  800: '#691105',
  900: '#510901',
}
export const lightOrange = {
  50: '#fff1e5',
  100: '#ffd8b5',
  200: '#ffb77c',
  300: '#fb8f44',
  400: '#e16f24',
  500: '#bc4c00',
  600: '#953800',
  700: '#762c00',
  800: '#5c2200',
  900: '#471700',
}
export const lightYellow = {
  50: '#fff8c5',
  100: '#fae17d',
  200: '#eac54f',
  300: '#d4a72c',
  400: '#bf8700',
  500: '#9a6700',
  600: '#7d4e00',
  700: '#633c01',
  800: '#4d2d00',
  900: '#3b2300',
}
export const lightGreen = {
  50: '#dafbe1',
  100: '#aceebb',
  200: '#6fdd8b',
  300: '#4ac26b',
  400: '#2da44e',
  500: '#1a7f37',
  600: '#116329',
  700: '#044f1e',
  800: '#003d16',
  900: '#002d11',
}
export const lightBlue = {
  50: '#ddf4ff',
  100: '#b6e3ff',
  200: '#80ccff',
  300: '#54aeff',
  400: '#218bff',
  500: '#0969da',
  600: '#0550ae',
  700: '#033d8b',
  800: '#0a3069',
  900: '#002155',
}
export const lightPurple = {
  50: '#fbefff',
  100: '#ecd8ff',
  200: '#d8b9ff',
  300: '#c297ff',
  400: '#a475f9',
  500: '#8250df',
  600: '#6639ba',
  700: '#512a97',
  800: '#3e1f79',
  900: '#2e1461',
}
export const lightGrey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
}
export const lightEnds = {
  50: '#FFFFFF',
  900: '#1b1f24',
}

export const darkPink = {
  50: '#ffdaec',
  100: '#ffbedd',
  200: '#ff9bce',
  300: '#f778ba',
  400: '#db61a2',
  500: '#bf4b8a',
  600: '#9e3670',
  700: '#7d2457',
  800: '#5e103e',
  900: '#42062a',
}
export const darkRed = {
  50: '#ffdcd7',
  100: '#ffc1ba',
  200: '#ffa198',
  300: '#ff7b72',
  400: '#f85149',
  500: '#da3633',
  600: '#b62324',
  700: '#8e1519',
  800: '#67060c',
  900: '#490202',
}
export const darkCoral = {
  50: '#FFDDD2',
  100: '#FFC2B2',
  200: '#FFA28B',
  300: '#F78166',
  400: '#EA6045',
  500: '#CF462D',
  600: '#AC3220',
  700: '#872012',
  800: '#640D04',
  900: '#460701',
}
export const darkOrange = {
  50: '#ffdfb6',
  100: '#ffc680',
  200: '#ffa657',
  300: '#f0883e',
  400: '#db6d28',
  500: '#bd561d',
  600: '#9b4215',
  700: '#762d0a',
  800: '#5a1e02',
  900: '#3d1300',
}
export const darkYellow = {
  50: '#f8e3a1',
  100: '#f2cc60',
  200: '#e3b341',
  300: '#d29922',
  400: '#bb8009',
  500: '#9e6a03',
  600: '#845306',
  700: '#693e00',
  800: '#4b2900',
  900: '#341a00',
}
export const darkGreen = {
  50: '#aff5b4',
  100: '#7ee787',
  200: '#56d364',
  300: '#3fb950',
  400: '#2ea043',
  500: '#238636',
  600: '#196c2e',
  700: '#0f5323',
  800: '#033a16',
  900: '#04260f',
}
export const darkBlue = {
  50: '#cae8ff',
  100: '#a5d6ff',
  200: '#79c0ff',
  300: '#58a6ff',
  400: '#388bfd',
  500: '#1f6feb',
  600: '#1158c7',
  700: '#0d419d',
  800: '#0c2d6b',
  900: '#051d4d',
}
export const darkPurple = {
  50: '#fbefff',
  100: '#ecd8ff',
  200: '#d8b9ff',
  300: '#c297ff',
  400: '#a475f9',
  500: '#8250df',
  600: '#6639ba',
  700: '#512a97',
  800: '#3e1f79',
  900: '#2e1461',
}
export const darkGrey = {
  50: '#f0f6fc',
  100: '#c9d1d9',
  200: '#b1bac4',
  300: '#8b949e',
  400: '#6e7681',
  500: '#484f58',
  600: '#30363d',
  700: '#21262d',
  800: '#161b22',
  900: '#0d1117',
}
export const darkEnds = {
  50: '#f0f6fc',
  900: '#010409',
}

export const getMetaThemeColor = (mode: 'light' | 'dark') => {
  const themeColor = {
    light: lightGrey[50],
    dark: darkGrey[800],
  }
  return themeColor[mode]
}

// optically-consistent adjustment to space between letters
function round(value: number) {
  return Math.round(value * 1e5) / 1e5
}

export const muiDesignTokens = (mode: 'light' | 'dark') =>
  ({
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
          default: darkGrey[950],
        },
        text: {
          primary: darkEnds[50],
          secondary: darkEnds[200],
        },
        primary: {
          main: darkBlue[500],
        },
        success: {
          main: darkGreen[600],
        },
        error: {
          main: darkYellow[300],
        },
        warning: {
          main: darkRed[700],
        },
        divider: darkGrey[700],
        svgBg: {
          base: darkGrey[400],
          active: darkGrey[400],
        },
        svgFilled: {
          base: darkGrey[800],
          active: darkBlue[300],
        },
        svgStroke: {
          base: darkGrey[600],
          active: darkGrey[800],
        },
      }),
      ...(mode === 'light' && {
        background: {
          default: lightGrey[50],
        },
        text: {
          primary: lightGrey[900],
          secondary: lightGrey[800],
        },
        primary: {
          main: lightBlue[400],
        },
        success: {
          main: lightGreen[400],
        },
        error: {
          main: lightYellow[300],
        },
        warning: {
          main: lightRed[500],
        },
        divider: lightGrey[200],
        svgBg: {
          base: lightGrey[50],
          active: lightGrey[50],
        },
        svgFilled: {
          base: lightGrey[500],
          active: lightBlue[500],
        },
        svgStroke: {
          base: lightGrey[50],
          active: lightGrey[200],
        },
      }),
    },
    shape: {
      borderRadius: 3,
    },
    spacing: 1,
    spacingIcons: 2,
    transitions: '300ms',

    typography: {
      fontFamily: 'var(--text-font-family)',
      h1: {
        fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4.5rem)',
        letterSpacing: `${round(-2 / 72)}em`,
        fontWeight: 700,
        lineHeight: 80 / 72,
      },
      h2: {
        fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
        letterSpacing: `${round(-1.5 / 48)}em`,
        fontWeight: 700,
        lineHeight: 44 / 36,
      },
      h3: {
        fontSize: theme.typography.pxToRem(36),
        letterSpacing: `${round(-1 / 36)}em`,
        lineHeight: 44 / 36,
      },
      h4: {
        fontSize: theme.typography.pxToRem(28),
        letterSpacing: `${round(-0.5 / 24)}em`,
        lineHeight: 42 / 28,
      },
      h5: {
        fontSize: theme.typography.pxToRem(24),
        letterSpacing: `${round(-0.25 / 20)}em`,
        lineHeight: 36 / 24,
      },
      h6: {
        fontSize: theme.typography.pxToRem(20),
        letterSpacing: 0,
        lineHeight: 30 / 20,
      },
      subtitle1: {
        fontSize: theme.typography.pxToRem(18),
        lineHeight: 24 / 18,
        letterSpacing: 0,
        fontWeight: 500,
      },
      body1: {
        fontSize: 'clamp(1.09rem, 1rem + 0.47vw, 1.33rem)',
        lineHeight: 24 / 16,
        letterSpacing: 0,
      },
      body2: {
        fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
        fontWeight: theme.palette.mode === 'dark' ? 400 : 500,
        lineHeight: 21 / 14,
        letterSpacing: 0,
      },
      caption: {
        display: 'inline-block',
        fontSize: 'clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem)',
        lineHeight: 18 / 12,
        letterSpacing: 0,
      },
      code: {
        display: 'block',
        fontFamily: 'var(--code-font-family)',
        fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
        lineHeight: 1.7,
        letterSpacing: 0,
      },
    },
  } as ThemeOptions)

export function muiThemedComponents(theme: Theme) {
  return {
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {},
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          variant: 'outlined',
          disableElevation: true,
          disableFocusRipple: true,
          disableRipple: true,
        },
        root: {
          background: theme.palette.mode === 'dark' ? darkGrey[900] : lightGrey[100],
          borderRadius: '4px',
          boxShadow: 0,
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            [theme.breakpoints.up('md')]: {
              paddingLeft: theme.spacing(20),
              paddingRight: theme.spacing(20),
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            color: theme.palette.mode === 'dark' ? darkGrey[900] : lightGrey[50],
            margin: theme.spacing(5, 10),
          },
        },
      },
      MuiIcon: {
        defaultProps: {
          fontSize: 'small',
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            textDecoration: 'none',
            backgroundColor: 'transparent',
            '&:hover, & .Mui-focused': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {},
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
        styleOverrides: {
          root: {
            color: theme.palette.mode === 'dark' ? darkBlue[400] : lightBlue[600],
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            '&.MuiTypography-body1 > svg': {
              marginTop: 2,
            },
            '& svg:last-child': {
              marginLeft: 2,
            },
          },
        },
      },
      MuiOutlinedInput: {
        input: {
          '&:-webkit-autofill': {
            webkitBoxShadow: '0 0 0 100px #1f2428 inset',
            borderRadius: 'none',
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 1,
        },
        styleOverrides: {},
      },
      MuiSelect: {
        defaultProps: {
          variant: 'standard',
        },
      },
      MuiSvgIcon: {
        defaultProps: {
          fontSize: 'small',
        },
      },
      MuiTab: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: theme.spacing(10, 20),
            borderColor: theme.palette.divider,
          },
          head: {
            color: theme.palette.text.primary,
            fontWeight: 600,
          },
          body: {
            color: theme.palette.text.secondary,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
          fontSize: '14px',
        },
        root: {
          fontSize: '14px',
        },
      },
      MuiToggleButtonGroup: {
        defaultProps: {
          size: 'small',
        },
        root: {
          background: theme.palette.mode === 'dark' ? darkGrey[900] : lightGrey[100],
          borderRadius: '4px',
          boxShadow: 0,
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
          enterDelay: 400,
          enterNextDelay: 50,
          enterTouchDelay: 800,
          leaveDelay: 50,
          leaveTouchDelay: 1000,
        },
        styleOverrides: {
          tooltipArrow: {
            backgroundColor: theme.palette.mode === 'dark' ? darkGrey[700] : lightGrey[300],
          },
          tooltip: {
            paddingTop: 4,
            paddingBottom: 4,
            color: theme.palette.mode === 'dark' ? darkGrey[50] : lightGrey[900],
            backgroundColor: theme.palette.mode === 'dark' ? darkGrey[700] : lightGrey[300],
          },
        },
      },
      MuiTreeItem: {
        styleOverrides: {
          label: {
            fontSize: theme.typography.body2,
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 32,
            height: 20,
            padding: 0,
          },
          switchBase: {
            height: 20,
            width: 20,
            padding: 0,
            color: '#fff',
            '&.Mui-checked + .MuiSwitch-track': {
              opacity: 1,
            },
            '&.Mui-checked': {
              transform: 'translateX(11px)',
              color: '#fff',
            },
          },
          track: {
            opacity: 1,
            borderRadius: 32,
            backgroundColor: theme.palette.mode === 'dark' ? darkGrey[800] : lightGrey[400],
          },
          thumb: {
            flexShrink: 0,
            width: '14px',
            height: '14px',
          },
        },
      },
    },
  }
}
