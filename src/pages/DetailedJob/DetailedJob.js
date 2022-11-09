import { useLocation } from 'react-router-dom';
import moment from 'moment';
import {
  Main,
  Section,
  HeaderWrap,
  Title,
  NoteList,
  WrapItem,
  ButtonApplyTop,
  SubTitle,
  Post,
  WrapSalary,
  TextSalary,
  ValueSalary,
  WrapSubTitle,
  Description,
  ButtonApplyBottom,
  WrapAdditional,
  ImageList,
  ImageItem,
  Image,
  AddSubTitle,
  AddWrap,
  AddList,
  AddItemType,
  AddItemBenefits,
  ContactsWrap,
  ContactsText,
  ContactsMap,
  ContactsName,
  ContactsAddress,
  ContactsConnect,
  BackLink,
  IconStar,
  IconBookmark,
  TitleContacts,
  BackText,
} from './DetailedJob.styled';
import { ReactComponent as IconShare } from '../../images/share.svg';
import { ReactComponent as IconLocatuin } from '../../images/location.svg';
import { ReactComponent as IconArrow } from '../../images/arrow.svg';
import Map from 'components/Map';
import { useJsApiLoader } from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_API_KEY;
const DetailedJob = ({ job }) => {
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
  const defaultCenter = {
    lat: lat,
    lng: long,
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  return (
    <Main>
      <div>
        <Section>
          <HeaderWrap>
            <Title>Job details</Title>
            <NoteList>
              <WrapItem>
                <IconStar width={21} height={20} />
                <IconBookmark width={25} height={25} />
                <p>Save to my list</p>
              </WrapItem>
              <WrapItem>
                <IconShare width={20} height={20} />
                <p>Share</p>
              </WrapItem>
            </NoteList>
          </HeaderWrap>
          <ButtonApplyTop type="button">Apply Now</ButtonApplyTop>
          <WrapSubTitle>
            <SubTitle>{title}</SubTitle>
            <WrapSalary>
              <TextSalary>Brutto, per year</TextSalary>
              <ValueSalary>&euro; {salary.replaceAll('k', ' 000')}</ValueSalary>
            </WrapSalary>
          </WrapSubTitle>
          <Post>Posted {moment(updatedAt).fromNow()}</Post>
          <Description>{description}</Description>
          <ButtonApplyBottom type="button">Apply Now</ButtonApplyBottom>
        </Section>
        <WrapAdditional>
          <Section>
            <Title>Attached images</Title>
            <ImageList>
              {pictures.map((picture, index) => (
                <ImageItem key={index}>
                  <Image src={picture} alt={name} loading="lazy" />
                </ImageItem>
              ))}
            </ImageList>
          </Section>
          <Section>
            <Title>Additional info</Title>
            <AddWrap>
              <div>
                <AddSubTitle>Employment type</AddSubTitle>
                <AddList>
                  {employment_type.map(type => (
                    <AddItemType key={type}>{type}</AddItemType>
                  ))}
                </AddList>
              </div>
              <div>
                <AddSubTitle>Benefits</AddSubTitle>
                <AddList>
                  {benefits.map(benefit => (
                    <AddItemBenefits key={benefit}>{benefit}</AddItemBenefits>
                  ))}
                </AddList>
              </div>
            </AddWrap>
          </Section>
        </WrapAdditional>
        <section>
          <TitleContacts>Contacts</TitleContacts>
          <ContactsWrap>
            <ContactsText>
              <ContactsName>
                <p>Deparment name.</p>
                <p>{name}.</p>
              </ContactsName>
              <ContactsAddress>
                <IconLocatuin width={13} height={19} />
                <p>{address}</p>
              </ContactsAddress>
              <ContactsConnect>
                <p>{phone},</p>
                <p>{email}</p>
              </ContactsConnect>
            </ContactsText>
            <ContactsMap>
              {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading...</h2>}
            </ContactsMap>
          </ContactsWrap>
        </section>
      </div>
      <BackLink to={backLinkHref}>
        <IconArrow width={10} height={18} />
        <BackText>Return to job board</BackText>
      </BackLink>
    </Main>
  );
};

export default DetailedJob;
