import { createTheme, ThemeOptions, Theme } from '@mui/material/styles'
import { BrandSwatch } from './BrandSwatch'

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
    //   darkPink: PaletteColor
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
    code: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    code: true
  }
}

const theme = createTheme()

export const getMetaThemeColor = (mode: 'dark' | 'light') => {
  const themeColor = {
    dark: BrandSwatch.Dark.Grey[800],
    light: BrandSwatch.Light.Grey[50],
  }
  return themeColor[mode]
}

// optically-consistent adjustment to space between letters
function round(value: number) {
  return Math.round(value * 1e5) / 1e5
}

export const DesignTokens = (mode: 'dark' | 'light') =>
  ({
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
          default: BrandSwatch.Dark.Grey[500],
        },
        text: {
          primary: BrandSwatch.Dark.Grey[50],
          secondary: BrandSwatch.Dark.Grey[100],
        },
        primary: {
          main: BrandSwatch.Dark.Grey[900],
        },
        secondary: {
          main: BrandSwatch.Dark.Blue[200],
        },
        error: {
          main: BrandSwatch.Dark.Yellow[300],
        },
        warning: {
          main: BrandSwatch.Dark.Red[700],
        },
        info: {
          main: BrandSwatch.Dark.Red[700],
        },
        success: {
          main: BrandSwatch.Dark.Green[600],
        },
        divider: BrandSwatch.Dark.Grey[700],
        svgBg: {
          base: BrandSwatch.Dark.Grey[400],
          active: BrandSwatch.Dark.Grey[500],
        },
        svgFilled: {
          base: BrandSwatch.Dark.Grey[800],
          active: BrandSwatch.Dark.Blue[300],
        },
        svgStroke: {
          base: BrandSwatch.Dark.Grey[600],
          active: BrandSwatch.Dark.Grey[800],
        },
      }),
      ...(mode === 'light' && {
        background: {
          default: BrandSwatch.Light.Grey[50],
        },
        text: {
          primary: BrandSwatch.Light.Grey[900],
          secondary: BrandSwatch.Light.Grey[800],
        },
        primary: {
          main: BrandSwatch.Light.Grey[800],
        },
        secondary: {
          main: BrandSwatch.Light.Blue[800],
        },
        error: {
          main: BrandSwatch.Light.Yellow[300],
        },
        warning: {
          main: BrandSwatch.Light.Red[500],
        },
        info: {
          main: BrandSwatch.Light.Red[400],
        },
        success: {
          main: BrandSwatch.Light.Green[400],
        },
        divider: BrandSwatch.Light.Grey[200],
        svgBg: {
          base: BrandSwatch.Light.Grey[50],
          active: BrandSwatch.Light.Grey[50],
        },
        svgFilled: {
          base: BrandSwatch.Light.Grey[500],
          active: BrandSwatch.Light.Blue[500],
        },
        svgStroke: {
          base: BrandSwatch.Light.Grey[50],
          active: BrandSwatch.Light.Grey[200],
        },
      }),
    },
    shape: {
      borderRadius: 3,
    },
    spacing: 1,
    spacingIcons: 2,
    transitions: {
      duration: {
        shortest: 150,
        standard: 300,
        complex: 500,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
      easing: {
        // most common easing curve
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        // enter at full velocity and slowly decelerate to a resting point
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        // leave at full velocity without decelerating
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        // sharp curve is used by objects that may return at any time
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),

      //  Dec 29, 2021 ()
      // update the font sizes using the clamp function
      // developer.mozilla.org/en-US/docs/Web/CSS/clamp()
      // 300: clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem);
      // 400: clamp(0.88rem, 0.83rem + 0.24vw, 1rem);
      // 500: clamp(1.09rem, 1rem + 0.47vw, 1.33rem);
      // 600: clamp(1.37rem, 1.21rem + 0.8vw, 1.78rem);
      // 700: clamp(1.71rem, 1.45rem + 1.29vw, 2.37rem);
      // 800: clamp(2.14rem, 1.74rem + 1.99vw, 3.16rem);
      // 900: clamp(2.67rem, 2.07rem + 3vw, 4.21rem);
      // 1000: clamp(3.34rem, 2.45rem + 4.43vw, 5.61rem);

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
        letterSpacing: 0,
        lineHeight: 24 / 18,
        fontWeight: 500,
      },
      body1: {
        fontSize: 'clamp(1.09rem, 1rem + 0.47vw, 1.33rem)',
        letterSpacing: 0,
        lineHeight: 24 / 16,
      },
      body2: {
        fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
        letterSpacing: 0,
        lineHeight: 21 / 14,
        fontWeight: theme.palette.mode === 'dark' ? 400 : 500,
      },
      caption: {
        display: 'inline-block',
        letterSpacing: 0,
        lineHeight: 18 / 12,
        fontSize: 'clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem)',
      },
      code: {
        display: 'block',
        letterSpacing: 0,
        lineHeight: 1.7,
        fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
        fontFamily: ['"Fira Code"', '"monospace"'].join(','),
      },
    },
  } as ThemeOptions)

export function ThemedComponents(theme: Theme) {
  return {
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        text: {
          textTransform: 'none',
        },
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
              ? BrandSwatch.Dark.Grey[900]
              : BrandSwatch.Light.Grey[100],
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
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[900]
                : BrandSwatch.Light.Grey[100],
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
          input: {
            '&:focus': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {},
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
                ? BrandSwatch.Dark.Black[50]
                : BrandSwatch.Light.Blue[600],
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
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[800]
                : BrandSwatch.Light.Grey[400],
          },
          thumb: {
            flexShrink: 0,
            width: '14px',
            height: '14px',
          },
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
          background:
            theme.palette.mode === 'dark'
              ? BrandSwatch.Dark.Grey[900]
              : BrandSwatch.Light.Grey[100],
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
            borderRadius: theme.shape.borderRadius,
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[800]
                : BrandSwatch.Light.Grey[300],
          },
          tooltip: {
            paddingTop: 4,
            paddingBottom: 4,
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[50]
                : BrandSwatch.Light.Grey[900],
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[700]
                : BrandSwatch.Light.Grey[300],
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
    },
  }
}
