import { Center, Grid } from '@chakra-ui/react'
import SecondBanner from 'components/second-banner/SecondBanner'

const ContainerSecondBaner = () => {
  return (
    <>
      <Center mt={75}>
        <Grid w={1300} position="relative">
          <SecondBanner />
        </Grid>
      </Center>
    </>
  )
}

export default ContainerSecondBaner
