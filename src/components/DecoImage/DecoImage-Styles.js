import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 11.11em;
  object-fit: cover;
  transform: scale(1.1);

  @media screen and (max-width: 1000px) {
    height: 7.2em;
  }
`;
Image.displayName = 'Image';

export const Wrapper = styled.div`
  overflow: hidden;
  background: ${({ theme }) => theme.decoBg};
`;
Wrapper.displayName = 'Wrapper';
