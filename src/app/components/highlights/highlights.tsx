import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
const highlightsCards = [
  { title: 'Naturalez', image: '/images/zorros.png' },
  { title: 'Cabalgatas', image: '/images/cabalgata-solo.png' },
  { title: 'Fogones', image: '/images/fogon.png' },
]

const Highlights = () => {
  return (
    <>
      <Flex h="20dvh" alignItems="center" justifyContent="center">
        <Text fontSize="4xl" fontWeight="bold">
          Vení a disfrutar de la montaña
        </Text>
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }} justifyContent="center" gap={100}>
        {highlightsCards.map((card, index) => (
          <Box
            key={index}
            h="auto"
            w="300px"
            textAlign="center"
            boxShadow="3px 3px 10px rgba(0, 0, 0, 0.2)"
            borderRadius="md"
            overflow="hidden"
            transition="transform 0.3s ease, boxShadow 0.3s ease"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: '5px 5px 15px orange',
            }}
          >
            <Image src={card.image} alt="" width={500} height={100} />
            <Box w="100%" h="75px" display="flex" justifyContent="center" alignItems="center">
              <Text fontSize="2xl" fontWeight="bold">
                {card.title}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  )
}

export default Highlights
