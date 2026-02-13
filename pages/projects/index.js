import { Container, Heading, SimpleGrid, Box, Text, useColorModeValue } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import NextLink from 'next/link'
import Image from 'next/image'

const ProjectCard = ({ slug, title, thumbnail }) => {
  const bg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')
  const hoverBg = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')
  const placeholderBg = useColorModeValue('gray.200', 'gray.700')

  return (
    <NextLink href={`/projects/${slug}`}>
      <Box
        bg={bg}
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        _hover={{ bg: hoverBg, transform: 'translateY(-2px)' }}
        transition="all 0.2s"
      >
        {thumbnail ? (
          <Box w="100%" h="180px" position="relative">
            <Image src={thumbnail} alt={title} fill style={{ objectFit: 'cover' }} />
          </Box>
        ) : (
          <Box w="100%" h="180px" bg={placeholderBg} />
        )}
        <Box p={4}>
          <Text fontWeight="bold" fontSize="md">{title}</Text>
        </Box>
      </Box>
    </NextLink>
  )
}

const Projects = ({ projects }) => (
  <Layout title="Research Projects">
    <Container maxW="960px">
      <Heading as="h3" fontSize={20} mb={6} mt={8}>
        Select Research Projects
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap={6}>
          {projects.map(p => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export async function getServerSideProps({ req }) {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')

  const projectsDir = path.join(process.cwd(), 'content/projects')
  const files = fs.readdirSync(projectsDir)
  const projects = files
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(projectsDir, filename), 'utf8')
      const { data } = matter(raw)
      return { slug, ...data }
    })

  return {
    props: {
      cookies: req.headers.cookie ?? '',
      projects
    }
  }
}

export default Projects
