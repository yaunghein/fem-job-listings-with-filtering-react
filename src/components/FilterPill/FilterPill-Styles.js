import styled, { keyframes } from 'styled-components';

const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin: 0.56em;
  animation: ${popIn} 0.2s var(--timing-cubic) forwards;
`;
Wrapper.displayName = 'Wrapper';

export const Pill = styled.span`
  font-size: var(--fs-global);
  color: var(--desaturated-dark-cyan);
  background: var(--light-grayish-cyan-filter-pill);
  padding: 0.56em 0.56em 0.28em;
  font-weight: var(--fw-bold);
  border: 2px solid var(--desaturated-dark-cyan);
  border-radius: 0.3em 0 0 0.3em;
  border-right: none;
  user-select: none;
`;
Pill.displayName = 'Pill';

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.56em;
  border: none;
  outline: none;
  background: var(--desaturated-dark-cyan);
  transition: var(--timing-cubic);
  border: 2px solid var(--desaturated-dark-cyan);
  border-left: none;
  border-radius: 0 0.3em 0.3em 0;

  &:hover {
    background: var(--very-dark-grayish-cyan);
    border-color: var(--very-dark-grayish-cyan);
  }

  & > img {
    width: 0.8em;
    height: 0.8em;
  }
`;
RemoveButton.displayName = 'RemoveButton';
