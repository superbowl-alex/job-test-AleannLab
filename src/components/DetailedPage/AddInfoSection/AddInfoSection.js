import PropTypes from 'prop-types';
import {
  Section,
  Title,
  AddWrap,
  AddSubTitle,
  AddList,
  AddItemType,
  AddItemBenefits,
} from './AddInfoSection.styled';

const AddInfoSection = ({ employment_type, benefits }) => {
  return (
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
  );
};

AddInfoSection.propTypes = {
  employment_type: PropTypes.array.isRequired,
  benefits: PropTypes.array.isRequired,
};

export default AddInfoSection;
