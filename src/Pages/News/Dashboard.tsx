import DashboardFeed from './DashboardFeed';
import DashboardNavBar from './DashboardNavBar';

const Dashboard = () => {
  return (
    <div className='flex-col w-full'>
      <DashboardNavBar />
      <DashboardFeed />
    </div>
  );
};

export default Dashboard;
