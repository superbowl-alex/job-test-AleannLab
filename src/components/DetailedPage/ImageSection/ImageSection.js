import PropTypes from 'prop-types';
import {
  Section,
  Title,
  ImageList,
  ImageItem,
  Image,
} from './ImageSection.styled';

const ImageSection = ({ pictures, name }) => {
  return (
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
  );
};

ImageSection.propTypes = {
  pictures: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default ImageSection;
