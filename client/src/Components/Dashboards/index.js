import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// DASHBOARDS

import InpatientDashboard from './Inpatient';
import MedicareDashboard from './Medicare';
import CommerceDashboard from './Commerce';
import PhysicianDashboard from './Physician';
import BillingDashboard from './Billing';
import MinimalDashboard2 from './Minimal/Variation2';

// Layout

import AppHeader from '../Layout/AppHeader';
import AppSidebar from '../Layout/AppSidebar';
import AppFooter from '../Layout/AppFooter';
// import AppFooter from '../../Layout/AppFooter';

const Dashboards = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className='app-main'>
      <AppSidebar />
      <div className='app-main__outer'>
        <div className='app-main__inner'>
          <Route path={`${match.url}/billing`} component={BillingDashboard} />
          <Route
            path={`${match.url}/inpatient`}
            component={InpatientDashboard}
          />

          <Route path={`${match.url}/medicare`} component={MedicareDashboard} />
          <Route
            path={`${match.url}/outpatient`}
            component={CommerceDashboard}
          />
          <Route
            path={`${match.url}/physician`}
            component={PhysicianDashboard}
          />
          <Route path={`${match.url}/ASC`} component={MinimalDashboard2} />
          <Route
            path={`${match.url}/minimal-dashboard-2`}
            component={MinimalDashboard2}
          />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
