import { Link, useLocation } from 'react-router-dom';

const DetailedJob = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(location.state);

  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
    </main>
  );
};

export default DetailedJob;
