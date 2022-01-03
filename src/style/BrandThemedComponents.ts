import { Theme } from '@mui/material/styles'
import { BrandSwatch } from './BrandSwatch'

export function BrandThemedComponents(theme: Theme) {
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
              padding: theme.spacing(0, 20),
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
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            fontSize: theme.typography.body2,
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
            fontSize: theme.typography.body2,
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
          variant: 'elevation',
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
          rounded: {}, // Styles applied to the root element unless square={true}
          outlined: {}, // Styles applied to the root element if variant="outlined"
          elevation: {}, // Styles applied to the root element if variant="elevation"
        },
      },
      MuiRadio: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {
            fontSize: theme.typography.body2,
          },
        },
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
            width: theme.spacing(32),
            height: theme.spacing(20),
            padding: theme.spacing(0),
          },
          switchBase: {
            height: theme.spacing(20),
            width: theme.spacing(20),
            padding: theme.spacing(0),
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
            borderRadius: theme.spacing(32),
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
        styleOverrides: {
          root: {
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[700]
                : BrandSwatch.Light.Grey[200],
          },
        },
      },
      MuiTabs: {
        defaultProps: {},
        styleOverrides: {},
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
        },
        root: {
          fontSize: theme.typography.body2,
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
            padding: theme.spacing(4, 0),
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
