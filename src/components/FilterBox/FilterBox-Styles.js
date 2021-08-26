import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 5.3em;
  background: white;
  box-shadow: var(--box-shadow);
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

export const FilterInput = styled.input``;
FilterInput.displayName = 'FilterInput';

export const ClearButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  color: var(--desaturated-dark-cyan);
  text-decoration: underline;
  font-weight: var(--fw-bold);
  opacity: 0.75;
  transition: all 0.2s var(--timing-cubic);

  &:hover {
    opacity: 1;
  }
`;
ClearButton.displayName = 'ClearButton';
