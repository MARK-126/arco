'use client'

import { Button, Center, FormControl, FormLabel, Grid, Input, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import { useState } from 'react'

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: 'Mensaje enviado',
          description: data.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        })

        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          message: '',
          phone: '',
        })
      } else {
        toast({
          title: 'Error',
          description: data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        })
      }
    } catch (error) {
      toast({
        title: 'Error de conexión',
        description: 'No se pudo enviar el mensaje. Por favor intenta nuevamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
      alert(`Error: ${error}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Center mt={30} mb={50}>
      <Grid width={{ base: '90%', md: 800 }}>
        <Text fontSize={{ base: '36px', md: '48px' }} fontWeight="bold" mb={5}>
          Envianos un mensaje
        </Text>
        <form onSubmit={handleSubmit}>
          <Stack gap={25}>
            <FormControl isRequired>
              <FormLabel>Nombre y Apellido</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                border="2px solid orange"
                borderRadius="6px"
                _focus={{ borderColor: 'orange', boxShadow: '0 0 0 1px orange' }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                border="2px solid orange"
                borderRadius="6px"
                _focus={{ borderColor: 'orange', boxShadow: '0 0 0 1px orange' }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Teléfono (opcional)</FormLabel>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Tu número de teléfono"
                border="2px solid orange"
                borderRadius="6px"
                _focus={{ borderColor: 'orange', boxShadow: '0 0 0 1px orange' }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Mensaje</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribí tu consulta aquí..."
                border="2px solid orange"
                borderRadius="6px"
                minH="150px"
                _focus={{ borderColor: 'orange', boxShadow: '0 0 0 1px orange' }}
              />
            </FormControl>

            <Button
              type="submit"
              variant="outline"
              color="orange"
              borderColor="orange"
              border="2px solid"
              fontWeight="bold"
              size="lg"
              isLoading={isSubmitting}
              loadingText="Enviando..."
              _hover={{ bgColor: 'orange', color: 'white' }}
              _active={{ bgColor: 'darkorange' }}
            >
              Enviar mensaje
            </Button>
          </Stack>
        </form>
      </Grid>
    </Center>
  )
}

export default FormContact
