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
  overflow: hidden;
`;
Section.displayName = 'Section';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5.56em 11.11em;
`;
Container.displayName = 'Container';
