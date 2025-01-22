import { Link, Outlet } from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react';
import { useCounterControl } from '../../hooks/useCounterControl';
import Button from './Button';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { counter, handleCounter } = useCounterControl();
  return (
    <>
      <div
        style={{
          backgroundColor: colorMode === 'light' ? '#E2E8F0' : '#4A5568',
          paddingRight: '1rem',
          paddingLeft: '1rem',
        }}
      >
        <div
          style={{
            height: '4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
          }}
        >
          <Button
            content={
              <Link to="/">
                <img src="/home.png" alt="home" height={30} width={30} />
              </Link>
            }
          />
          <Button
            onClick={toggleColorMode}
            content={
              <img
                src={colorMode === 'light' ? '/dark.png' : 'light.png'}
                alt="theme"
                height={30}
                width={30}
              />
            }
          />
          <Button
            content={
              <Link to="/scores">
                <img src="/score.png" alt="score" height={32} width={32} />
              </Link>
            }
          />

          <Button onClick={handleCounter} content={counter} />
        </div>
      </div>
      <Outlet />
    </>
  );
}
