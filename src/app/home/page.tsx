import { Stack } from '@chakra-ui/react'
import DisclaimerDescription from 'app/components/description/disclaimer-text'
import HeroSection from 'app/components/hero-section/hero-section'
import Highlights from 'app/components/highlights/highlights'
import ContainerSecondBaner from 'app/components/second-banner/container-second-banner'
import Services from 'app/components/services/services'

const Home = () => {
  return (
    <Stack gap={55}>
      <HeroSection />
      <Highlights />
      <DisclaimerDescription />
      <Services />
      <ContainerSecondBaner />
      <ContainerSecondBaner />
    </Stack>
  )
}

export default Home
