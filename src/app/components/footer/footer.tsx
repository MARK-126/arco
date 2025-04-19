'use client'

import { Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { RiInstagramFill } from 'react-icons/ri'

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
      alignItems="center"
    >
      <GridItem>
        <Stack>
          <Text fontWeight="bold" fontSize={22}>
            Informacion de Contacto
          </Text>
          <Flex
            alignItems="center"
            gap={2}
            fontWeight="bold"
            cursor="default"
            transition="transform 0.3s ease, color 0.3s ease"
            _hover={{
              color: 'orange',
              transform: 'translateY(-2px)',
            }}
          >
            <IoLogoWhatsapp size={30} />
            +542615170000
          </Flex>
        </Stack>
      </GridItem>
      <GridItem>
        <Stack>
          <Text>Arcontainer</Text>
        </Stack>
      </GridItem>
      <GridItem>
        <Text fontWeight="bold" fontSize={22}>
          Redes
        </Text>
        <Flex
          alignItems="center"
          gap={2}
          fontWeight="bold"
          transition="transform 0.3s ease, color 0.3s ease"
          _hover={{
            color: 'orange',
            transform: 'translateY(-2px)',
          }}
          cursor="default"
        >
          <RiInstagramFill size={30} />
          Arcontainer.ok
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default Footer
