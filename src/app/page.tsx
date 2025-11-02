import dynamic from 'next/dynamic'
import { Stack } from '@chakra-ui/react'
import HeroSection from 'components/hero-section/HeroSection'

const Highlights = dynamic(() => import('components/highlights/Highlights'), {
  loading: () => <div style={{ height: '400px' }} />,
})
const DisclaimerDescription = dynamic(() => import('components/description/DisclaimerText'), {
  loading: () => <div style={{ height: '200px' }} />,
})
const Services = dynamic(() => import('components/services/services'), {
  loading: () => <div style={{ height: '400px' }} />,
})
const ContainerSecondBaner = dynamic(() => import('components/second-banner/ContainerSecondBanner'), {
  loading: () => <div style={{ height: '300px' }} />,
})

const HomePage = () => {
  return (
    <Stack gap={55}>
      <HeroSection />
      <Highlights />
      <DisclaimerDescription />
      <Services />
      <ContainerSecondBaner />
    </Stack>
  )
}

export default HomePage
