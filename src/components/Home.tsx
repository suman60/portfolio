import React from 'react'
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Tag, 
  SimpleGrid,
  Image,
  Flex,
  Icon,
  Link
} from '@chakra-ui/react'
import { FaCode, FaDatabase, FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt, FaPython, FaGit } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiCplusplus, SiJavascript, SiMysql } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { GiCubes } from 'react-icons/gi'
import type { IconType } from 'react-icons'
import profilePic from '../assets/suman.JPG'

interface Skill {
  name: string;
  icon: IconType;
  category: string;
}

const Home: React.FC = () => {
  const skills: Skill[] = [
    // Programming Languages
    { name: 'C++', icon: SiCplusplus, category: 'Language' },
    { name: 'Python', icon: FaPython, category: 'Language' },
    { name: 'JavaScript', icon: SiJavascript, category: 'Language' },
    
    // Development Skills
    { name: 'React.js', icon: FaReact, category: 'Framework' },
    { name: 'Node.js', icon: FaNodeJs, category: 'Framework' },
    { name: 'Express.js', icon: SiExpress, category: 'Framework' },
    
    // Databases
    { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
    { name: 'MySQL', icon: SiMysql, category: 'Database' },
    
    // Core Skills
    { name: 'Data Structures', icon: GiCubes, category: 'Core' },
    { name: 'OOP', icon: VscCode, category: 'Core' },
    { name: 'Competitive Programming', icon: FaCode, category: 'Core' },
    
    // Tools
    { name: 'Git', icon: FaGit, category: 'Tool' },
    { name: 'GitHub', icon: FaGithub, category: 'Tool' },
    { name: 'Full Stack Development', icon: FaDatabase, category: 'Core' },
  ]

  // Group skills by category
  const categories = ['Language', 'Framework', 'Database', 'Core', 'Tool']

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.50" py={20}>
        <Container maxW="1200px">
          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            align="center" 
            gap={8}
            justify="space-between"
          >
            {/* Text Content */}
            <VStack spacing={6} alignItems="flex-start" flex={1}>
              <Heading size="2xl" data-aos="fade-up">
                Hello, I'm a{' '}
                <Text as="span" color="blue.500">
                  Full Stack Developer
                </Text>
              </Heading>
              <Text fontSize="xl" color="gray.600">
                Passionate about competitive programming and building web applications using the MERN stack.
              </Text>
              <HStack spacing={4} wrap="wrap">
                <Tag size="lg" colorScheme="blue" borderRadius="full">
                  ICPC Participant
                </Tag>
                <Tag size="lg" colorScheme="green" borderRadius="full">
                  MERN Stack
                </Tag>
                <Tag size="lg" colorScheme="purple" borderRadius="full">
                  Problem Solver
                </Tag>
              </HStack>
            </VStack>

            {/* Profile Picture */}
            <Box
              data-aos="fade-left"
              borderRadius="full"
              overflow="hidden"
              boxSize={{ base: '250px', md: '300px' }}
              boxShadow="xl"
              border="4px solid"
              borderColor="blue.500"
              bg="white"
            >
              <Image
                src={profilePic}
                alt="Profile Picture"
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="center 20%"
                transform="scale(1.2)"
              />
            </Box>

            {/* Name and Education Info */}
            <VStack spacing={2} mt={4} data-aos="fade-up">
              <Heading as="h1" size="xl">Suman Mandol</Heading>
              <Text fontSize="md" color="gray.500">Department of CSE</Text>
              <Text fontSize="lg" color="gray.600">Gopalganj Science and Technology University</Text>
              
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* Skills Section */}
      <Container maxW="1200px" py={16}>
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading size="xl" mb={4} data-aos="fade-up">
              Skills & Expertise
            </Heading>
            <Text color="gray.600" fontSize="lg">
              A comprehensive set of technical skills and tools I work with
            </Text>
          </Box>
          
          {categories.map((category) => (
            <Box key={category} w="full">
              <Box textAlign="center" mb={6}>
                <Heading size="md" color="blue.600" data-aos="fade-up">
                  {category === 'Core' ? 'Core Skills' : 
                   category === 'Tool' ? 'Development Tools' :
                   `${category}s`}
                </Heading>
                <Box w="40px" h="2px" bg="blue.500" mx="auto" mt={2} />
              </Box>
              <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={6}>
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <Box
                      key={skill.name}
                      p={5}
                      shadow="md"
                      borderWidth="1px"
                      borderRadius="lg"
                      bg="white"
                      data-aos="fade-up"
                      _hover={{
                        transform: 'translateY(-4px)',
                        shadow: 'xl',
                        borderColor: 'blue.200',
                        transition: 'all 0.3s',
                      }}
                    >
                      <VStack spacing={3}>
                        <Box
                          p={2}
                          borderRadius="full"
                          bg="blue.50"
                          color="blue.500"
                        >
                          <Icon as={skill.icon} boxSize={6} />
                        </Box>
                        <Text fontWeight="medium" textAlign="center">{skill.name}</Text>
                      </VStack>
                    </Box>
                  ))}
              </SimpleGrid>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}

export default Home 