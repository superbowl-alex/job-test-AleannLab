import React, { useState, useEffect } from 'react';
import { fetchJobs } from 'services/fetchJobs';
import ErrorMessage from 'components/ErrorMessage';
import JobCard from 'components/JobCard';
import { List, Item } from './JobList.styled';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const jobs = await fetchJobs();
        setJobs(jobs);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
    fetch();
  }, []);

  if (!jobs) {
    return null;
  }

  return (
    <>
      {error && <ErrorMessage />}
      <List>
        {jobs.map(job => (
          <Item key={job.id}>
            <JobCard job={job}></JobCard>
          </Item>
        ))}
      </List>
      <div>Pagination</div>
    </>
  );
};

export default JobList;
