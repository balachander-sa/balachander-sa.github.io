import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} width="100%" overflowX="hidden">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Balachander's homepage" />
        <meta name="author" content="Balachander Sathianarayanan" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <meta name="twitter:title" content="Balachander Sathianarayanan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Balachander Sathianarayanan" />
        <meta name="og:title" content="Balachander Sathianarayanan" />
        <meta property="og:type" content="website" />
        <title>Balachander Sathianarayanan - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="960px" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
