import { Button, Center, FormControl, FormLabel, Grid, Input, Stack, Text, Textarea } from '@chakra-ui/react'

const FormContact = () => {
  return (
    <Center mt={30}>
      <Grid width={800}>
        <Text fontSize={48} fontWeight="bold">
          Envianos un mensaje
        </Text>
        <Stack gap={25}>
          <FormControl isRequired>
            <FormLabel>Nombre y Apellido</FormLabel>
            <Input placeholder="Tu nombre completo" border="2px solid orange" borderRadius="6px" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Tu mail..." border="2px solid orange" borderRadius="6px" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Textarea placeholder="Tu mensaje..." border="2px solid orange" borderRadius="6px" />
          </FormControl>

          <Button
            variant="outline"
            color="orange"
            borderColor="orange"
            border="2px solid"
            fontWeight="bold"
            _hover={{ bgColor: 'orange', color: 'white' }}
          >
            Enviar
          </Button>
        </Stack>
      </Grid>
    </Center>
  )
}

export default FormContact
