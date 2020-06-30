import React, { Component, Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitleAlt3 from '../../Layout/AppMain/PageTitleAlt3';

import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples
import CRMDashboard1 from './Examples/Variation1';
import CRMDashboard2 from './Examples/Variation2';
// import PageTitle from "../Commerce";

export default class PhysicianDashboard extends Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup
          component='div'
          transitionName='TabsAnimation'
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <PageTitleAlt3
            heading='Physician Dashboard'
            subheading='This is an example dashboard created using build-in elements and components.'
            icon='pe-7s-graph opacity-6'
            breadcrumbTitle='Physician'
          />
          <Tabs
            defaultActiveKey='1'
            renderTabBar={() => <ScrollableInkTabBar />}
            renderTabContent={() => <TabContent />}
          >
            <TabPane tab='Variation 1' key='1'>
              <CRMDashboard2 />
            </TabPane>
            <TabPane tab='Variation 2' key='2'>
              <CRMDashboard1 />
            </TabPane>
          </Tabs>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
