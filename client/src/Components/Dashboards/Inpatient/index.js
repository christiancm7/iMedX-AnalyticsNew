import React, { Component, Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

//import PageTitle from '../../../Layout/AppMain/PageTitle';
import PageTitleAlt3 from '../../Layout/AppMain/PageTitleAlt3';

import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples
import AnalyticsDashboard1 from './Examples/Variation1';
import AnalyticsDashboard2 from './Examples/Variation2';

export default class InpatientDashboard extends Component {
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
            heading='Inpatient Dashboard'
            subheading='This is an example dashboard created using build-in elements and components.'
            icon='pe-7s-graph opacity-6'
            breadcrumbTitle='Inpatient'
          />
          <Tabs
            defaultActiveKey='1'
            renderTabBar={() => <ScrollableInkTabBar />}
            renderTabContent={() => <TabContent />}
          >
            <TabPane tab='Variation 1' key='1'>
              <AnalyticsDashboard1 />
            </TabPane>
            <TabPane tab='Variation 2' key='2'>
              <AnalyticsDashboard2 />
            </TabPane>
          </Tabs>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
