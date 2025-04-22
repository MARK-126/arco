import { AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'

const SecondBanner = () => {
  return (
    <>
      <AspectRatio ratio={37 / 9}>
        <Image
          src="/images/second-banner.png"
          alt="second-banner"
          width={1000}
          height={100}
          style={{
            filter: 'blur(.5px)',
            objectFit: 'cover',
          }}
        />
      </AspectRatio>
    </>
  )
}

export default SecondBanner
