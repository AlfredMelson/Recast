import { styled } from '@mui/material/styles'

export const Navigation = styled('nav')(({ theme }) => ({
  '& ul': {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
  },
  '& li': {
    ...theme.typography.body2,
    fontWeight: 600,
    '& > a, & > div': {
      display: 'block',
      color: theme.palette.text.secondary,
      textDecoration: 'none',
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      '&:hover, &:focus': {
        color: theme.palette.text.primary,
        backgroundColor:
          theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'initial',
        },
      },
    },
    '& > div': {
      cursor: 'default',
    },
  },
}))
