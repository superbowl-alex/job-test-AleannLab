import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import {
  Main,
  Section,
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
} from './DetailedJob.styled';
import { ReactComponent as IconSave } from '../../images/star.svg';
import { ReactComponent as IconShare } from '../../images/share.svg';

const DetailedJob = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
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
  } = location.state.job;

  return (
    <Main>
      <div>
        <Section>
          <div>
            <Title>Job details</Title>
            <NoteList>
              <WrapItem>
                <IconSave width={21} height={20} />
                <p>Save to my list</p>
              </WrapItem>
              <WrapItem>
                <IconShare width={20} height={20} />
                <p>Share</p>
              </WrapItem>
            </NoteList>
          </div>
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
        <Section>
          <Title>Additional info</Title>
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
        </Section>
        <Section>
          <Title>Attached images</Title>
          <ul>
            {pictures.map((picture, index) => (
              <li key={index}>
                <img src={picture} alt={name} loading="lazy" />
              </li>
            ))}
          </ul>
        </Section>
        <Section>
          <Title>Contacts</Title>
          <div>
            <p>Deparment name.</p>
            <p>{name}.</p>
            <p>{address}</p>
            <p>{phone},</p>
            <p>{email}</p>
          </div>
          <div>Map</div>
        </Section>
      </div>
      <Link to={backLinkHref}>Return to job board</Link>
    </Main>
  );
};

export default DetailedJob;
