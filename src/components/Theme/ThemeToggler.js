import styled, { keyframes } from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: 1em;
  right: 7em;
  font-size: 1.6em;
  width: 2em;
  height: 2em;
  display: grid;
  place-items: center;
  border: none;
  background: hsl(180, 29%, 50%);
  background: ${({ theme }) => theme.cardBg};
  border-radius: 0.2em;
  transition: all 0.2s ease-out;

  &:active {
    transform: scale(0.95);
  }

  @media screen and (max-width: 1000px) {
    top: 0.5em;
    right: 1em;
  }
  @media screen and (max-width: 786px) {
    top: 0.63em;
  }
`;
Button.displayName = 'Button';

const grow = keyframes`
  from{
    transform: scale(0.5)
  }
  to{
    transform: scale(1)
  }
`;

const rotate = keyframes`
  from{
    transform: scale(0.5) rotate(0deg)
  }
  to{
    transform: scale(1) rotate(360deg)
  }
`;

const Icon = styled.span`
  animation: ${grow} 0.2s ease-out forwards;
`;
Icon.displayName = 'Icon';

const SunIcon = styled.span`
  animation: ${rotate} 0.2s ease-out forwards;
`;
SunIcon.displayName = 'SunIcon';

const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <>
      <Button title='Theme Toggler' onClick={toggleTheme}>
        {theme === 'light' && <Icon>🌜</Icon>}
        {theme === 'dark' && <SunIcon>🌞</SunIcon>}
      </Button>
    </>
  );
};

export default ThemeToggler;
