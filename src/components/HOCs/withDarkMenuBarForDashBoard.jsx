
import Dashboard from '../../pages/dashboard/dashboard';

const withDashboardMenu = (Component) => {
  return (props) => (
    <>
      <Dashboard />
      <Component {...props} />
    </>
  );
};

export default withDashboardMenu;
