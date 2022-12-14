import GlobalStyles from 'GlobalStyles';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Outlet />
      <GlobalStyles />
    </Container>
  );
};

export default SharedLayout;
