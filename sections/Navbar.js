import { Box } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Box
      as="nav"
      aria-label="main navigation"
      w={'100vw'}
      h={'15vh'}
      px={16}
      py={8}
      position="fixed"
      top={0}
      left={0}
    >
      <img
        src="/Logo.svg"
        alt=""
        width={'175px'}
        height={'auto'}
      />
    </Box>
  );
};
