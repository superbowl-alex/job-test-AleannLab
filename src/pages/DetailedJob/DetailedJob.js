import { Main } from './DetailedJob.styled';
import DetailedPage from 'components/DetailedPage';

const DetailedJob = ({ job }) => {
  return (
    <Main>
      <DetailedPage job={job} />
    </Main>
  );
};

export default DetailedJob;
