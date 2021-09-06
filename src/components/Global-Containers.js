import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.body};
  transition: all 0.2s ease-out;
`;
Section.displayName = 'Section';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5.56em 11.11em;

  @media screen and (max-width: 1000px) {
    padding: 2.78em 1.67em;
  }
`;
Container.displayName = 'Container';
