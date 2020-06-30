import React, { Fragment } from 'react';
//import { Route } from 'react-router-dom';

// DASHBOARDS

// Layout

import AppHeader from '../Layout/AppHeader';
import AppSidebar from '../Layout/AppSidebar';
import AppFooter from '../Layout/AppFooter';

import SearchHome from './SearchBar/SearchTable';

const Search = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className='app-main'>
      <AppSidebar />
      <div className='app-main__outer'>
        <div className='app-main__inner'>
          <SearchHome />
          {/* <Route path={`${match.url}/profile`} component={ProfileBox} /> */}
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Search;
