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

const JobCard = ({ job }) => {
  const skills = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <Wrapper key={job.id} featured={job.featured}>
      <Column>
        <CompanyLogo src={job.logo} alt={`${job.company} Logo`} />
        <CompanyInfoWrapper>
          <CompanyName>{job.company}</CompanyName>
          {job.new && <NewJob>New!</NewJob>}
          {job.featured && <FeaturedJob>Featured</FeaturedJob>}
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
          <Skill key={index}>{skill}</Skill>
        ))}
      </Column>
    </Wrapper>
  );
};

export default JobCard;
