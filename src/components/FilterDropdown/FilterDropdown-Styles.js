import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translatey(2.22em);
  }
  to {
    opacity: 1;
    transform: translatey(0);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-height: 24em;
  background: white;
  box-shadow: var(--box-shadow);
  border-radius: 0.5em;
  margin-top: -2.22em;
  position: absolute;
  left: 0;
  top: 8em;
  z-index: 2;
  animation: ${fadeUp} 0.2s var(--timing-cubic) forwards;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;
Wrapper.displayName = 'Wrapper';

export const DropdownItem = styled.p`
  font-size: 0.83em;
  color: var(--desaturated-dark-cyan);
  background: white;
  padding: 0.56em 1.11em;
  font-weight: var(--fw-normal);
  user-select: none;
  cursor: pointer;

  &:first-of-type {
    padding-top: 1.11em;
  }
  &:last-of-type {
    padding-bottom: 0.97em;
  }

  &:hover {
    background: var(--light-grayish-cyan-filter-pill);
  }
`;
DropdownItem.displayName = 'DropdownItem';

export const Empty = styled.div`
  display: flex;
  align-items: center;
  padding: 1.11em;
  font-size: 0.83em;
  color: red;

  & > img {
    width: 3em;
    margin-left: 0.56em;
  }
`;
Empty.displayName = 'Empty';
