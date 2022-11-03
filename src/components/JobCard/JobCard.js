import { useLocation, useNavigate, Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  const { pictures, title, name, address, updatedAt } = job;
  const location = useLocation();

  return (
    <li>
      <Link to="/details" state={{ from: location, job: job }}>
        <img src={pictures[0]} alt={name} />
        <div>
          <h2>{title}</h2>
          <div>Deparment name • {name}</div>
          <div>{address}</div>
        </div>
        <div>
          <div>5 stars</div>
          <div>
            <div>SVG</div>
            <div>Posted {updatedAt} days ago</div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default JobCard;
