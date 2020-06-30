import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Forms

import NewPatient from './New/index';

// Layout

import AppHeader from '../Layout/AppHeader/';
import AppSidebar from '../Layout/AppSidebar/';
import AppFooter from '../Layout/AppFooter/';

const Patients = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className='app-main'>
      <AppSidebar />
      <div className='app-main__outer'>
        <div className='app-main__inner'>
          {/* Form Elements */}

          <Route path={`${match.url}/new`} component={NewPatient} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Patients;
