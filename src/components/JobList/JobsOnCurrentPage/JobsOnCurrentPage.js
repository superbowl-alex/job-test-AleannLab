import PropTypes from 'prop-types';
import { List, Item } from './JobsOnCurrentPage.styled';
import JobCard from 'components/JobCard';

const JobsOnCurrentPage = ({ currentJobs }) => {
  if (!currentJobs) {
    return null;
  }
  return (
    <List>
      {currentJobs &&
        currentJobs.map(job => (
          <Item key={job.id}>
            <JobCard job={job}></JobCard>
          </Item>
        ))}
    </List>
  );
};

JobsOnCurrentPage.propTypes = {
  currentJobs: PropTypes.array.isRequired,
};

export default JobsOnCurrentPage;
