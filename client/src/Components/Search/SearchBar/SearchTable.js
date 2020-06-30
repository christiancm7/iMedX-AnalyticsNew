import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

import ReactTable from 'react-table';
import PageTitle from '../../Layout/AppMain/PageTitle';
import PatientFormInline from './Examples/PatientFormInline';
import ProviderFormInline from './Examples/ProviderFormInline';
import { makeData } from './Examples/utils';
// Tabs
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

export default class SearchHome extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
    };
  }

  render() {
    const { data } = this.state;

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
          <div>
            <PageTitle
              heading='Search'
              subheading='Search by Patient or Provider.'
              icon='pe-7s-arc icon-gradient bg-tempting-azure'
            />
          </div>
          {/* start */}
          <Tabs
            defaultActiveKey='1'
            renderTabBar={() => <ScrollableInkTabBar />}
            renderTabContent={() => <TabContent />}
          >
            <TabPane tab='Patient' key='1'>
              <Card className='main-card mb-3'>
                <CardBody>
                  <CardTitle>Search Patient</CardTitle>
                  <PatientFormInline />
                </CardBody>
              </Card>
            </TabPane>
            <TabPane tab='Provider' key='2'>
              <Card className='main-card mb-3'>
                <CardBody>
                  <CardTitle>Search Provider</CardTitle>
                  <ProviderFormInline />
                </CardBody>
              </Card>
            </TabPane>
          </Tabs>
          {/* end */}

          <Row>
            <Col md='12'>
              <Card className='main-card mb-3'>
                <CardBody>
                  <ReactTable
                    data={data}
                    columns={[
                      {
                        Header: 'Name',
                        columns: [
                          {
                            Header: 'First Name',
                            accessor: 'firstName',
                          },
                          {
                            Header: 'Last Name',
                            id: 'lastName',
                            accessor: (d) => d.lastName,
                          },
                        ],
                      },
                      {
                        Header: 'Info',
                        columns: [
                          {
                            Header: 'Age',
                            accessor: 'age',
                          },
                          {
                            Header: 'Status',
                            accessor: 'status',
                          },
                        ],
                      },
                      {
                        Header: 'Stats',
                        columns: [
                          {
                            Header: 'Visits',
                            accessor: 'visits',
                          },
                        ],
                      },
                    ]}
                    defaultPageSize={10}
                    className='-striped -highlight'
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
