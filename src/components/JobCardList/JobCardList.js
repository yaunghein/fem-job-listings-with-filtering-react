import { Section, Container } from '../Global-Containers';
import { Context } from '../Context';
import { useContext } from 'react';
import JobCard from '../JobCard/JobCard';
import { FilterBox } from '..';

const JobCardList = () => {
  const { allJobs } = useContext(Context);
  return (
    <Section>
      <Container>
        <FilterBox />
        {allJobs.map(job => job.show && <JobCard key={job.id} job={job} />)}
      </Container>
    </Section>
  );
};

export default JobCardList;
