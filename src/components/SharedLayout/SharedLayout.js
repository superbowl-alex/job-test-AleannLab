import GlobalStyles from 'GlobalStyles';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <Outlet />
      <GlobalStyles />
    </div>
  );
};

export default SharedLayout;
