import PropTypes from 'prop-types';
import { ReactComponent as IconShare } from '../../../images/share.svg';
import { ReactComponent as IconBookmark } from '../../../images/bookmark.svg';
import moment from 'moment';
import {
  Section,
  HeaderWrap,
  Title,
  NoteList,
  WrapItem,
  ButtonApplyBottom,
  ButtonApplyTop,
  WrapSubTitle,
  SubTitle,
  WrapSalary,
  TextSalary,
  ValueSalary,
  Post,
  Description,
} from './MainInfoSection.styled';

const MainInfoSection = ({ title, salary, updatedAt, description }) => {
  return (
    <Section>
      <HeaderWrap>
        <Title>Job details</Title>
        <NoteList>
          <WrapItem>
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
  );
};

MainInfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MainInfoSection;
