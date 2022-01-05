import { Theme } from '@mui/material/styles'
import { BrandSwatch } from './BrandSwatch'

export function BrandThemedComponents(theme: Theme) {
  return {
    components: {
      // https://mui.com/api/button/
      MuiButton: {
        defaultProps: {},
      },
      styleOverrides: {
        root: {}, // Styles applied to the root element
        text: { fontWeight: theme.palette.mode === 'dark' ? 400 : 600 }, // Styles applied to the root element if variant="text"
        outlined: {
          fontWeight: theme.palette.mode === 'dark' ? 400 : 600,
          backgroundColor:
            theme.palette.mode === 'dark'
              ? BrandSwatch.Dark.Blue[800]
              : BrandSwatch.Light.Blue[400],
        }, // Styles applied to the root element if variant="outlined"
        contained: {
          textTransform: 'none',
        }, // Styles applied to the root element if variant="contained"
        disabled: {
          textTransform: 'none',
        }, // State class applied to the root element if disabled={true}
        sizeMedium: {
          textTransform: 'none',
        }, // State class applied to the root element if disabled={true}
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          variant: 'outlined',
          disableFocusRipple: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
      MuiContainer: {
        defaultProps: {},
        styleOverrides: {
          root: {
            [theme.breakpoints.up('md')]: {
              padding: theme.spacing(0, 20),
            },
          },
        },
      },
      MuiDivider: {
        defaultProps: {},
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
      MuiFormControl: {
        defaultProps: {},
        styleOverrides: {},
      },
      MuiFormControlLabel: {
        defaultProps: {},
        styleOverrides: {
          label: { fontSize: 16 },
          root: {},
        },
      },
      MuiIcon: {
        defaultProps: {
          fontSize: 'small',
        },
        styleOverrides: {},
      },
      MuiIconButton: {
        defaultProps: {},
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
        defaultProps: {},
        styleOverrides: {
          root: {},
          input: {
            '&:focus': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiInputBase: {
        defaultProps: {},
        styleOverrides: {},
      },
      MuiInputLabel: {
        defaultProps: {},
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
                ? BrandSwatch.Dark.Blue[500]
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
      MuiMenu: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // 	Styles applied to the root element
          paper: {}, // Styles applied to the Paper component
          list: {
            paddingTop: 0,
            paddingBottom: 0,
          }, // Styles applied to the List component via `MenuList`
        },
      },
      MuiMenuItem: {
        defaultProps: {
          dense: true,
        },
        styleOverrides: {
          root: {
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[800]
                : BrandSwatch.Light.Grey[100],
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[900]
                  : BrandSwatch.Light.Grey[200],
            },
          }, // 	Styles applied to the root element
          focusVisible: {}, // State class applied to the root element if keyboard focused
          dense: {}, // Styles applied to the root element if dense
          disabled: {}, // State class applied to the root element if disabled={true}
          divider: {}, // Styles applied to the root element if divider={true}
          gutters: {}, // Styles applied to the inner `component` element unless disableGutters={true}
          selected: {}, // State class applied to the root element if selected={true}
        },
      },
      MuiOutlinedInput: {
        defaultProps: {},
        styleOverrides: {
          input: {
            '&:-webkit-autofill': {
              webkitBoxShadow: '0 0 0 100px #1f2428 inset',
              borderRadius: 'none',
            },
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
          // variant: 'elevation',
        },
        styleOverrides: {
          root: {}, // Styles applied to the root element
          rounded: {}, // Styles applied to the root element unless square={true}
          outlined: {}, // Styles applied to the root element if variant="outlined"
          elevation: {}, // Styles applied to the root element if variant="elevation"
        },
      },
      MuiPopover: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          paper: {}, // Styles applied to the root element unless square={true}
        },
      },
      MuiRadio: {
        defaultProps: {
          size: 'small', // small is equivalent to the dense radio styling
        },
        styleOverrides: {
          root: {
            fontSize: 14,
            textDecoration: 'none',
            backgroundColor: 'transparent',
            '&:hover, & .Mui-focused': {
              backgroundColor: 'transparent',
            },
            '&.Mui-checked': {
              color:
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[50]
                  : BrandSwatch.Light.Grey[900],
            },
          }, // Styles applied to the root element
          checked: {}, // State class applied to the root element if checked={true}
          disabled: {}, // State class applied to the root element if disabled={true}
        },
      },
      MuiSelect: {
        defaultProps: {
          variant: 'standard',
        },
        styleOverrides: {
          select: {
            fontSize: 16,
          }, // Styles applied to the select component `select` class
          icon: {}, // Styles applied to the icon component
        },
      },
      MuiSvgIcon: {
        defaultProps: {
          fontSize: 'small',
        },
        styleOverrides: {},
      },
      MuiSwitch: {
        defaultProps: {},
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
        defaultProps: {},
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
        styleOverrides: {
          root: {
            fontSize: theme.typography.body2,
          },
        },
      },
      MuiToggleButtonGroup: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {
            background:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[900]
                : BrandSwatch.Light.Grey[100],
          },
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true, // If true, adds an arrow to the tooltip
          enterDelay: 400, // ms to wait before showing the tooltip
          enterNextDelay: 50, // ms to wait before showing the tooltip when one was already recently opened
          enterTouchDelay: 800, // ms a user must touch the element before showing the tooltip
          leaveDelay: 50, // ms to wait before hiding the tooltip
          leaveTouchDelay: 1000, // ms after the user stops touching an element before hiding the tooltip
          placement: 'bottom', // position the tooltip will appear, 'bottom' is default
        },
        styleOverrides: {
          popper: {
            // color:
            //   theme.palette.mode === 'dark'
            //     ? BrandSwatch.Dark.Grey[50]
            //     : BrandSwatch.Light.Grey[900],
          }, // Styles applied to the Popper component.
          popperInteractive: {}, // Styles applied to the Popper component unless disableInteractive={true}
          popperArrow: {}, // Styles applied to the Popper component if arrow={true}
          popperClose: {}, // Styles applied to the Popper component unless the tooltip is open
          tooltip: {
            boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.25)',
            margin: theme.spacing(4, 10),
            fontWeight: theme.palette.mode === 'dark' ? 400 : 600,
            fontSize: 13,
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[50]
                : BrandSwatch.Light.Grey[900],
            backgroundColor:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[600]
                : BrandSwatch.Light.Grey[300],
          }, // Styles applied to the tooltip (label wrapper) element
          tooltipArrow: {}, // Styles applied to the tooltip (label wrapper) element if arrow={true}
          arrow: {
            color:
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[600]
                : BrandSwatch.Light.Grey[300],
          }, // Styles applied to the arrow element
          touch: {}, // Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch
          tooltipPlacementLeft: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "left"
          tooltipPlacementRight: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "right"
          tooltipPlacementTop: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "top"
          tooltipPlacementBottom: {}, // Styles applied to the tooltip (label wrapper) element if placement contains "bottom"
        },
      },
      MuiTreeItem: {
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
          group: {}, // Styles applied to the transition component
          content: {}, // Styles applied to the content element
          expanded: {}, // State class applied to the content element when expanded
          selected: {}, // State class applied to the content element when selected
          focused: {}, // State class applied to the content element when focused
          disabled: {}, // State class applied to the element when disabled
          iconContainer: {}, // Styles applied to the tree node icon
          label: {
            fontSize: 16,
          }, // Styles applied to the label element
        },
      },
      MuiTreeView: {
        // https://mui.com/api/tree-view/
        defaultProps: {},
        styleOverrides: {
          root: {}, // Styles applied to the root element
        },
      },
    },
  }
}
