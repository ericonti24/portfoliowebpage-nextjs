'use client'

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
  Image,
} from '@chakra-ui/react'


export default function Project({projects}) {
  return (<Center>
    <Stack>
    {projects.map((project) => (
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('gray')}
        boxShadow={'5xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        m={4}
      >
        {/* <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        Image goes here 
        </Box> */}
        <Stack>
        <Heading
          color={useColorModeValue('white')}
          fontSize={'2xl'}
          fontFamily={'body'}
          align={'center'}
          >
            {project.title}
          </Heading>
          <Text color={'white'}>
            {project.description}
          </Text>
        </Stack>
        <Stack 
          direction='row' 
          spacing={4} 
          justifyContent={'center'} 
          m={2}
        >
          <Button 
            color={useColorModeValue('white')}
            variant='outline' 
            as="a" 
            href={project.link}
            >
              Go to project
            </Button>
          <Button 
            color={useColorModeValue('white')}
            variant='outline' 
            as="a" 
            href={project.github}
            >
              Go to GitHub Repo
            </Button>
        </Stack>
      </Box>
    ))}
    </Stack>
  </Center>
  )
}






// 'use client'

// import Image from 'next/image'
// import {
//   Box,
//   Center,
//   Heading,
//   Text,
//   Stack,
//   Avatar,
//   useColorModeValue,
// } from '@chakra-ui/react'

// export default function blogPostWithImage() {
//   return (
//     <Center py={6}>
//       <Box
//         maxW={'445px'}
//         w={'full'}
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         bg={useColorModeValue('white', 'gray.900')}
//         boxShadow={'2xl'}
//         rounded={'md'}
//         p={6}
//         overflow={'hidden'}>
//         <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
//           <Image
//             src={
//               'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
//             }
//             fill
//             alt="Example"
//           />
//         </Box>
//         <Stack>
//           <Text
//             color={'green.500'}
//             textTransform={'uppercase'}
//             fontWeight={800}
//             fontSize={'sm'}
//             letterSpacing={1.1}>
//             Blog
//           </Text>
//           <Heading
//             // eslint-disable-next-line react-hooks/rules-of-hooks
//             color={useColorModeValue('gray.700', 'white')}
//             fontSize={'2xl'}
//             fontFamily={'body'}>
//             Boost your conversion rate
//           </Heading>
//           <Text color={'gray.500'}>
//             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
//             eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
//             voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
//           </Text>
//         </Stack>
//         <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
//           <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
//           <Stack direction={'column'} spacing={0} fontSize={'sm'}>
//             <Text fontWeight={600}>Achim Rolle</Text>
//             <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
//           </Stack>
//         </Stack>
//       </Box>
//     </Center>
//   )
// }