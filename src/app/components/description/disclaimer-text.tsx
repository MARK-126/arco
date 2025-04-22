'use client'

import { Center, Grid, Text } from '@chakra-ui/react'

const DisclaimerDescription = () => {
  return (
    <Center mt={20}>
      <Grid w={1000}>
        <Text fontWeight="bold" fontSize="48px" textAlign="center">
          Sobre las actividades
        </Text>
        <Text color="gray.600" fontSize="xl" lineHeight="tall" textAlign="center">
          Todas estas posibilidades de aventura en montaña, cuentan con una dificultad media para quienes intentan la
          travesía. Además, la Posta se encuentra a 20 minutos del kilómetro 0 de la ciudad de Mendoza, pasando por el
          Parque General San Martín y estadio Malvinas Argentinas.
        </Text>
      </Grid>
    </Center>
  )
}

export default DisclaimerDescription
