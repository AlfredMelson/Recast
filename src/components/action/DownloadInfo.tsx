import * as React from 'react'
import { alpha } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { TsInterfaceIcons } from '../api-json/TsInterfaceIcons'

export default function DownloadInfo({
  appeared,
  title,
  content,
  ...props
}: { appeared: boolean; content?: React.ReactElement } & BoxProps) {
  const [hidden, setHidden] = React.useState(true)
  const defaultContent = (
    <Box sx={{ pt: 9 }}>
      <Typography fontWeight='bold' color='grey.300' variant='body2'>
        {title}
      </Typography>
      <Typography color='grey.600' variant='body2'>
        interface
      </Typography>
      <Box sx={{ my: 1, textAlign: 'center' }}>
        <TsInterfaceIcons />
      </Box>
    </Box>
  )
  return (
    <Box
      {...props}
      sx={{
        position: 'absolute',
        bottom: 0,
        transform: hidden || !appeared ? 'translateX(100%)' : 'translateX(0)',
        transition: '0.3s',
        top: 0,
        right: 0,
        px: 2,
        pt: 1,
        pb: 2,
        bgcolor: ({ palette }) => alpha(palette.primaryDark[700], 0.5),
        backdropFilter: 'blur(8px)',
        zIndex: 1,
        borderLeft: '1px solid',
        borderColor: 'divider',
        borderRadius: '0 4px 4px 0',
        ...props.sx,
      }}>
      <IconButton
        aria-label={hidden ? 'show' : 'hide'}
        onClick={() => setHidden(bool => !bool)}
        sx={{
          position: 'absolute',
          zIndex: 2,
          transition: '0.3s',
          left: 10,
          top: 40,
          transform: hidden || !appeared ? 'translateX(-64px)' : 'translateX(20%)',
          opacity: appeared ? 1 : 0,
          bgcolor: 'primaryDark.500',
          '&:hover, &.Mui-focused': {
            bgcolor: 'primaryDark.600',
          },
        }}>
        {hidden ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
      </IconButton>
      {content || defaultContent}
    </Box>
  )
}

// export default function DownloadInfo({ appeared, title, content }: DownloadInfoProps) {
//   const [isOpen, toggleOpen] = useCycle(false, true)
//   const containerRef = React.useRef(null)

//   // const [hidden, setHidden] = React.useState(false)
//   const defaultContent = (
//     <Box sx={{ pt: 9 }}>
//       <Typography fontWeight='bold' color='grey.300' variant='body2'>
//         {title}
//       </Typography>
//       <Typography color='grey.600' variant='body2'>
//         interface
//       </Typography>
//       <Box sx={{ my: 1, textAlign: 'center' }}>
//         <TsInterfaceIcons />
//       </Box>
//     </Box>
//   )
//   console.log(appeared)
//   const Navigation = () => <motion.div>{content || defaultContent}</motion.div>

//   // const sidebar = {
//   //   open: {
//   //     visible: {
//   //       opacity: 1,
//   //       y: -100,
//   //     },
//   //     transition: {
//   //       type: 'spring',
//   //       stiffness: 20,
//   //       restDelta: 2,
//   //     },
//   //   },
//   //   closed: {
//   //     hidden: {
//   //       opacity: 0,
//   //       y: 100,
//   //     },
//   //     transition: {
//   //       delay: 0.5,
//   //       type: 'spring',
//   //       stiffness: 400,
//   //       damping: 40,
//   //     },
//   //   },
//   // }

//   return (
//     <motion.div initial={false} animate={isOpen ? 'open' : 'closed'} ref={containerRef}>
//       <motion.div
//         variants={{
//           hidden: {
//             opacity: 0,
//             x: 150,
//           },
//           visible: {
//             opacity: 1,
//             x: 0,
//             transition: {
//               duration: 0.6,
//             },
//           },
//           removed: {
//             opacity: 0,
//           },
//         }}
//         initial='hidden'
//         animate='visible'
//         exit='removed'
//         style={{
//           position: 'absolute',
//           bottom: 0,
//           top: 0,
//           right: 0,
//           padding: '0 14px',
//           backgroundColor: blue[700],
//           backdropFilter: 'blur(8px)',
//           zIndex: 1,
//           borderLeft: '1px solid',
//           borderColor: 'divider',
//           borderRadius: '0 4px 4px 0',
//         }}>
//         <Navigation />
//       </motion.div>
//     </motion.div>
//   )
// }
