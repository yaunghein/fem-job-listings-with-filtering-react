import {
  Wrapper,
  Column,
  CompanyInfoWrapper,
  CompanyLogo,
  CompanyName,
  JobTitle,
  MetaInfoWrapper,
  MetaInfo,
  MetaInfoDot,
  Skill,
  NewJob,
  FeaturedJob,
} from './JobCard-Styles';
import { useContext } from 'react';
import { Context } from '../Context';

const JobCard = ({ job }) => {
  const { filters, addFilter } = useContext(Context);
  const skills = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <Wrapper key={job.id} featured={job.featured}>
      <Column>
        <CompanyLogo src={job.logo} alt={`${job.company} Logo`} />
        <CompanyInfoWrapper>
          <CompanyName>{job.company}</CompanyName>
          {job.new && <NewJob onClick={() => addFilter('New')}>New!</NewJob>}
          {job.featured && <FeaturedJob onClick={() => addFilter('Featured')}>Featured</FeaturedJob>}
          <JobTitle>{job.position}</JobTitle>
          <MetaInfoWrapper>
            <MetaInfo>{job.postedAt}</MetaInfo>
            <MetaInfoDot />
            <MetaInfo>{job.contract}</MetaInfo>
            <MetaInfoDot />
            <MetaInfo>{job.location}</MetaInfo>
          </MetaInfoWrapper>
        </CompanyInfoWrapper>
      </Column>
      <Column>
        {skills.map((skill, index) => (
          <Skill
            key={index}
            isAlreadySelected={filters.some(filter => filter.text === skills[index])}
            onClick={() => {
              addFilter(skills[index]);
            }}>
            {skill}
          </Skill>
        ))}
      </Column>
    </Wrapper>
  );
};

export default JobCard;
