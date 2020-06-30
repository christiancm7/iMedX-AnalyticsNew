import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../Layout/AppMain/PageTitle';

import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples

import FormGrid from './Examples/FormGrid';
import FormGridFormRow from './Examples/FormGridFormRow';

class NewPatient extends React.Component {
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
          <PageTitle
            heading='New Patient'
            subheading='Search by Demographic or Insurance'
            icon='pe-7s-id text-success'
          />
          <Tabs
            defaultActiveKey='1'
            renderTabBar={() => <ScrollableInkTabBar />}
            renderTabContent={() => <TabContent />}
          >
            <TabPane tab='Demographic' key='1'>
              <FormGridFormRow />
            </TabPane>
            <TabPane tab='Insurance' key='2'>
              <FormGrid />
            </TabPane>
          </Tabs>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default NewPatient;
