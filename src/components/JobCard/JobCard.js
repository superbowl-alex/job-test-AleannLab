import { useLocation, Link } from 'react-router-dom';
import moment from 'moment';
import {
  WrapCard,
  WrapAdditionalInfo,
  Image,
  WrapMainInfo,
  Title,
  WrapTextInfo,
  DepName,
  Address,
  Note,
  Post,
} from './JobCard.styled';
import { ReactComponent as IconLocation } from '../../images/location.svg';
import { ReactComponent as IconBookmark } from '../../images/bookmark.svg';
import Stars from 'components/Stars';

const JobCard = ({ job }) => {
  const { pictures, title, name, address, updatedAt } = job;
  const location = useLocation();

  return (
    <>
      <Link to="/details" state={{ from: location, job: job }}>
        <WrapCard>
          <WrapMainInfo>
            <Image src={pictures[0]} alt={name} loading="lazy" />
            <WrapTextInfo>
              <Title>{title}</Title>
              <DepName>Deparment name • {name}</DepName>
              <Address>
                <IconLocation width={13} height={18} />
                <p>{address}</p>
              </Address>
            </WrapTextInfo>
          </WrapMainInfo>
          <WrapAdditionalInfo>
            <Stars count={5} />
            <Note>
              <IconBookmark />
              <Post>Posted {moment(updatedAt).fromNow()} </Post>
            </Note>
          </WrapAdditionalInfo>
        </WrapCard>
      </Link>
    </>
  );
};

export default JobCard;
