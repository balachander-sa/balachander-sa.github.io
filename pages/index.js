import {
  Link,
  Container,
  Heading,
  Box,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container maxW={{ base: '100%', md: '800px', xl: '960px' }} px={{ base: 4, md: 8 }}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        3D Computer Vision | Active illumination | Multi-view geometry | Generative models
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Balachander
            <br />
            <span style={{ fontSize: '75%' }}>Sathianarayanan</span>
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor={useColorModeValue('#2C7A7B', 'whiteAlpha.800')}
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/Bala_profile_pic.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" textAlign="left">
          About
        </Heading>
        <Paragraph>
          I work on 3D computer vision under real-world constraints, where
          standard assumptions—dense views, perfect synchronization, and
          controlled lighting—often break down. At Columbia, I worked with
          the{' '}
          <Link href="https://cs3-erc.org/" target="_blank">
            CS3 team
          </Link>{' '}
          under Professor{' '}
          <Link
            href="https://www.aidl.ee.columbia.edu/people/zk-my-page"
            target="_blank"
          >
            Zoran Kostic
          </Link>{' '}
          on traffic scene reconstruction and vision pipelines.
        </Paragraph>
        <br />
        <Paragraph>
          Previously a Research Fellow at{' '}
          <Link href="https://rbcdsai.iitm.ac.in" target="_blank">
            RBCDSAI
          </Link>
          , IIT Madras for 1.5 years, advised by Professor{' '}
          <Link href="https://www.ee.iitm.ac.in/kmitra/" target="_blank">
            Kaushik Mitra
          </Link>
          , where I designed and built custom 3D photometric stereo imaging
          systems for medical applications.
        </Paragraph>
        <br />
        <Paragraph>
          My work lies at the intersection of 3D vision, multi-view geometry,
          and computational imaging, with a growing interest in extending these
          systems to 4D scene understanding using generative models.
        </Paragraph>
        <Box
          mt={10}
          mb={10}
          display="flex"
          flexWrap="nowrap"
          gap={6}
          alignItems="center"
          justifyContent="center"
        >
          <Link href="https://www.columbia.edu/" target="_blank">
            <Image
              src="/images/corp_logos/Columbia.jpg"
              alt="Columbia University"
              width={144}
              height={72}
              style={{ objectFit: 'contain', width: 144, height: 72 }}
            />
          </Link>
          <Link href="https://www.iitm.ac.in/" target="_blank">
            <Image
              src="/images/corp_logos/IIT_M.svg"
              alt="IIT Madras"
              width={120}
              height={60}
              unoptimized
              style={{ objectFit: 'contain', width: 120, height: 60 }}
            />
          </Link>
          <Link href="https://cs3-erc.org/" target="_blank">
            <Image
              src="/images/corp_logos/CS3.jpeg"
              alt="CS3"
              width={144}
              height={72}
              style={{ objectFit: 'contain', width: 144, height: 72 }}
            />
          </Link>
          <Link href="https://rbcdsai.iitm.ac.in" target="_blank">
            <Image
              src="/images/corp_logos/RBCDSAI.jpeg"
              alt="RBCDSAI"
              width={144}
              height={72}
              style={{ objectFit: 'contain', width: 144, height: 72 }}
            />
          </Link>
          <Link href="https://mopng.gov.in/en" target="_blank">
            <Image
              src="/images/corp_logos/Emblem_of_India.jpeg"
              alt="Government of India"
              width={72}
              height={72}
              style={{ objectFit: 'contain', width: 72, height: 72 }}
            />
          </Link>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" textAlign="left">
          Research Interests
        </Heading>
        <List spacing={3}>
          <ListItem>
            <strong>3D Reconstruction &amp; Multi-View Geometry</strong>
            <br />
            Understanding and reconstructing visual scenes from multi-view and sparse inputs, including depth estimation, point cloud generation, and scene consistency.
          </ListItem>
          <ListItem>
            <strong>Computational Imaging &amp; Active Illumination</strong>
            <br />
            Designing imaging systems that combine optical hardware, structured lighting, and computational methods to recover geometry and surface properties beyond what passive cameras capture.
          </ListItem>
          <ListItem>
            <strong>Geometry-Conditioned Generative Models</strong>
            <br />
            Leveraging diffusion models with geometric priors like depth and surface normals for 3D-consistent data augmentation and scene understanding.
          </ListItem>
        </List>
      </Section>

    </Container>
  </Layout>
)

export default Home
export { getStaticProps } from '../components/chakra'
