import React from 'react'
import { Box, Flex, Link, IconButton, useDisclosure, VStack, HStack, Text } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure()
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
  ]

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      as={RouterLink}
      to={to}
      px={4}
      py={2}
      rounded="md"
      _hover={{ bg: 'gray.100' }}
      bg={location.pathname === to ? 'gray.100' : 'transparent'}
      fontWeight={location.pathname === to ? 'bold' : 'normal'}
    >
      {children}
    </Link>
  )

  return (
    <Box shadow="md" bg="white" position="sticky" top={0} zIndex={1000}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <Text fontSize="xl" fontWeight="bold" color="blue.600">
          Portfolio
        </Text>

        {/* Desktop Navigation */}
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {links.map((link) => (
            <NavLink key={link.path} to={link.path}>
              {link.name}
            </NavLink>
          ))}
        </HStack>

        {/* Mobile Navigation Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <Box pb={4} display={{ base: 'block', md: 'none' }}>
          <VStack spacing={4}>
            {links.map((link) => (
              <NavLink key={link.path} to={link.path}>
                {link.name}
              </NavLink>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  )
}

export default Navbar 