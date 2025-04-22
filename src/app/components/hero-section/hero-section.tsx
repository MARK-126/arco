import { Stack, Text } from '@chakra-ui/react'
import Heroimage from 'app/components/hero-section/hero-image'

const HeroSection = () => {
  return (
    <>
      <Stack position="relative" justifyContent="center" alignItems="center">
        <Heroimage />
        <Text fontSize={100} fontWeight="bold" position="absolute" zIndex={1} color="white" justifyItems="center">
          Posta de los Rio
        </Text>
      </Stack>
    </>
  )
}

export default HeroSection
