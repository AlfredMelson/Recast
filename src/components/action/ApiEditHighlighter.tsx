import Stack, { StackProps } from '@mui/material/Stack'

type ApiEditHighlighterAlias = {
  selected?: boolean
}

export default function ApiEditHighlighter({
  selected = false,
  ...props
}: ApiEditHighlighterAlias & StackProps) {
  return (
    <Stack
      sx={{
        transitionProperty: 'all',
        transitionDuration: '250ms',
        ...(selected && {
          paddingBottom: '10px',
          // borderRadius: '4px',
          // bgcolor: theme => (theme.palette.mode === 'dark' ? '#000000' : '#ffffff'),
        }),
        ...(!selected &&
          {
            // '&:hover': {
            //   bgcolor: theme => (theme.palette.mode === 'dark' ? '#000000' : 'grey.100'),
            //   '@media (hover: none)': {
            //     bgcolor: 'transparent',
            //   },
            // },
          }),
        ...props.sx,
      }}
      {...props}
    />
  )
}
