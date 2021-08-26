import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 11.11em;
  object-fit: cover;
  transform: scale(1.05);
`;
Image.displayName = 'Image';

export const Wrapper = styled.div`
  overflow: hidden;
`;
Wrapper.displayName = 'Wrapper';
