import { Box } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Box
      as="nav"
      aria-label="main navigation"
      w={'100vw'}
      px={16}
      py={8}
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
