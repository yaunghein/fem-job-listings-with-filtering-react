import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ bg }) => {
    switch (bg) {
      case 'cyan':
        return 'var(--light-grayish-cyan-background)';
      case 'dark-cyan':
        return 'var(--desaturated-dark-cyan)';
      default:
        return 'white';
    }
  }};
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
