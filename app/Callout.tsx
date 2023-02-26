import { Box } from '@ds-pack/components'
import { callout } from '@styles/app/root'

export default function Callout({ children }) {
  return <Box className={callout}>{children}</Box>
}
