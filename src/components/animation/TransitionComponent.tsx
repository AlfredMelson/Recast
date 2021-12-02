import Collapse from '@mui/material/Collapse'
// web.cjs is required for IE11 support
import { useSpring, animated } from 'react-spring'
import { TransitionProps } from '@mui/material/transitions'

export function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(40px,0,0)',
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 40}px,0,0)`,
    },
  })

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  )
}
