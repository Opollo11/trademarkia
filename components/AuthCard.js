import { Box, Button } from '@chakra-ui/react';
import { Input, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react';

export const AuthCard = () => {
  return (
    <Box
      bgColor={'white'}
      h={'sm'}
      w={'96'}
      rounded={'xl'}
      px={4}
      py={2}
    >
      <Tabs>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text
              fontWeight={'semibold'}
              mb={4}
            >
              Login to the{' '}
              <Text
                as="span"
                color={'#CB5FFE'}
              >
                Portal
              </Text>
            </Text>
            <Input
              bg={'#F8F8F8'}
              color={'#CB5FFE'}
              placeholder={'Enter Your Name'}
              mb={4}
            />
            <Input
              type={'password'}
              bg={'#F8F8F8'}
              color={'#CB5FFE'}
              placeholder={'Enter Your Password'}
              mb={8}
            />
            <Button
              bgColor={'#CB5FFE'}
              color={'white'}
              _hover={{
                bg: '#CB5FFE',
              }}
              variant={'solid'}
              w={'100%'}
            >
              Login
            </Button>
          </TabPanel>
          <TabPanel>
            <Text
              fontWeight={'semibold'}
              mb={4}
            >
              Sign Up to the{' '}
              <Text
                as="span"
                color={'#CB5FFE'}
              >
                Portal
              </Text>
            </Text>
            <Input
              bg={'#F8F8F8'}
              color={'#CB5FFE'}
              placeholder={'Enter Your Name'}
              mb={4}
            />
            <Input
              type={'password'}
              bg={'#F8F8F8'}
              color={'#CB5FFE'}
              placeholder={'Enter Your Password'}
              mb={4}
            />
            <Input
              type={'password'}
              bg={'#F8F8F8'}
              color={'#CB5FFE'}
              placeholder={'Confirm Password'}
              mb={8}
            />
            <Button
              bgColor={'#CB5FFE'}
              color={'white'}
              _hover={{
                bg: '#CB5FFE',
              }}
              variant={'solid'}
              w={'100%'}
            >
              Sign Up
            </Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
