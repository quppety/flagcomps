import { Box, Button, Flex } from '@chakra-ui/react';
import { useCounterControl } from '../../hooks/useCounterControl';

export default function NavBar() {
  const { counter, handleCounter } = useCounterControl();
  return (
    <>
      <Box bg={'gray.200'} px={4}>
        <Flex h={16} alignItems="center" justifyContent="center" gap={10}>
          <Button
            backgroundColor={'transparent'}
            _hover={{ backgroundColor: 'transparent' }}
          >
            <img src="/home.png" alt="home" height={30} width={30} />
          </Button>
          <Button
            backgroundColor={'transparent'}
            _hover={{ backgroundColor: 'transparent' }}
          >
            <img src={'light.png'} alt="theme" height={30} width={30} />
          </Button>
          <Button
            backgroundColor={'transparent'}
            _hover={{ backgroundColor: 'transparent' }}
          >
            <img src="/score.png" alt="score" height={32} width={32} />
          </Button>
          <Button onClick={handleCounter}>{counter}</Button>
        </Flex>
      </Box>
    </>
  );
}
