import { Box, Center, Flex, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'
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
            <Box
              key={index}
              h="auto"
              w="250px"
              textAlign="center"
              boxShadow="3px 3px 10px rgba(0, 0, 0, 0.2)"
              borderRadius="md"
              overflow="hidden"
              transition="transform 0.3s ease, boxShadow 0.3s ease"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '0px 0px 15px orange',
              }}
            >
              <Image
                src={card.image}
                alt=""
                width={500}
                height={100}
                style={{
                  objectFit: 'cover',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                }}
              />
              <Box w="100%" h="75px" display="flex" justifyContent="center" alignItems="center">
                <Text fontSize="2xl" fontWeight="bold">
                  {card.title}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Grid>
    </Center>
  )
}

export default Highlights
