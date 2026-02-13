import { useState } from 'react'
import { Container, Heading, Box, Button, Collapse, useColorModeValue } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const proseStyles = {
  'h1': { fontSize: '1.6rem', fontWeight: 'bold', mt: 8, mb: 3 },
  'h2': { fontSize: '1.4rem', fontWeight: 'bold', mt: 8, mb: 3 },
  'h3': { fontSize: '1.2rem', fontWeight: 'bold', mt: 6, mb: 2 },
  'p': { mb: 4, lineHeight: 1.8 },
  'ul, ol': { pl: 6, mb: 4 },
  'li': { mb: 1 },
  'strong': { fontWeight: 'bold' },
  'code': { bg: 'whiteAlpha.200', px: 1, borderRadius: 'sm', fontSize: '0.9em' },
  'pre': { bg: 'whiteAlpha.100', p: 4, borderRadius: 'md', overflow: 'auto', mb: 4 },
  'hr': { my: 6, borderColor: 'whiteAlpha.200' },
  'video': { borderRadius: '6px', mt: 3 },
}

const ProjectPage = ({ title, contentHtml, fullContentHtml }) => {
  const [showFull, setShowFull] = useState(false)
  const proseColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const collapseBorderColor = useColorModeValue('gray.200', 'whiteAlpha.200')

  return (
    <Layout title={title}>
      <Container maxW="960px" px={{ base: 4, md: 8 }}>
        <Section delay={0.1}>
          <Heading as="h2" fontSize={28} mb={6} mt={8}>{title}</Heading>
          <Box
            color={proseColor}
            sx={proseStyles}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {fullContentHtml && (
            <>
              <Button
                mt={4}
                mb={2}
                size="sm"
                bg="cyan.400"
                color="black"
                fontWeight="bold"
                px={4}
                _hover={{ bg: 'cyan.300' }}
                onClick={() => setShowFull(v => !v)}
              >
                {showFull ? 'Hide full writeup ↑' : 'Read the full writeup ↓'}
              </Button>
              <Collapse in={showFull} animateOpacity>
                <Box
                  mt={2}
                  pt={4}
                  borderTop="1px solid"
                  borderColor={collapseBorderColor}
                  color={proseColor}
                  sx={proseStyles}
                  dangerouslySetInnerHTML={{ __html: fullContentHtml }}
                />
              </Collapse>
            </>
          )}
        </Section>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')

  const projectsDir = path.join(process.cwd(), 'content/projects')
  const files = fs.readdirSync(projectsDir)
  const paths = files
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(projectsDir, filename), 'utf8')
      const { data } = matter(raw)
      return data.linked === false ? null : { params: { slug } }
    })
    .filter(Boolean)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')
  const { remark } = await import('remark')
  const { default: html } = await import('remark-html')

  const projectsDir = path.join(process.cwd(), 'content/projects')
  const filePath = path.join(projectsDir, `${params.slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  const parts = content.split('<!-- MORE -->')
  const summary = parts[0].trim()
  const full = parts[1] ? parts[1].trim() : null

  const toHtml = async (text) => (await remark().use(html, { sanitize: false }).process(text)).toString()

  const contentHtml = await toHtml(summary)
  const fullContentHtml = full ? await toHtml(full) : null

  return {
    props: { ...data, contentHtml, fullContentHtml }
  }
}

export default ProjectPage
