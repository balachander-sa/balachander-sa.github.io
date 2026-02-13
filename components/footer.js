import { Box, Link} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="xs">
      Website credits to{' '}
      <Link href='https://www.craftz.dog/' isExternal textDecoration="underline">
        Takuya Matsuyama
      </Link>
      {' • '}
      3D model credits to{' '}
      <Link href='https://skfb.ly/ErQv' isExternal textDecoration="underline">
        Tzeshi
      </Link>{' '}
    </Box>
    
  )
}

export default Footer
