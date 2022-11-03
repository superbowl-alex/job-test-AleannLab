import { useLocation, Link } from 'react-router-dom';
import moment from 'moment';

const JobCard = ({ job }) => {
  const { pictures, title, name, address, updatedAt } = job;
  const location = useLocation();

  return (
    <li>
      <Link to="/details" state={{ from: location, job: job }}>
        <img src={pictures[0]} alt={name} />
        <div>
          <h2>{title}</h2>
          <p>Deparment name • {name}</p>
          <p>{address}</p>
        </div>
        <div>
          <div>5 stars</div>
          <div>
            <div>SVG</div>
            <p>Posted {moment(updatedAt).fromNow()} </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default JobCard;
