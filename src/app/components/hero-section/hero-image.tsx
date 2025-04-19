import { AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'

const Heroimage = () => {
  return (
    <AspectRatio w="100%" ratio={21 / 9} zIndex="1" maxH="750px">
      <Image src="/images/banner.png" style={{ objectFit: 'cover' }} alt="hero-image" width={1000} height={50} />
    </AspectRatio>
  )
}

export default Heroimage
