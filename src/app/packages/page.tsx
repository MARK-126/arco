'use client'

import { Box, Center, Grid, Text, Spinner, Alert, AlertIcon, IconButton } from '@chakra-ui/react'
import PackageCard from 'components/packages/PackageCard'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

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
  created_at: string
  updated_at: string
}

const PackagesPage = () => {
  const [packages, setPackages] = useState<TourPackage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/packages?is_active=true')
        const data = await response.json()

        if (data.success) {
          setPackages(data.data)
        } else {
          setError('Error al cargar los paquetes')
        }
      } catch (err) {
        setError(`No se pudo conectar con el servidor: ${err}`)
      } finally {
        setLoading(false)
      }
    }

    fetchPackages()
  }, [])

  if (loading) {
    return (
      <Center minH="60vh">
        <Spinner size="xl" color="orange.500" thickness="4px" />
      </Center>
    )
  }

  if (error) {
    return (
      <Center minH="60vh" px={4}>
        <Alert status="error" borderRadius="md" maxW="600px">
          <AlertIcon />
          {error}
        </Alert>
      </Center>
    )
  }

  return (
    <Center minH="100vh" py={20}>
      <Grid w={{ base: '100%', lg: 1200 }} gap={10} px={4} position="relative">
        <IconButton
          aria-label="Volver atrás"
          icon={<ArrowBackIcon />}
          position="absolute"
          top={{ base: -10, md: 0 }}
          left={{ base: 4, md: 0 }}
          size="lg"
          colorScheme="orange"
          variant="ghost"
          onClick={() => router.back()}
          _hover={{
            bg: 'orange.100',
            transform: 'translateX(-3px)',
          }}
          transition="all 0.2s"
        />

        <Box textAlign="center">
          <Text fontSize="5xl" fontWeight="bold" mb={4}>
            Nuestros Paquetes
          </Text>
          <Text fontSize="xl" color="gray.600">
            Descubrí todas las experiencias que tenemos para vos
          </Text>
        </Box>

        {packages.length === 0 ? (
          <Center>
            <Text fontSize="xl" color="gray.500">
              No hay paquetes disponibles en este momento
            </Text>
          </Center>
        ) : (
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={10}
            justifyItems="center"
            alignItems="start"
          >
            {packages.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </Grid>
        )}
      </Grid>
    </Center>
  )
}

export default PackagesPage
