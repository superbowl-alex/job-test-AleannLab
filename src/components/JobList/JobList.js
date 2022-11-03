import React, { useState, useEffect } from 'react';
import { fetchJobs } from 'services/fetchJobs';
import ErrorMessage from 'components/ErrorMessage';
import JobCard from 'components/JobCard';

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
      <ul>
        {jobs.map(job => (
          <JobCard key={job.id} job={job}></JobCard>
        ))}
      </ul>
    </>
  );
};

export default JobList;
