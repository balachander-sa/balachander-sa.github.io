import { Container, Heading, Box, Text, Divider, Badge, Link, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const SectionCard = ({ title, children }) => {
  const bg = useColorModeValue('#D6CBBF', '#2D2D2D')
  const border = useColorModeValue('rgba(0,0,0,0.08)', 'whiteAlpha.100')
  return (
    <Box
      bg={bg}
      border="1px solid"
      borderColor={border}
      borderRadius="lg"
      p={{ base: 4, md: 6 }}
      mb={6}
    >
      <Heading as="h4" fontSize="xl" mb={5}>{title}</Heading>
      {children}
    </Box>
  )
}

const CVItem = ({ date, location, degree, institution, suffix, coursework, bullets, last }) => {
  const accentColor = useColorModeValue('#7C3238', '#E76F51')
  const dateBg = useColorModeValue('rgba(124, 50, 56, 0.06)', 'rgba(231, 111, 81, 0.06)')
  const dateBorder = useColorModeValue('rgba(124, 50, 56, 0.3)', 'rgba(231, 111, 81, 0.3)')
  const dateText = useColorModeValue('#7C3238', '#E76F51')
  const dividerColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  const subTextColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box>
      <Box
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        gap={{ base: 1, sm: 6 }}
        py={4}
        alignItems="flex-start"
      >
        <Box minW={{ base: 'unset', sm: '140px' }} flexShrink={0} mb={{ base: 1, sm: 0 }}>
          <Badge
            bg={dateBg}
            color={dateText}
            border="1px solid"
            borderColor={dateBorder}
            fontSize="xs"
            px={2}
            py={1}
            borderRadius="sm"
            mb={1}
          >
            {date}
          </Badge>
          {location && (
            <Text fontSize="xs" color="gray.500" mt={1}>{location}</Text>
          )}
        </Box>
        <Box flex={1} minW={0}>
          <Text fontSize="md" color={accentColor}>
            <Text as="span" fontWeight="bold">{institution}</Text>
            {suffix && <Text as="span" fontWeight="normal">{suffix}</Text>}
          </Text>
          {degree && <Text fontSize="sm" color={subTextColor} mt={0.5}>{degree}</Text>}
          {coursework && coursework.map((c, i) => (
            <Box key={i} display="flex" alignItems="flex-start" mt={1.5}>
              <Text mr={2} mt={0.5} fontSize="sm" flexShrink={0}>◦</Text>
              <Text fontSize="sm" color={subTextColor}>{c}</Text>
            </Box>
          ))}
          {bullets && bullets.map((b, i) => (
            <Box key={i} display="flex" alignItems="flex-start" mt={1.5}>
              <Text mr={2} mt={0.5} fontSize="sm" flexShrink={0}>◦</Text>
              <Text fontSize="sm">{b}</Text>
            </Box>
          ))}
        </Box>
      </Box>
      {!last && <Divider borderColor={dividerColor} />}
    </Box>
  )
}

const Experience = () => (
  <Layout title="Experience">
    <Container maxW="960px" px={{ base: 4, md: 8 }}>
      <Section delay={0.1}>
        <SectionCard title="Education">
          <CVItem
            date="Sep 2023 – Dec 2024"
            location="New York, NY"
            degree="Master of Science in Electrical Engineering"
            institution="Columbia University"
          />
          <CVItem
            date="Jul 2017 – Jul 2021"
            location="Coimbatore, India"
            degree="Bachelor of Technology in Electronics and Communication Engineering"
            institution="Amrita Vishwa Vidyapeetham"
            last
          />
        </SectionCard>

        <SectionCard title="Work Experience">
          <CVItem
            date="Jul 2025 – Feb 2026"
            location="Remote"
            institution="NamastAI Project (Certh India)"
            degree="Freelancing Tech Consultant"
            bullets={[
              'Built scalable data ingestion pipelines on Google Cloud (GCS + BigQuery) for clinical analytics, replacing prototype pandas/SQL workflows',
              'Developed ML-driven pose estimation models for yoga posture correction, generating decision-support insights for physiotherapists'
            ]}
          />
          <CVItem
            date="May 2024 – Dec 2024"
            location="New York, NY"
            institution="Columbia University, Center for Smart Streetscapes (NSF ERC)"
            degree="Research Assistant"
            bullets={[
              'Built a 4D reconstruction pipeline from multi-camera traffic footage using DUSt3R and Metric3D, handling temporal synchronization and corrupted frame detection across diverse camera setups',
              'Designed a YOLOv10-based 3D object detection and pose estimation pipeline, achieving 98% accuracy on cars and 90% on pedestrians across 5TB of annotated data',
              'Developed a depth-conditioned image augmentation pipeline using Stable Diffusion, ControlNet-depth, and Depth Anything to generate geometrically consistent synthetic driving data'
            ]}
          />
          <CVItem
            date="Oct 2021 – Mar 2023"
            location="Chennai, India"
            institution="Indian Institute of Technology Madras"
            degree="Project Associate"
            bullets={[
              'Designed and built custom LED array hardware for near-field photometric stereo, targeting 3D surface reconstruction for medical imaging',
              'Trained and evaluated deep learning models on endoscopic prototype captures, reducing mean angular error to 17° and depth error to 0.25mm',
              'Implemented physics-based light source calibration from a 24 LED to a 6-LED photometric stereo setup'
            ]}
          />
          <CVItem
            date="Apr 2021 – Sep 2021"
            location="Chennai, India"
            institution="Workhall (formerly Vuram)"
            degree="Associate Technical Consultant, ML"
            bullets={[
              'Built production ETL pipelines for document processing (OCR extraction, clustering, automated retraining), improving throughput by 25%',
              'Developed a deep learning pipeline in Keras for extracting structured components from hand-drawn forms, achieving 15% accuracy improvement'
            ]}
            last
          />
        </SectionCard>

        <SectionCard title="Awards & Achievements">
          <CVItem
            date="2021"
            institution="Post-Baccalaureate Fellowship"
            suffix={<> — <Link href="https://rbcdsai.iitm.ac.in/people/balachander-s/" isExternal textDecoration="underline">RBCDSAI</Link></>}
            degree="AI Research Lab • IIT Madras"
          />
          <CVItem
            date="2020"
            institution="1st Place"
            suffix={<> — <Link href="https://web.archive.org/web/20200918135415/https://www.sih.gov.in/SoftwarefinalResult2020" isExternal textDecoration="underline">Smart India Hackathon 2020</Link></>}
            degree="Team Lead • 334 winners from 200,000+ teams nationwide"
          />
          <CVItem
            date="2020"
            institution="Team Lead"
            suffix=" — Smart Home Automation (Cisco ThingQbator)"
            degree="Top 20/1000 teams • Startup incubator program"
          />
          <CVItem
            date="2020"
            institution="Head Organizer"
            suffix=" — Image Processing and Neural Networks Workshop"
            degree="Amrita Vishwa Vidyapeetham"
            last
          />
        </SectionCard>
      </Section>
    </Container>
  </Layout>
)

export default Experience
export { getStaticProps } from '../components/chakra'
