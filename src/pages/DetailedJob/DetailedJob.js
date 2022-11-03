import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';

const DetailedJob = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const {
    title,
    salary,
    updatedAt,
    employment_type,
    benefits,
    pictures,
    name,
    address,
    phone,
    email,
  } = location.state.job;

  return (
    <main>
      <div>
        <section>
          <div>
            <h2>Job details</h2>
            <ul>
              <li>Save to my list</li>
              <li>Share</li>
            </ul>
          </div>
          <button type="button">Apply Now</button>
          <div>
            <h3>{title}</h3>
            <p>&euro; {salary.replaceAll('k', ' 000')}</p>
            <p>Brutto, per year</p>
          </div>
          <p>Posted {moment(updatedAt).fromNow()}</p>
          <button type="button">Apply Now</button>
        </section>
        <section>
          <h2>Additional info</h2>
          <div>
            <h3>Employment type</h3>
            <ul>
              {employment_type.map(type => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Benefits</h3>
            <ul>
              {benefits.map(benefit => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <h2>Attached images</h2>
          <ul>
            {pictures.map((picture, index) => (
              <li key={index}>
                <img src={picture} alt={name} />
              </li>
            ))}
          </ul>
        </section>
        <section>
          <div>
            <p>Deparment name.</p>
            <p>{name}.</p>
            <p>{address}</p>
            <p>{phone},</p>
            <p>{email}</p>
          </div>
          <div>Map</div>
        </section>
      </div>
      <Link to={backLinkHref}>Return to job board</Link>
    </main>
  );
};

export default DetailedJob;
