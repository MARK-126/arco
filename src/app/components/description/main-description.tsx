'use client'

import { AspectRatio, Center, Flex, Grid, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { MdOutlineArrowOutward } from 'react-icons/md'

const MainDescription = () => {
  return (
    <Center mt={10}>
      <Grid w={1000} gap={8} justifyItems="center">
        <Stack>
          <Text fontWeight="bold" fontSize={{ base: 36, md: 48 }} textAlign="center">
            Posta de los Rio
          </Text>
          <Text color="gray.600" fontSize="18px" lineHeight="tall" textAlign="center">
            Está situada a 15 minutos del centro de Las Heras, en el piedemonte, a 300 metros del Cerro Arco (1.870
            metros de altura con un desnivel desde la base de 543 metros) además, permite conectarse con el cerro
            Gateado, todo ubicado en un lugar geográfico por excelencia para disfrutar de la naturaleza, con flora y
            fauna autóctona y virgen. El emprendimiento se encuentra a 1 kilómetro de la famosa Quebrada del Manzano,
            popular y turísticamente conocida como Piedra de Isidris o Piedra Energética. Todas estas posibilidades de
            aventura en montaña, cuentan con una dificultad media para quienes intentan la travesía. Además, la Posta se
            encuentra a 20 minutos del kilómetro 0 de la ciudad de Mendoza, pasando por el Parque General San Martín y
            estadio Malvinas Argentinas.
          </Text>
        </Stack>
        <AspectRatio ratio={16 / 9} w="1000px" h="100%" minH="300px" borderRadius={16}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d11669.801132839502!2d-68.94546622559378!3d-32.858275103962775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e6!4m3!3m2!1d-32.8626767!2d-68.94197539999999!4m4!1s0x967dfd34784114eb%3A0xeeb74cfcc39a13e2!3m2!1d-32.851848!2d-68.935966!5e1!3m2!1ses!2sar!4v1745338567743!5m2!1ses!2sar"
            style={{ border: '2px solid', borderColor: 'rgba(165, 165, 165, 0.8)', borderRadius: '8px' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </AspectRatio>

        <Link
          href="https://maps.app.goo.gl/EVHU12GhNJWFs6k6A"
          style={{ textDecoration: 'none', width: 'auto', display: 'block', cursor: 'pointer' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flex
            bg="orange"
            color="white"
            alignItems="center"
            justifyContent="center"
            gap={2}
            cursor="pointer"
            border="1px solid orange"
            borderRadius="8px"
            transition="all 0.3s ease"
            p={3}
            _hover={{
              transform: 'scale(1.1)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Text fontWeight="bold">Abrir Google Maps</Text>
            <MdOutlineArrowOutward />
          </Flex>
        </Link>
      </Grid>
    </Center>
  )
}

export default MainDescription
