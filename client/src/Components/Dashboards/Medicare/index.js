import React, { Component, Fragment } from 'react';
import Tabs from 'react-responsive-tabs';

import PageTitleAlt3 from '../../Layout/AppMain/PageTitleAlt3';

// Examples
import SalesDashboard1 from './Examples/Variation1';

const tabsContent = [
  {
    title: 'Sales Report',
    content: <SalesDashboard1 />,
  },
  {
    title: 'Account Activity',
    content: <SalesDashboard1 />,
  },
  {
    title: 'Profile Status',
    content: <SalesDashboard1 />,
  },
  {
    title: 'New Accounts',
    content: <SalesDashboard1 />,
  },
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index,
  }));
}

export default class MedicareDashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className='app-inner-layout'>
          <PageTitleAlt3
            heading='Medicare Dashboard'
            subheading='This is an example dashboard created using build-in elements and components.'
            icon='pe-7s-graph opacity-6'
            breadcrumbTitle='Medicare'
          />
          <Tabs
            tabsWrapperClass='body-tabs body-tabs-layout body-tabs-big'
            transform={false}
            showInkBar={true}
            items={getTabs()}
          />
        </div>
      </Fragment>
    );
  }
}
