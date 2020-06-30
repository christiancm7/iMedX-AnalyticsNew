import { Route, Redirect } from 'react-router-dom';
import React, { Suspense, lazy, Fragment } from 'react';
import Loader from 'react-loaders';

import { ToastContainer } from 'react-toastify';

const UserPages = lazy(() => import('../../Components/UserPages'));
const Login = lazy(() => import('../../Components/UserPages/LoginBoxed'));
const Applications = lazy(() => import('../../Components/Applications'));
const Dashboards = lazy(() => import('../../Components/Dashboards'));

const Widgets = lazy(() => import('../../Components/Widgets'));
const Elements = lazy(() => import('../../Components/Elements'));
const Components = lazy(() => import('../../Components/UI'));
const Charts = lazy(() => import('../../Components/Charts'));
const Forms = lazy(() => import('../../Components/Forms'));
const Tables = lazy(() => import('../../Components/Tables'));

//Essentially our homepage it loads into the next component so its more interactive.
// This component lazy loads one of our main navigation items
const AppMain = () => {
  return (
    <Fragment>
      {/* Auth / Login */}
      <Suspense
        fallback={
          <div className='loader-container'>
            <div className='loader-container-inner'>
              <div className='text-center'>
                <Loader type='ball-pulse-rise' />
              </div>
              <h6 className='mt-5'>
                Please wait while we load the login
                <small>
                  Because this is a demonstration we load at once all the
                  Components examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route exact path='/login' component={Login} />
      </Suspense>
      {/* Components */}
      {/* CM edit - Overview / Home */}
      <Route exact path='/' render={() => <Redirect to='/login/' />} />
      <Suspense
        fallback={
          <div className='loader-container'>
            <div className='loader-container-inner'>
              <div className='text-center'>
                <Loader type='ball-pulse-rise' />
              </div>
              <h6 className='mt-5'>
                Please wait while we load all the Components examples
                <small>
                  Because this is a demonstration we load at once all the
                  Components examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path='/components' component={Components} />
      </Suspense>

      {/* Forms */}

      <Suspense
        fallback={
          <div className='loader-container'>
            <div className='loader-container-inner'>
              <div className='text-center'>
                <Loader type='ball-pulse-rise' />
              </div>
              <h6 className='mt-5'>
                Please wait while we load all the Forms examples
                <small>
                  Because this is a demonstration we load at once all the Forms
                  examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path='/forms' component={Forms} />
      </Suspense>

      {/* Charts */}

      <Suspense
        fallback={
          <div className='loader-container'>
            <div className='loader-container-inner'>
              <div className='text-center'>
                <Loader type='ball-rotate' />
              </div>
              <h6 className='mt-3'>
                Please wait while we load all the Charts examples
                <small>
                  Because this is a demonstration we load at once all the Charts
                  examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path='/charts' component={Charts} />
      </Suspense>

      {/* Tables */}

      <Suspense
        fallback={
          <div className='loader-container'>
            <div className='loader-container-inner'>
              <div className='text-center'>
                <Loader type='ball-pulse-rise' />
              </div>
              <h6 className='mt-5'>
                Please wait while we load all the Tables examples
                <small>
                  Because this is a demonstration we load at once all the Tables
                  examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path='/tables' component={Tables} />
      </Suspense>

      {/* Elements */}

      <Suspense
        fallback={
          <div className='loader-container'>
            <div className='loader-container-inner'>
              <div className='text-center'>
                <Loader type='line-scale' />
              </div>
              <h6 className='mt-3'>
                Please wait while we load all the Elements examples
                <small>
                  Because this is a demonstration we load at once all the
                  Elements examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path='/elements' component={Elements} />
      </Suspense>

      {/* Dashboard Widgets */}

      <Suspense
        fallback={
          <div className='loader-container'>
            <div className='loader-container-inner'>
              <div className='text-center'>
                <Loader type='ball-pulse-sync' />
              </div>
              <h6 className='mt-3'>
                Please wait while we load all the Dashboard Widgets examples
                <small>
                  Because this is a demonstration we load at once all the
                  Dashboard Widgets examples. This wouldn't happen in a real
                  live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path='/widgets' component={Widgets} />
      </Suspense>

      {/* Pages */}

      <Suspense
        fallback={
          <div className='loader-container'>
            <div className='loader-container-inner'>
              <div className='text-center'>
                <Loader type='line-scale-party' />
              </div>
              <h6 className='mt-3'>
                Please wait while we load all the Pages examples
                <small>
                  Because this is a demonstration we load at once all the Pages
                  examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path='/pages' component={UserPages} />
      </Suspense>

      {/* Applications */}

      <Suspense
        fallback={
          <div className='loader-container'>
            <div className='loader-container-inner'>
              <div className='text-center'>
                <Loader type='ball-pulse' />
              </div>
              <h6 className='mt-3'>
                Please wait while we load all the Applications examples
                <small>
                  Because this is a demonstration we load at once all the
                  Applications examples. This wouldn't happen in a real live
                  app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path='/apps' component={Applications} />
      </Suspense>

      {/* Dashboards */}

      <Suspense
        fallback={
          <div className='loader-container'>
            <div className='loader-container-inner'>
              <div className='text-center'>
                <Loader type='ball-grid-cy' />
              </div>
              <h6 className='mt-3'>
                Please wait while we load all the Dashboards examples
                <small>
                  Because this is a demonstration, we load at once all the
                  Dashboards examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path='/dashboards' component={Dashboards} />
      </Suspense>

      {/* GIS */}
      {/* CM edit -  Dashboards*/}
      <Suspense
        fallback={
          <div className='loader-container'>
            <div className='loader-container-inner'>
              <div className='text-center'>
                <Loader type='ball-grid-cy' />
              </div>
              <h6 className='mt-3'>
                Please wait while we load all the GIS examples
                <small>
                  Because this is a demonstration, we load at once all the GIS
                  examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      ></Suspense>

      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
