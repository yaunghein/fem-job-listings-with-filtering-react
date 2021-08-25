import { Section, Container } from '../Global-Containers';
import { Context } from '../Context';
import { useContext } from 'react';
import JobCard from '../JobCard/JobCard';

const JobCardList = () => {
  const { allJobs } = useContext(Context);
  return (
    <Section bg='cyan'>
      <Container>
        {allJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </Container>
    </Section>
  );
};

export default JobCardList;
