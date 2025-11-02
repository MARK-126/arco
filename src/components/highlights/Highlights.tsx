import { Box, Center, Flex, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
const highlightsCards = [
  { title: 'Trekking', image: '/images/trekking.png' },
  { title: 'Mountain Bike', image: '/images/mountain-bike.png' },
  { title: 'Naturaleza', image: '/images/zorros.png' },
  { title: 'Fogones', image: '/images/fogon.png' },
]

const Highlights = () => {
  return (
    <Center>
      <Grid w={1200} gap={10} mt={100} justifyItems="center">
        <Text fontSize="5xl" fontWeight="bold">
          Vení a disfrutar de la montaña
        </Text>
        <Flex direction={{ base: 'column', md: 'row' }} justifyContent="center" gap={10}>
          {highlightsCards.map((card, index) => (
            <Link key={index} href="/packages" style={{ textDecoration: 'none' }}>
              <Box
                h="auto"
                w="250px"
                textAlign="center"
                boxShadow="3px 3px 10px rgba(0, 0, 0, 0.2)"
                borderRadius="md"
                overflow="hidden"
                transition="transform 0.3s ease, boxShadow 0.3s ease"
                cursor="pointer"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 0px 15px orange',
                }}
              >
                <Box position="relative" width="250px" height="400px">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="250px"
                    quality={80}
                    loading="lazy"
                    style={{
                      objectFit: 'cover',
                      maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    }}
                  />
                </Box>
                <Box w="100%" h="75px" display="flex" justifyContent="center" alignItems="center">
                  <Text fontSize="2xl" fontWeight="bold">
                    {card.title}
                  </Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Flex>
      </Grid>
    </Center>
  )
}

export default Highlights
