import React from 'react';
import DashBFeedComp from './DashBFeedComp';
import DashBFeedWidgets from './DashBFeedWidgets';

const DashboardFeed = () => {
  return (
    <div className='flex flex-wrap justify-evenly '>
      <DashBFeedComp />
      <DashBFeedWidgets />
    </div>
  );
};

export default DashboardFeed;
