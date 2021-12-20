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
        transitionDuration: '150ms',
        ...(selected && {
          pt: 0.5,
          pb: 1,
          bgcolor: theme => (theme.palette.mode === 'dark' ? '#000000' : '#ffffff'),
          color: theme => (theme.palette.mode === 'dark' ? 'primary.400' : 'primary.500'),
        }),
        ...(!selected && {
          '&:hover': {
            bgcolor: theme => (theme.palette.mode === 'dark' ? '#000000' : 'grey.100'),
            '@media (hover: none)': {
              bgcolor: 'transparent',
            },
          },
        }),
        ...props.sx,
      }}
      {...props}
    />
  )
}
