import { Container, Heading, Box, Text, Link, Badge, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

const SelectLabel = () => {
  const color = useColorModeValue('#6B46C1', '#E76F51')
  return (
    <Text fontSize="xs" fontWeight="bold" color={color} textTransform="uppercase" letterSpacing="wider" mb={2}>
      ★ Select Paper
    </Text>
  )
}

const PublicationItem = ({
  thumbnail,
  title,
  authors,
  highlightName,
  venue,
  description,
  paperUrl,
  projectUrl,
  codeUrl,
  selected
}) => {
  const highlightColor = useColorModeValue('#6B46C1', '#E76F51')
  const selectedBg = useColorModeValue('rgba(107, 70, 193, 0.08)', 'rgba(231, 111, 81, 0.1)')
  const selectedBorder = useColorModeValue('rgba(107, 70, 193, 0.4)', 'rgba(231, 111, 81, 0.4)')

  const renderAuthors = () => {
    if (!highlightName) return authors
    return authors.split(highlightName).reduce((acc, part, i, arr) => {
      acc.push(part)
      if (i < arr.length - 1) {
        acc.push(
          <Text as="span" key={i} fontWeight="bold" color={highlightColor}>
            {highlightName}
          </Text>
        )
      }
      return acc
    }, [])
  }

  return (
    <Box
      display={{ md: 'flex' }}
      gap={4}
      mb={8}
      alignItems="center"
      bg={selected ? selectedBg : 'transparent'}
      border={selected ? `1px solid ${selectedBorder}` : 'none'}
      borderRadius={selected ? 'md' : 'none'}
      p={selected ? 4 : 0}
    >
      {thumbnail && (
        <Box flexShrink={0} mb={{ base: 3, md: 0 }}>
          <Image
            src={thumbnail}
            alt={title}
            width={120}
            height={90}
            style={{ objectFit: 'cover', borderRadius: '4px' }}
          />
        </Box>
      )}
      <Box>
        <Text fontWeight="bold" fontSize="md" mb={1}>
          {title}
        </Text>
        <Text fontSize="sm" color="gray.500" mb={1}>
          {renderAuthors()}
        </Text>
        <Box display="flex" alignItems="center" gap={2} mb={2} flexWrap="wrap">
          <Text fontSize="sm" fontStyle="italic">
            {venue}
          </Text>
          {projectUrl && (
            <Link href={projectUrl} isExternal>
              <Badge colorScheme="teal" cursor="pointer">project</Badge>
            </Link>
          )}
          {paperUrl && (
            <Link href={paperUrl} isExternal>
              <Badge colorScheme="teal" cursor="pointer">paper</Badge>
            </Link>
          )}
          {codeUrl && (
            <Link href={codeUrl} isExternal>
              <Badge colorScheme="teal" cursor="pointer">code</Badge>
            </Link>
          )}
        </Box>
        <Text fontSize="sm">{description}</Text>
      </Box>
    </Box>
  )
}

const Publications = () => (
  <Layout title="Publications">
    <Container maxW="960px">
      <Heading as="h3" fontSize={20} mb={10} mt={8}>
        Publications
      </Heading>
      <Section delay={0.1}>
        <PublicationItem
          thumbnail="/images/Paper/Hardware_trojan.gif"
          title="Reliability Enhancement of Hardware Trojan Detection using Histogram Augmentation Technique"
          authors="Vaishnavi Sankar, S Balachander, M Jayakumar, Nirmala Devi M"
          highlightName="S Balachander"
          venue="IEEE VLSID, 2023"
          description="Histogram-based augmentation for hardware Trojan detection to mitigate data scarcity and design bias through consistent synthetic data generation."
          paperUrl="https://ieeexplore.ieee.org/abstract/document/10089912"
        />
        <SelectLabel />
        <PublicationItem
          thumbnail="/images/Paper/HAT.png"
          selected
          title="Feature‐based augmentation and classification for tabular data"
          authors="Balachander Sathianarayanan, Yogesh Chandra Singh Samant, Prahalad S Conjeepuram Guruprasad, Varshin B Hariharan, Nirmala Devi Manickam"
          highlightName="Balachander Sathianarayanan"
          venue="IET CAAI, 2022"
          description="We present a feature-based augmentation approach (HAT) for tabular data, using distribution-preserving synthetic data to improve accuracy while outperforming CTGAN and SMOTE with lower computational cost."
          paperUrl="https://ietresearch.onlinelibrary.wiley.com/doi/pdf/10.1049/cit2.12123"
          codeUrl="https://github.com/balachander27/FEBA"
        />
        <PublicationItem
          thumbnail="/images/Paper/Hardware_trojan.jpg"
          title="Hardware trojan detection using XGBoost algorithm for IoT with data augmentation using CTGAN and SMOTE"
          authors="CG Prahalad Srinivas, S Balachander, Yogesh Chandra Singh Samant, B Varshin Hariharan, M Nirmala Devi"
          highlightName="S Balachander"
          venue="EAI UBICNET (Springer), 2021"
          description="We present an XGBoost-based method for hardware Trojan detection in integrated circuits, achieving improved accuracy through feature-driven classification."
          paperUrl="https://link.springer.com/chapter/10.1007/978-3-030-79276-3_10"
        />
        <PublicationItem
          thumbnail="/images/Paper/Submarine.gif"
          title="Design and Construction of a Submarine Miniature"
          authors="G Kalyana Abenanth, Balachander S, Sivakarthikeyan U, Avinash Subramaniam M and Aravinth.J"
          highlightName="Balachander S"
          venue="IEEE - ICCSP, 2020"
          description="Designed and fabricated a miniature remotely operated submarine, demonstrating stable underwater operation and control through experimental testing."
          paperUrl="https://ieeexplore.ieee.org/abstract/document/9182355"
        />
      </Section>
    </Container>
  </Layout>
)

export default Publications
export { getStaticProps } from '../components/chakra'
