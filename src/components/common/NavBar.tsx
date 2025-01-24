import { Link, Outlet } from 'react-router-dom';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import { useCounterControl } from '../../hooks/useCounterControl';
import { Button } from './Button';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { counter, handleCounter } = useCounterControl();
  return (
    <>
      <Box bg={useColorModeValue('gray.200', 'gray.600')} px={4}>
        <Flex h={16} alignItems="center" justifyContent="center" gap={10}>
          <Button
            labelContent={
              <Link to="/">
                <img src="/home.png" alt="home" height={30} width={30} />
              </Link>
            }
          />
          <Button
            onClick={toggleColorMode}
            labelContent={
              <img
                src={colorMode === 'light' ? '/dark.png' : 'light.png'}
                alt="theme"
                height={30}
                width={30}
              />
            }
          />
          <Button
            labelContent={
              <Link to="/scores">
                <img src="/score.png" alt="score" height={32} width={32} />
              </Link>
            }
          />
          <Button onClick={handleCounter} labelContent={counter} />
        </Flex>
      </Box>
      <Outlet />
    </>
  );
}
