import { Box, Flex, Text } from '@chakra-ui/react';
import { AuthCard } from '../components/AuthCard';

export default function Login() {
  return (
    <Flex
      px={16}
      alignItems={'center'}
      height={'100vh'}
      justifyContent={'space-between'}
    >
      <Box
        color={'white'}
        fontSize={'4xl'}
        fontFamily={['DM Sans', 'sans-serif']}
      >
        <Text>Requirements made</Text>
        <Text>easier, faster and simpler</Text>
      </Box>
      <AuthCard />
    </Flex>
  );
}
