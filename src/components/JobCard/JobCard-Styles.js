import styled, { css } from 'styled-components';

const FlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  background: white;
  padding: 2.22em;
  border-radius: 0.5em;
  ${FlexCenter}
  margin-bottom: 1.67em;
  border-left: ${({ featured }) => (featured ? '0.35em solid var(--desaturated-dark-cyan)' : null)};

  &:last-of-type {
    margin-bottom: 0;
  }
`;
Wrapper.displayName = 'Wrapper';

export const Column = styled.div`
  ${FlexCenter}
`;
Column.displayName = 'Column';

export const CompanyInfoWrapper = styled.div`
  margin-left: 1.67em;
`;
CompanyInfoWrapper.displayName = 'CompanyInfoWrapper';

export const CompanyLogo = styled.img`
  width: 6.11em;
  height: 6.11em;
  border-radius: 100vw;
`;
CompanyLogo.displayName = 'CompanyLogo';

export const CompanyName = styled.h2`
  font-size: var(--fs-global);
  font-weight: var(--fw-bold);
  color: var(--desaturated-dark-cyan);
  display: inline;
`;
CompanyName.displayName = 'CompanyName';

export const JobTitle = styled.h3`
  color: var(--very-dark-grayish-cyan);
  margin: 0.8em 0 0.6em;
`;
JobTitle.displayName = 'JobTitle';

export const MetaInfoWrapper = styled.div`
  ${FlexCenter}
`;
MetaInfoWrapper.displayName = 'MetaInfoWrapper';

export const MetaInfo = styled.span`
  color: var(--dark-grayish-cyan);
`;
MetaInfo.displayName = 'MetaInfo';

export const MetaInfoDot = styled.div`
  width: 0.2em;
  height: 0.2em;
  margin: 0 1em;
  border-radius: 100vw;
  background: var(--dark-grayish-cyan);
`;
MetaInfoDot.displayName = 'MetaInfoDot';

export const Skill = styled.h4`
  font-size: var(--fs-global);
  color: var(--desaturated-dark-cyan);
  background: var(--light-grayish-cyan-background);
  padding: 0.56em;
  margin-left: 0.56em;
  border-radius: 0.2em;
  transition: all 0.2s ease-out;
  cursor: pointer;

  :hover {
    color: white;
    background: var(--desaturated-dark-cyan);
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
`;
NewJob.displayName = 'NewJob';

export const FeaturedJob = styled(NewJob)`
  background: var(--very-dark-grayish-cyan);
`;
FeaturedJob.displayName = 'FeaturedJob';
