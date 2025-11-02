import { AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'

const HeroImage = () => {
  return (
    <AspectRatio w="100%" ratio={21 / 9} zIndex="1" maxH="650px">
      <Image
        src="/images/banner.jpg"
        style={{
          objectFit: 'cover',
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        }}
        alt="hero-image"
        fill
        priority
        sizes="100vw"
        quality={85}
      />
    </AspectRatio>
  )
}

export default HeroImage
