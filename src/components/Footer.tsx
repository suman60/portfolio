import { Box, Container, Stack, Text, IconButton, HStack, Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/suman60',
      label: 'GitHub Profile'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/suman-mandol-701aba26a/',
      label: 'LinkedIn Profile'
    }
  ]

  return (
    <Box bg="gray.50" py={8}>
      <Container maxW="1200px">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify="space-between"
          align="center"
        >
          <Text color="gray.600">© 2024 Portfolio. All rights reserved.</Text>
          <HStack spacing={4}>
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                as={Link}
                href={social.href}
                isExternal
                aria-label={social.label}
                icon={<social.icon />}
                size="md"
                colorScheme="gray"
                variant="ghost"
                _hover={{
                  color: 'blue.500',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer 