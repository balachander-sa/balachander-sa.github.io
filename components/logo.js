import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 33px;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  padding: 4px 8px;

  > img {
    transition: 200ms ease;
  }

  &:hover > img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const logoFilter = useColorModeValue('none', 'invert(1)')

  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <Image
          src="/images/Bala_logo.png"
          alt="Bala logo"
          width={54}
          height={54}
          style={{ objectFit: 'contain', filter: logoFilter }}
        />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          fontSize="2xl"
          ml={4}
        >
          Bala Chander
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
