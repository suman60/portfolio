import React from 'react'
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  VStack, 
  HStack, 
  Link, 
  Icon,
  Badge
} from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiReact } from 'react-icons/si'

interface Project {
  title: string;
  description: string;
  tags: string[];
  icons: React.ElementType[];
  githubLink: string;
  liveLink: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'AbodeNet',
      description: 'A full-stack web application built with Express.js, MongoDB, and EJS for the frontend. The project demonstrates my ability to create complete web solutions.',
      tags: ['Express.js', 'MongoDB', 'EJS', 'Node.js'],
      icons: [SiExpress, SiMongodb],
      githubLink: 'https://github.com/suman60/AbodeNet',
      liveLink: 'https://abodenet.onrender.com/listings'
    },
    {
      title: 'SortingVisualization',
      description: 'An interactive React application that visualizes comparison-based sorting algorithms. This project helps users understand how different sorting algorithms work through animated visualizations.',
      tags: ['React', 'Algorithms', 'Animation', 'Educational'],
      icons: [SiReact],
      githubLink: 'https://github.com/suman60/SortingVisualization',
      liveLink: ''
    },
  ]

  return (
    <Container maxW="1200px" py={16}>
      <VStack gap={12}>
        <Heading size="xl" data-aos="fade-up">
          My Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
          {projects.map((project, index) => (
            <Box
              key={project.title}
              p={6}
              shadow="lg"
              borderRadius="xl"
              borderWidth="1px"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              _hover={{
                transform: 'translateY(-5px)',
                transition: 'transform 0.2s',
                shadow: 'xl',
              }}
            >
              <VStack align="flex-start" gap={4}>
                <Heading size="lg" color="blue.500">
                  {project.title}
                </Heading>
                <Text color="gray.600">{project.description}</Text>
                <HStack gap={2} flexWrap="wrap">
                  {project.tags.map((tag) => (
                    <Badge key={tag} colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
                      {tag}
                    </Badge>
                  ))}
                </HStack>
                <HStack gap={4}>
                  {project.icons.map((IconComponent, i) => (
                    <Link key={i} href="#" color="gray.600" _hover={{ color: 'blue.500' }}>
                      <HStack>
                        <Icon as={IconComponent} boxSize={6} color="blue.500" />
                      </HStack>
                    </Link>
                  ))}
                </HStack>
                <HStack gap={4}>
                  <Link href={project.githubLink} color="gray.600" _hover={{ color: 'blue.500' }}>
                    <HStack>
                      <Icon as={FaGithub} />
                      <Text>Source Code</Text>
                    </HStack>
                  </Link>
                  {project.liveLink && (
                    <Link href={project.liveLink} color="gray.600" _hover={{ color: 'blue.500' }}>
                      <HStack>
                        <Icon as={FaExternalLinkAlt} />
                        <Text>Live Demo</Text>
                      </HStack>
                    </Link>
                  )}
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Projects 