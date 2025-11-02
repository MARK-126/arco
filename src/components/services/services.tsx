import { Box, Center, Grid, Stack, Text } from '@chakra-ui/react'
import { FaWifi } from 'react-icons/fa'
import { MdBathroom, MdFoodBank } from 'react-icons/md'

const Services = () => {
  return (
    <Center mt={20} flexDirection="column" gap={10}>
      <Grid w={800} templateColumns="1fr 1fr" rowGap={10} columnGap={10}>
        <Stack textAlign="center">
          <Text fontSize="22px" fontWeight="bold">
            Gastronomía deportiva
          </Text>
          <Text fontSize="18px">
            Dado que estás enfocado en el trekking y mountain bike, es clave que el menú esté adaptado a las necesidades
            de los deportistas. Ofrecemos opciones saludables, energéticas, y reconstituyentes.
          </Text>
        </Stack>
        <Box display="flex" justifyContent="center" alignItems="center" w="100%">
          <MdFoodBank size={120} style={{ color: 'orange' }} />
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" w="100%">
          <MdBathroom size={120} style={{ color: 'orange' }} />
        </Box>
        <Stack textAlign="center">
          <Text fontSize="22px" fontWeight="bold">
            Infraestructura
          </Text>
          <Text fontSize="18px">
            Posta de los Rio está construida con Contenedores Marítimos y cuenta con baños habilitados, agua potable,
            dos cocinas, una sala de estar cerrada y un patio abierto, churrasquera y horno de barro.
          </Text>
        </Stack>

        <Stack textAlign="center">
          <Text fontSize="22px" fontWeight="bold">
            Conexión a internet
          </Text>
          <Text fontSize="18px">
            También está equipada con tecnología para que los grupos puedan compartir fotos de sus aventuras o relajarse
            con un poco de entretenimiento.
          </Text>
        </Stack>
        <Box display="flex" justifyContent="center" w="100%">
          <FaWifi size={120} style={{ color: 'orange' }} />
        </Box>
      </Grid>
    </Center>
  )
}

export default Services
