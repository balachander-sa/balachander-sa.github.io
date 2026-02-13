import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      fontSize="md"
      fontWeight="bold"
      borderBottom={active ? '2px solid' : 'none'}
      borderColor={active ? '#202023' : 'transparent'}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  const hamburgerBg = useColorModeValue('#2C7A7B', '#E76F51')
  const hamburgerHover = useColorModeValue('#235f60', '#d4623f')

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>

        <Flex align="center" gap={2} ml="auto">
          <Stack
            direction="row"
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            mt={0}
          >
            <LinkItem href="/projects" path={path}>
              Projects
            </LinkItem>
            <LinkItem href="/publications" path={path}>
              Publications
            </LinkItem>
            <LinkItem href="/experience" path={path}>
              Experience
            </LinkItem>
            <LinkItem href="/contact" path={path}>
              Contact
            </LinkItem>
          </Stack>

          <ThemeToggleButton />

          <Box ml={1} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                aria-label="Options"
                bg={hamburgerBg}
                color="white"
                _hover={{ bg: hamburgerHover }}
                _active={{ bg: hamburgerHover }}
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/projects">
                  Projects
                </MenuItem>
                <MenuItem as={MenuLink} href="/publications">
                  Publications
                </MenuItem>
                <MenuItem as={MenuLink} href="/experience">
                  Experience
                </MenuItem>
                <MenuItem as={MenuLink} href="/contact">
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
