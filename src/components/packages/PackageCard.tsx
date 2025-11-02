import { Box, Text, Badge, Flex } from '@chakra-ui/react'
import Image from 'next/image'

interface TourPackage {
  id: number
  name: string
  description: string
  activity_type: string
  difficulty: string
  duration_hours: number
  max_participants: number
  price: number
  location: string
  image_url: string
  is_active: boolean
}

interface PackageCardProps {
  package: TourPackage
}

const difficultyColors = {
  bajo: 'green',
  medio: 'orange',
  alto: 'red',
}

const activityTypeLabels: { [key: string]: string } = {
  trekking: 'Trekking',
  'mountain-bike': 'Mountain Bike',
  naturaleza: 'Naturaleza',
  fogon: 'Fogón',
}

const PackageCard = ({ package: pkg }: PackageCardProps) => {
  return (
    <Box
      w="350px"
      minH="580px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.3s ease, boxShadow 0.3s ease"
      bg="white"
      display="flex"
      flexDirection="column"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '0px 10px 25px rgba(255, 140, 0, 0.4)',
      }}
      id="box-grande"
    >
      <Box position="relative" width="100%" height="450px">
        <Image
          src={pkg.image_url}
          alt={pkg.name}
          fill
          sizes="350px"
          quality={85}
          style={{
            objectFit: 'cover',
          }}
          id="box-mediano"
        />
        <Box
          position="absolute"
          top={3}
          right={3}
          bg={difficultyColors[pkg.difficulty as keyof typeof difficultyColors]}
          color="white"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="sm"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {pkg.difficulty}
        </Box>
      </Box>

      <Box p={5}>
        <Flex justifyContent="space-between" alignItems="center" mb={2}>
          <Badge colorScheme="orange" fontSize="sm" px={2} py={1} borderRadius="md">
            {activityTypeLabels[pkg.activity_type] || pkg.activity_type}
          </Badge>
          <Text fontSize="sm" color="gray.600">
            {pkg.duration_hours}h
          </Text>
        </Flex>

        <Text fontSize="2xl" fontWeight="bold" mb={2} noOfLines={2}>
          {pkg.name}
        </Text>

        <Text fontSize="md" color="gray.600" mb={3} noOfLines={3}>
          {pkg.description}
        </Text>

        <Flex justifyContent="space-between" alignItems="center" mb={3}>
          <Text fontSize="sm" color="gray.500">
            📍 {pkg.location}
          </Text>
        </Flex>

        <Flex justifyContent="space-between" alignItems="center" pt={3} borderTop="1px" borderColor="gray.200">
          <Box>
            <Text fontSize="sm" color="gray.500">
              Precio
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="orange.500">
              ${pkg.price.toLocaleString('es-AR')}
            </Text>
          </Box>
          <Text fontSize="xs" color="gray.500">
            Máx. {pkg.max_participants} personas
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default PackageCard
