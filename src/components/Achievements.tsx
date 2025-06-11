import React, { ReactElement } from 'react'
import { Box, Container, Heading, Text, VStack, HStack, Icon as ChakraIcon, SimpleGrid, List, ListItem, ListIcon, Link } from '@chakra-ui/react'
import { FaTrophy, FaMedal, FaCode, FaCheckCircle } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface Achievement {
  title: string;
  description: string | ReactElement;
  icon: IconType;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    
    {
      title: 'Competitive Programming',
      description: (
        <List spacing={3}>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            <Text>
              <Text as="span" fontWeight="bold" color="blue.600">Codeforces</Text>
              <Text as="span" color="purple.500" ml={2}>Specialist</Text>
              <Text as="span" color="gray.600" ml={2}>
                (Handle: <Link href="https://codeforces.com/profile/Suman_Mandol" color="blue.500" isExternal>Suman_Mandol</Link>)
              </Text>
            </Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            <Text>
              <Text as="span" fontWeight="bold" color="blue.600">Codechef</Text>
              <Text as="span" color="yellow.600" ml={2}>Three Star</Text>
              <Text as="span" color="gray.600" ml={2}>
                (Handle: <Link href="https://www.codechef.com/users/suman_mandol" color="blue.500" isExternal>suman_mandol</Link>)
              </Text>
            </Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            <Text>
              <Text as="span" fontWeight="bold" color="blue.600">Problem Solving</Text>
              <Text as="span" color="green.600" ml={2}>2000+ problems solved</Text>
            </Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" color="gray.600" fontSize="sm">
            <ListIcon as={FaCode} color="gray.500" />
            <Text>Platforms: Leetcode, Codeforces, Codechef, AtCoder, and more</Text>
          </ListItem>
        </List>
      ),
      icon: FaCode,
    },
    {
      title: 'On-site Programming Contests',
      description: (
        <List spacing={3}>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            <Text>
              <Text as="span" fontWeight="bold" color="blue.600">BSMRSTU Intra-University Programming Contest 2023</Text>
              <Text as="span" color="green.600" ml={2}>(Rank-3rd)</Text>
            </Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            <Text>
              <Text as="span" fontWeight="bold" color="blue.600">Khulna Regional Inter University Programming Contest 2024</Text>
              <Text as="span" color="green.600" ml={2}>(Rank-7th)</Text>
            </Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            <Text>
              <Text as="span" fontWeight="bold" color="blue.600">SECIU JPC 2022</Text>
              <Text as="span" color="green.600" ml={2}>(Rank-31)</Text>
            </Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            <Text>
              <Text as="span" fontWeight="bold" color="blue.600">UGV Contest</Text>
              <Text as="span" color="gray.600" ml={2}>(2022, 2023)</Text>
            </Text>
          </ListItem>
        </List>
      ),
      icon: FaMedal,
    },
    {
      title: 'ICPC Dhaka Regional',
      description: (
        <List spacing={3}>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            <Text>
              <Text as="span" fontWeight="bold" color="blue.600">2022 ICPC Asia Dhaka Regional</Text>
              <Text as="span" color="green.600" ml={2}>(Rank-80)</Text>
            </Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            <Text>
              <Text as="span" fontWeight="bold" color="blue.600">2020 ICPC Asia Dhaka Regional</Text>
              <Text as="span" color="green.600" ml={2}>(Rank-101)</Text>
            </Text>
          </ListItem>
        </List>
      ),
      icon: FaTrophy,
    }
  ]

  return (
    <Container maxW="1200px" py={16}>
      <VStack spacing={12}>
        <Box textAlign="center" data-aos="fade-up">
          <Heading size="xl" mb={4} color="blue.600">
            Achievements
          </Heading>
          <Text color="gray.600" fontSize="lg" maxW="2xl" mx="auto">
            Highlighting my journey in competitive programming and technical excellence
          </Text>
          <Box w="40px" h="2px" bg="blue.500" mx="auto" mt={4} />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          {achievements.map((achievement, index) => (
            <Box
              key={achievement.title}
              p={8}
              shadow="lg"
              borderRadius="xl"
              borderWidth="2px"
              borderColor="gray.100"
              bg="white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-8px)',
                transition: 'transform 0.3s',
                shadow: '2xl',
                borderColor: 'blue.200',
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                bg: 'blue.500',
                borderTopRadius: 'xl',
              }}
            >
              <VStack spacing={6} align="flex-start">
                <Box
                  p={3}
                  borderRadius="full"
                  bg="blue.50"
                  color="blue.500"
                >
                  <ChakraIcon as={achievement.icon} boxSize={8} />
                </Box>
                <Heading size="md" color="blue.700">{achievement.title}</Heading>
                {achievement.description}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Additional Stats Section */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" mt={12}>
          <StatBox title="Problem Solving" value="2100+" description="Algorithmic Problems Solved" />
          <StatBox title="Contests" value="10+" description="On-site Competitions" />
          <StatBox title="Experience" value="4+" description="Years of Competitive Programming" />
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

const StatBox = ({ title, value, description }: { title: string; value: string; description: string }) => (
  <Box
    p={8}
    shadow="lg"
    borderRadius="xl"
    borderWidth="2px"
    borderColor="gray.100"
    bg="white"
    textAlign="center"
    data-aos="fade-up"
    position="relative"
    overflow="hidden"
    _hover={{
      transform: 'translateY(-4px)',
      transition: 'transform 0.3s',
      shadow: 'xl',
      borderColor: 'blue.200',
    }}
    _before={{
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '4px',
      bg: 'blue.500',
    }}
  >
    <VStack spacing={3}>
      <Text fontSize="sm" fontWeight="medium" color="gray.500" textTransform="uppercase">
        {title}
      </Text>
      <Heading size="xl" color="blue.500" fontWeight="bold">
        {value}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {description}
      </Text>
    </VStack>
  </Box>
)

export default Achievements 