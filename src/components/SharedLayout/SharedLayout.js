import GlobalStyles from 'GlobalStyles';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <Outlet />
      <div>Pagination</div>
      <GlobalStyles />
    </div>
  );
};

export default SharedLayout;
