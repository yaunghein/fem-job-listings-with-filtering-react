import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 5.3em;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: ${({ theme }) => (theme === 'light' ? 'var(--box-shadow)' : 'none')};
  margin-bottom: 2.78em;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  padding: 0.83em 1.39em;
  margin-top: -8.3em;
  position: sticky;
  top: 1.67em;
  z-index: 2;

  @media screen and (max-width: 1000px) {
    margin-top: -5.5em;
    padding: 0.42em 0.84em;
  }

  @media screen and (max-width: 789px) {
    margin-top: -6em;
    font-size: 0.83em;
    margin-bottom: 3.5em;
  }
`;
Wrapper.displayName = 'Wrapper';

export const FilterPillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
FilterPillsWrapper.displayName = 'FilterPillsWrapper';

export const FilterInput = styled.input`
  padding: 0.28em 0;
  border: none;
  outline: none;
  font-size: var(--fs-global);
  color: var(--desaturated-dark-cyan);
  font-weight: var(--fw-bold);
  background: ${({ theme }) => theme.cardBg};
`;
FilterInput.displayName = 'FilterInput';

export const ClearButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  color: var(--desaturated-dark-cyan);
  text-decoration: underline;
  font-weight: var(--fw-bold);
  font-size: 0.9em;
  opacity: 0.5;
  transition: all 0.2s var(--timing-cubic);

  &:hover {
    opacity: 1;
  }
`;
ClearButton.displayName = 'ClearButton';

export const Placeholder = styled.p`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.39em;
  color: var(--desaturated-dark-cyan);
  opacity: 0.5;
  font-size: var(--fs-global);
  font-weight: var(--fw-bold);

  @media screen and (max-width: 1000px) {
    left: 0.84em;
  }
`;
Placeholder.displayName = 'Placeholder';
