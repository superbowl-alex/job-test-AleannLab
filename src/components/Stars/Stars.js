import { ReactComponent as IconStar } from '../../images/star.svg';
import { Container, Item } from './Stars.styled';
const Stars = ({ count }) => {
  return (
    <Container>
      {Array(count)
        .fill('')
        .map((_, idx) => (
          <Item key={idx}>
            <IconStar width="10" height="10" />
          </Item>
        ))}
    </Container>
  );
};

export default Stars;
