'use client'
import { Box, Grid, List, ListItem } from '@chakra-ui/react'
import Link from 'next/link'
import { PiMountainsFill } from 'react-icons/pi'
import { FaUsers } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import { IoLogoWhatsapp } from 'react-icons/io'

const Navbar = () => {
  const logoItem = { title: 'Posta de los Rio', path: '/', icon: <PiMountainsFill /> }
  const pathsLinks = [
    { title: 'Inicio', path: '/', icon: <IoHome /> },
    { title: 'Nosotros', path: '/about', icon: <FaUsers /> },
    { title: 'Contacto', path: '/contact', icon: <IoLogoWhatsapp /> },
  ]

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      h="65px"
      alignItems="center"
      px={4}
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Box
        justifySelf="start"
        fontWeight="bold"
        display="flex"
        alignItems="center"
        gap={2}
        transition="transform 0.3s ease, color 0.3s ease"
        _hover={{
          color: 'orange',
          transform: 'translateY(-2px)',
        }}
      >
        {logoItem.icon}
        <Link href={logoItem.path} style={{ color: 'orange' }}>
          {logoItem.title}
        </Link>
      </Box>

      <List display="flex" justifyContent="center" alignItems="center" gap={10}>
        {pathsLinks.map((link, index) => (
          <ListItem
            key={index}
            fontWeight="bold"
            justifyItems="center"
            gap={2}
            transition="transform 0.3s ease, color 0.3s ease"
            _hover={{
              color: 'orange',
              transform: 'translateY(-2px)',
            }}
          >
            <Link href={link.path} style={{ display: 'grid', justifyItems: 'center' }}>
              {link.icon}
              {link.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Grid>
  )
}

export default Navbar
