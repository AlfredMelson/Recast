import { Fade } from '@mui/material'
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
    950: string
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

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#A5D8FF',
  300: '#66B2FF',
  400: '#3399FF',
  // main: '#007FFF',
  main: '#262626',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
}
const greyDark = {
  50: '#E2EDF8',
  100: '#CEE0F3',
  200: '#91B9E3',
  300: '#5090D3',
  main: '#5090D3',
  400: '#265D97',
  500: '#1E4976',
  600: '#173A5E',
  700: '#132F4C',
  // 800: '#001E3C',
  800: '#202124',
  850: '#141414',
  900: '#000000',
}
const grey = {
  50: '#F3F6F9',
  100: '#EAEEF3',
  200: '#E5E8EC',
  300: '#D7DCE1',
  400: '#BFC7CF',
  500: '#AAB4BE',
  600: '#7F8E9D',
  700: '#46505A',
  800: '#2F3A45',
  900: '#20262D',
  950: '#000000',
}

export const getMetaThemeColor = (mode: 'light' | 'dark') => {
  const themeColor = {
    light: grey[50],
    dark: greyDark[800],
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
      ...(mode === 'dark' && {
        background: {
          default: greyDark[800],
          // paper: greyDark[900],
        },
      }),
      divider: mode === 'dark' ? greyDark[700] : grey[200],
      error: {
        50: '#FFF0F1',
        100: '#FFDBDE',
        200: '#FFBDC2',
        300: '#FF99A2',
        400: '#FF7A86',
        500: '#FF505F',
        main: '#EB0014', // contrast 4.63:1
        600: '#EB0014',
        700: '#C70011',
        800: '#94000D',
        900: '#570007',
      },
      grey,
      mode,

      primary: {
        ...blue,
        ...(mode === 'dark' && {
          main: blue[400],
        }),
      },
      primaryDark: greyDark,
      success: {
        50: '#E9FBF0',
        100: '#C6F6D9',
        200: '#9AEFBC',
        300: '#6AE79C',
        400: '#3EE07F',
        500: '#21CC66',
        600: '#1DB45A',
        ...(mode === 'dark' && {
          main: '#1DB45A',
        }),
        ...(mode === 'light' && {
          main: '#1AA251',
        }),
        700: '#1AA251',
        800: '#178D46',
        900: '#0F5C2E',
      },
      svgBg: {
        base: mode === 'dark' ? greyDark[400] : grey[50],
        active: mode === 'dark' ? greyDark[400] : grey[50],
      },
      svgFilled: {
        base: mode === 'dark' ? greyDark[800] : grey[500],
        active: mode === 'dark' ? blue[300] : blue[500],
      },
      svgStroke: {
        base: mode === 'dark' ? greyDark[600] : '#ffffff',
        active: mode === 'dark' ? blue[700] : '#ffffff',
      },
      ...(mode === 'light' && {
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }),
      ...(mode === 'dark' && {
        text: {
          primary: '#FFFFFF',
          secondary: '#F2F2F2',
        },
      }),
      warning: {
        50: '#FFF9EB',
        100: '#FFF4DB',
        200: '#FFEDC2',
        300: '#FFE4A3',
        400: '#FFD980',
        500: '#FCC419',
        600: '#FAB005',
        700: '#F1A204',
        800: '#DB9A00',
        900: '#8F6400',
      },
    },
    shape: {
      borderRadius: 1,
    },
    spacing: 10,
    spacingIcons: 2,
    typography: {
      fontFamily: 'var(--text-font-family)',
      h1: {
        fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4.5rem)',
        letterSpacing: `${round(-2 / 72)}em`,
        fontWeight: 700,
        lineHeight: 80 / 72,
        ...(mode === 'light' && {
          color: greyDark[900],
        }),
      },
      h2: {
        fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
        letterSpacing: `${round(-1.5 / 48)}em`,
        fontWeight: 700,
        lineHeight: 44 / 36,
        color: mode === 'dark' ? grey[200] : greyDark[700],
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
      button: {
        textTransform: 'initial',
        fontWeight: 700,
        letterSpacing: 0,
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
        lineHeight: 21 / 14,
        letterSpacing: 0,
      },
      caption: {
        display: 'inline-block',
        fontSize: 'clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem)',
        lineHeight: 18 / 12,
        letterSpacing: 0,
        fontWeight: 600,
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
          background:
            theme.palette.mode === 'dark'
              ? theme.palette.primaryDark[900]
              : theme.palette.grey[100],
          borderRadius: '4px',
          boxShadow: 0,
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            [theme.breakpoints.up('md')]: {
              paddingLeft: theme.spacing(2),
              paddingRight: theme.spacing(2),
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            color: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
            margin: theme.spacing(0.5, 1),
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
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.primary[400]
                : theme.palette.primary[600],
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
            padding: theme.spacing(1, 2),
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
          background:
            theme.palette.mode === 'dark'
              ? theme.palette.primaryDark[900]
              : theme.palette.grey[100],
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
          TransitionComponent: Fade,
        },
        styleOverrides: {
          tooltipArrow: {
            backgroundColor:
              theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300],
          },
          tooltip: {
            paddingTop: 4,
            paddingBottom: 4,
            color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundColor:
              theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300],
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
            backgroundColor:
              theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[400],
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
