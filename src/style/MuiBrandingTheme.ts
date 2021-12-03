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

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    fontWeightExtraBold?: number
    fontFamilyCode?: string
  }

  interface Typography {
    fontWeightExtraBold: number
    fontFamilyCode: string
  }
}

// TODO: enable this once types conflict is fixed
// declare module '@mui/material/Button' {
//   interface ButtonPropsVariantOverrides {
//     code: true;
//   }
// }

// Adobe Color trends
// #F2F2F2
// #A6A6A6
// #595959
// #262626
// #0D0D0D

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
  // 50: '#F3F6F9', // contrast
  50: '#FFFFFF', // contrast
  100: '#EAEEF3', // contrast
  200: '#E5E8EC', // contrast
  300: '#D7DCE1', // contrast
  400: '#BFC7CF', // contrast
  500: '#AAB4BE', // contrast
  600: '#7F8E9D', // contrast
  700: '#46505A', // contrast
  800: '#2F3A45', // contrast
  900: '#20262D', // contrast
  950: '#000000', // contrast
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
          paper: greyDark[900],
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
          main: '#1DB45A', // contrast 6.17:1 (greyDark.800)
        }),
        ...(mode === 'light' && {
          main: '#1AA251', // contrast 3.31:1
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
        main: '#F1A204', // does not pass constrast ratio
        700: '#F1A204',
        800: '#DB9A00',
        900: '#8F6400',
      },
    },
    shape: {
      borderRadius: '4px',
    },
    spacing: 10,
    spacingIcons: 2,
    typography: {
      fontFamily: 'var(--text-font-family)',
      fontWeightExtraBold: 800,
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
        fontSize: theme.typography.pxToRem(16),
        lineHeight: 24 / 16,
        letterSpacing: 0,
      },
      body2: {
        fontSize: theme.typography.pxToRem(14),
        lineHeight: 21 / 14,
        letterSpacing: 0,
      },
      caption: {
        display: 'inline-block',
        fontSize: theme.typography.pxToRem(12),
        lineHeight: 18 / 12,
        letterSpacing: 0,
        fontWeight: 600,
      },
    },
  } as ThemeOptions)

export function muiThemedComponents(theme: Theme) {
  return {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          textDecoration: 'none',
          backgroundColor: 'transparent',
          transition: 'all var(--transition-speed-fastest)',
          '&:hover, &:focus': {
            backgroundColor: 'transparent',
          },
          sizeLarge: {
            padding: '1rem 1.25rem',
            ...theme.typography.body1,
            lineHeight: 21 / 16,
            fontWeight: 700,
          },
          containedPrimary: {
            backgroundColor: theme.palette.primary[500],
            color: '#fff',
          },
        },
        variants: [
          {
            props: { variant: 'code' },
            style: {
              color:
                theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.grey[800],
              border: '1px solid',
              borderColor:
                theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[400]
                  : theme.palette.grey[200],
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[700]
                  : theme.palette.grey[50],
              fontFamily: theme.typography.fontFamilyCode,
              '&:hover, &.Mui-focusVisible': {
                borderColor: theme.palette.primary.main,
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? theme.palette.primaryDark[500]
                    : theme.palette.primary[50],
                '& .MuiButton-endIcon': {
                  color:
                    theme.palette.mode === 'dark'
                      ? theme.palette.primary[300]
                      : theme.palette.primary.main,
                },
              },
              '& .MuiButton-startIcon': {
                color: theme.palette.grey[400],
              },
              '& .MuiButton-endIcon': {
                color:
                  theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.grey[700],
              },
            },
          },
          {
            props: { variant: 'code', size: 'large' },
            style: {
              ...theme.typography.body2,
              fontFamily: theme.typography.fontFamilyCode,
              fontWeight: theme.typography.fontWeightBold,
            },
          },
        ],
      },
      MuiButtonGroup: {
        defaultProps: {
          variant: 'outlined',
          disableElevation: true,
          disableFocusRipple: true,
          disableRipple: true,
          TransitionComponent: Fade,
        },
        styleOverrides: {
          root: {
            backgroundColor:
              theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[900]
                : theme.palette.grey[100],
            borderRadius: '4px',
            boxShadow: 0,
          },
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
            transition: 'all var(--transition-speed-fastest)',
            '&:hover, &:focus': {
              backgroundColor: 'transparent',
            },
          },
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
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor:
              theme.palette.mode === 'dark' ? theme.palette.primaryDark[900] : '#fff',
            '&[href]': {
              textDecorationLine: 'none',
            },
          },
          outlined: {
            display: 'block',
            borderColor:
              theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[400]
                : theme.palette.grey[200],
            ...(theme.palette.mode === 'dark' && {
              backgroundColor: theme.palette.primaryDark[700],
            }),
            'a&, button&': {
              '&:hover': {
                boxShadow: '1px 1px 20px 0 rgb(90 105 120 / 20%)',
              },
            },
          },
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
        },
      },
      MuiToggleButtonGroup: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {
            border: 'none',
            textDecoration: 'none',
            backgroundColor: 'transparent',
            '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            border: 'none',
            textDecoration: 'none',
            backgroundColor: 'transparent',
            color:
              theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
            '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover': {
              color:
                theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[950],
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiTooltip: {
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
        defaultProps: {
          arrow: true,
          enterDelay: 400,
          enterNextDelay: 50,
          enterTouchDelay: 800,
          leaveDelay: 50,
          leaveTouchDelay: 1000,
          TransitionComponent: Fade,
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
