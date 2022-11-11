import React, { useState, useEffect } from 'react';
import { fetchJobs } from 'services/fetchJobs';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
import JobsOnCurrentPage from 'components/JobList/JobsOnCurrentPage';

const ITEMS_PER_PAGE = 10;

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const currentJobs = jobs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(jobs.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setIsLoading(true);
    async function fetch() {
      try {
        const jobs = await fetchJobs();
        setJobs(jobs);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, []);

  if (!jobs) {
    return null;
  }

  const handlePageClick = event => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % jobs.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <JobsOnCurrentPage currentJobs={currentJobs} />
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </>
  );
};

export default JobList;
