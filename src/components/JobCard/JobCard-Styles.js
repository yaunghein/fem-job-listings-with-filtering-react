import styled, { css, keyframes } from 'styled-components';

const FlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Transition = css`
  transition: all 0.2s var(--timing-cubic);
`;

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
  background: ${({ theme }) => theme.cardBg};

  padding: 2.22em 2.78em;
  border-radius: 0.5em;
  ${FlexCenter}
  margin-bottom: 1.67em;
  box-shadow: ${({ theme }) => (theme === 'light' ? 'var(--box-shadow)' : 'none')};
  animation: ${fadeUp} 0.2s var(--timing-cubic) forwards;
  border-left: ${({ featured }) => (featured ? '0.35em solid var(--desaturated-dark-cyan)' : null)};

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1000px) {
    align-items: flex-end;
  }

  @media screen and (max-width: 789px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.67em;
    margin-bottom: 2.78em;
  }
`;
Wrapper.displayName = 'Wrapper';

export const Column = styled.div`
  ${FlexCenter}
  flex-wrap: wrap;
  height: 100%;

  @media screen and (max-width: 1000px) {
    &:last-of-type {
      justify-content: flex-end;
    }
  }

  @media screen and (max-width: 789px) {
    &:last-of-type {
      justify-content: flex-start;
      margin-top: 1.39em;
      padding-top: 0.56em;
      border-top: 0.07em solid var(--very-dark-grayish-cyan);
    }
  }
`;
Column.displayName = 'Column';

export const CompanyInfoWrapper = styled.div`
  margin-left: 1.67em;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    margin-top: 1.67em;
    width: 100%;
  }

  @media screen and (max-width: 789px) {
    margin-top: 1.11em;
  }
`;
CompanyInfoWrapper.displayName = 'CompanyInfoWrapper';

export const CompanyLogo = styled.img`
  width: 6.11em;
  height: 6.11em;
  border-radius: 100vw;

  @media screen and (max-width: 789px) {
    width: 3.33em;
    height: 3.33em;
    margin-top: -3.4em;
  }
`;
CompanyLogo.displayName = 'CompanyLogo';

export const CompanyName = styled.h2`
  font-size: var(--fs-global);
  font-weight: var(--fw-bold);
  color: var(--desaturated-dark-cyan);
  display: inline;

  @media screen and (max-width: 789px) {
    font-size: 0.83em;
  }
`;
CompanyName.displayName = 'CompanyName';

export const JobTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  margin: 0.8em 0 0.6em;
  ${Transition};
  cursor: pointer;

  &:hover {
    color: var(--desaturated-dark-cyan);
  }

  @media screen and (max-width: 789px) {
    font-size: 0.97em;
    margin: 0.8em 0;
  }
`;
JobTitle.displayName = 'JobTitle';

export const MetaInfoWrapper = styled.div`
  ${FlexCenter}

  @media screen and (max-width: 1000px) {
    width: 85%;
  }

  @media screen and (max-width: 789px) {
    width: 90%;
  }
`;
MetaInfoWrapper.displayName = 'MetaInfoWrapper';

export const MetaInfo = styled.span`
  color: var(--dark-grayish-cyan);
  font-size: 0.97em;

  @media screen and (max-width: 789px) {
    font-size: 12px;
  }
`;
MetaInfo.displayName = 'MetaInfo';

export const MetaInfoDot = styled.div`
  width: 0.2em;
  height: 0.2em;
  margin: 0 0.8em;
  border-radius: 100vw;
  background: var(--dark-grayish-cyan);
`;
MetaInfoDot.displayName = 'MetaInfoDot';

export const Skill = styled.button`
  font-size: var(--fs-global);
  color: ${({ theme }) => theme.pillText};
  background: ${({ theme }) => theme.pillBg};
  padding: 0.56em;
  margin-left: 0.56em;
  border-radius: 0.3em;
  outline: none;
  border: none;
  font-weight: var(--fw-bold);
  ${Transition};
  cursor: pointer;

  :hover {
    color: white;
    background: ${({ theme }) => theme.pillBgDark};
  }

  @media screen and (max-width: 1000px) {
    margin: 0.56em 0.56em 0;
  }

  @media screen and (max-width: 789px) {
    margin: 1.11em 1.11em 0 0;
    font-size: 0.83em;
  }
`;
Skill.displayName = 'Skill';

export const NewJob = styled.span`
  padding: 0.69em 0.69em 0.42em;
  background: var(--desaturated-dark-cyan);
  color: white;
  border-radius: 100vw;
  margin-left: 1.11em;
  text-transform: uppercase;
  font-size: 0.69em;
  font-weight: var(--fw-bold);
  cursor: pointer;

  @media screen and (max-width: 789px) {
    font-size: 0.56em;
  }
`;
NewJob.displayName = 'NewJob';

export const FeaturedJob = styled(NewJob)`
  background: var(--very-dark-grayish-cyan);
`;
FeaturedJob.displayName = 'FeaturedJob';
