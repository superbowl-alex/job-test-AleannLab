import PropTypes from 'prop-types';
import { ReactComponent as IconLocation } from '../../../images/location.svg';
import Map from 'components/DetailedPage/ContactsSection/Map';
import { useJsApiLoader } from '@react-google-maps/api';
import Loader from 'components/Loader';
import {
  TitleContacts,
  ContactsWrap,
  ContactsText,
  Circle,
  ContactsName,
  ContactsAddress,
  ContactsConnect,
  ContactsMap,
} from './ContactsSection.styled';

const API_KEY = process.env.REACT_APP_API_KEY;

const ContactsSection = ({ name, address, phone, email, lat, long }) => {
  const currentCenter = {
    lat: lat,
    lng: long,
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  return (
    <section>
      <TitleContacts>Contacts</TitleContacts>
      <ContactsWrap>
        <ContactsText>
          <Circle></Circle>
          <ContactsName>
            <p>Deparment name.</p>
            <p>{name}.</p>
          </ContactsName>
          <ContactsAddress>
            <IconLocation width={13} height={19} />
            <p>{address}</p>
          </ContactsAddress>
          <ContactsConnect>
            <p>{phone},</p>
            <p>{email}</p>
          </ContactsConnect>
        </ContactsText>
        <ContactsMap>
          {isLoaded ? <Map center={currentCenter} /> : <Loader />}
        </ContactsMap>
      </ContactsWrap>
    </section>
  );
};

ContactsSection.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
};

export default ContactsSection;
