'use client'

import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { RiInstagramFill } from 'react-icons/ri'
import { FaSquareFacebook } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { PiMountainsFill } from 'react-icons/pi'
import Link from 'next/link'

const Footer = () => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      h="250px"
      px="150px"
      gap={6}
      mt={20}
      borderTop="10px solid"
      borderColor="orange"
      justifyItems="center"
    >
      <GridItem mt={35} justifyItems="center">
        <PiMountainsFill size={75} />
        <Text fontSize={32} fontWeight="bold">
          Posta de los Rio
        </Text>
      </GridItem>

      <GridItem mt={30}>
        <Text fontWeight="bold" fontSize={22} mb={5}>
          Informacion de Contacto
        </Text>

        <Link href="https://wa.me/542613900390" target="_blank" rel="noopener noreferrer">
          <Flex
            alignItems="center"
            gap={2}
            fontWeight="bold"
            cursor="pointer"
            transition="transform 0.3s ease, color 0.3s ease"
            _hover={{
              color: 'orange',
              transform: 'translateY(-2px)',
            }}
          >
            <IoLogoWhatsapp size={30} />
            +542613900390
          </Flex>
        </Link>

        <Link href="https://wa.me/542617121634" target="_blank" rel="noopener noreferrer">
          <Flex
            alignItems="center"
            gap={2}
            fontWeight="bold"
            cursor="pointer"
            transition="transform 0.3s ease, color 0.3s ease"
            _hover={{
              color: 'orange',
              transform: 'translateY(-2px)',
            }}
          >
            <IoLogoWhatsapp size={30} />
            +542617121634
          </Flex>
        </Link>

        <Link
          href="https://mail.google.com/mail/?view=cm&fs=1&to=postadelosrio@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flex
            alignItems="center"
            gap={2}
            fontWeight="bold"
            cursor="pointer"
            transition="transform 0.3s ease, color 0.3s ease"
            _hover={{
              color: 'orange',
              transform: 'translateY(-2px)',
            }}
          >
            <IoMdMail size={30} />
            postadelosrio@gmail.com
          </Flex>
        </Link>
      </GridItem>

      <GridItem mt={30}>
        <Text fontWeight="bold" fontSize={22} mb={5} textUnderlineOffset="auto">
          Redes
        </Text>

        <Link href="https://www.instagram.com/posta.de.los.rio" target="_blank" rel="noopener noreferrer">
          <Flex
            alignItems="center"
            gap={2}
            fontWeight="bold"
            transition="transform 0.3s ease, color 0.3s ease"
            _hover={{
              color: 'orange',
              transform: 'translateY(-2px)',
            }}
            cursor="pointer"
          >
            <RiInstagramFill size={30} />
            posta.de.los.rios
          </Flex>
        </Link>

        <Link href="https://www.facebook.com/posta.de.los.rio" target="_blank" rel="noopener noreferrer">
          <Flex
            alignItems="center"
            gap={2}
            fontWeight="bold"
            transition="transform 0.3s ease, color 0.3s ease"
            _hover={{
              color: 'orange',
              transform: 'translateY(-2px)',
            }}
            cursor="pointer"
          >
            <FaSquareFacebook size={30} />
            posta.de.los.rio
          </Flex>
        </Link>
      </GridItem>
    </Grid>
  )
}

export default Footer
