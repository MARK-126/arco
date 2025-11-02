import { Stack, Text } from '@chakra-ui/react'
import HeroImage from 'components/hero-section/HeroImage'

const HeroSection = () => {
  return (
    <>
      <Stack position="relative" justifyContent="center" alignItems="center" maxH={'650px'} id="hero-section">
        <HeroImage />
        <Text fontSize={100} fontWeight="bold" position="absolute" zIndex={1} color="white" justifyItems="center">
          Posta de los Rio
        </Text>
      </Stack>
    </>
  )
}

export default HeroSection
