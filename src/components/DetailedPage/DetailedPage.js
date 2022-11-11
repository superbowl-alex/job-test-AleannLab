import { useLocation } from 'react-router-dom';
import { WrapAdditional, BackLink, BackText } from './DetailedPage.styled';
import { ReactComponent as IconArrow } from '../../images/arrow.svg';
import MainInfoSection from './MainSection/MainInfoSection';
import ImageSection from './ImageSection';
import AddInfoSection from './AddInfoSection';
import ContactsSection from './ContactsSection';

const DetailedPage = () => {
  const currentLocation = useLocation();
  const backLinkHref = currentLocation.state?.from ?? '/';
  const {
    title,
    salary,
    updatedAt,
    description,
    employment_type,
    benefits,
    pictures,
    name,
    address,
    phone,
    email,
    location: { lat, long },
  } = currentLocation.state.job;

  return (
    <>
      <MainInfoSection
        title={title}
        salary={salary}
        updatedAt={updatedAt}
        description={description}
      />
      <WrapAdditional>
        <ImageSection pictures={pictures} name={name} />
        <AddInfoSection employment_type={employment_type} benefits={benefits} />
      </WrapAdditional>
      <ContactsSection
        name={name}
        address={address}
        phone={phone}
        email={email}
        lat={lat}
        long={long}
      />
      <BackLink to={backLinkHref}>
        <IconArrow width={10} height={18} />
        <BackText>Return to job board</BackText>
      </BackLink>
    </>
  );
};

export default DetailedPage;
