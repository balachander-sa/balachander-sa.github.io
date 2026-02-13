import { Container, Box, Text, Link, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

const IconButton = ({ href, src, alt, isExternal, iconBg, invertInDark }) => {
  const filter = useColorModeValue('none', invertInDark ? 'invert(1)' : 'none')
  return (
    <Link href={href} isExternal={isExternal}>
      <Box
        bg={iconBg}
        borderRadius="md"
        w="65px"
        h="65px"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        _hover={{ opacity: 0.7 }}
        transition="opacity 0.2s"
      >
        <Image src={src} alt={alt} width={34} height={34} style={{ filter }} />
      </Box>
    </Link>
  )
}

const Contact = () => {
  const iconBg = useColorModeValue('rgba(0,0,0,0.06)', 'whiteAlpha.100')

  return (
    <Layout title="Contact">
      <Container maxW="960px" px={{ base: 4, md: 8 }}>
        <Section delay={0.1}>
          <Box display="flex" flexDirection="column" alignItems="center" gap={4} mt={20} w="100%">
            <Text fontSize="md" textAlign="center">
              sabalachander99@gmail.com &nbsp;/&nbsp; bs3507@columbia.edu
            </Text>

            <Box display="flex" gap={6} mt={4}>
              <IconButton href="mailto:sabalachander99@gmail.com" src="/images/Icons/envelope-open.svg" alt="Email" iconBg={iconBg} invertInDark />
              <IconButton href="https://www.linkedin.com/in/balachander-sa/" src="/images/Icons/linkedin-logo.svg" alt="LinkedIn" isExternal iconBg={iconBg} invertInDark />
              <IconButton href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=Bx_NjrwAAAAJ" src="/images/Icons/graduation-cap.svg" alt="Google Scholar" isExternal iconBg={iconBg} invertInDark />
              <IconButton href="https://github.com/balachander-sa" src="/images/Icons/github-logo.svg" alt="GitHub" isExternal iconBg={iconBg} invertInDark />
            </Box>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Contact
export { getStaticProps } from '../components/chakra'
