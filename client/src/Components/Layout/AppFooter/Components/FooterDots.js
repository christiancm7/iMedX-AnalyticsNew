import React, { Fragment } from 'react';

import { Nav, Button, NavItem, DropdownItem, Popover } from 'reactstrap';

import city2 from '../../../../assets/utils/images/dropdown-header/city2.jpg';
import city3 from '../../../../assets/utils/images/dropdown-header/city3.jpg';

import Flag from 'react-flagkit';

import Tabs from 'react-responsive-tabs';

// Dropdown Tabs Content
import ChatExample from './TabsContent/ChatExample';
import TimelineEx from './TabsContent/TimelineExample';
import SysErrEx from './TabsContent/SystemExample';

const tabsContent = [
  {
    title: 'Messages',
    content: <ChatExample />,
  },
  {
    title: 'Events',
    content: <TimelineEx />,
  },
  {
    title: 'Errors',
    content: <SysErrEx />,
  },
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index,
  }));
}

class FooterDots extends React.Component {
  constructor(props) {
    super(props);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.state = {
      popoverOpen1: false,
      popoverOpen2: false,
      popoverOpen3: false,
    };
  }

  toggle1(event) {
    event.preventDefault();
    this.setState({
      popoverOpen1: !this.state.popoverOpen1,
    });
  }

  toggle2(event) {
    event.preventDefault();
    this.setState({
      popoverOpen2: !this.state.popoverOpen2,
    });
  }

  toggle3(event) {
    event.preventDefault();
    this.setState({
      popoverOpen3: !this.state.popoverOpen3,
    });
  }

  render() {
    return (
      <Fragment>
        <div className='footer-dots'>
          <a
            href='https://colorlib.com/'
            onClick={this.toggle1}
            className='dot-btn-wrapper'
            id='PopoverFooter-1'
          >
            <i className='dot-btn-icon lnr-bullhorn icon-gradient bg-mean-fruit' />
            <div className='badge badge-dot badge-abs badge-dot-sm badge-danger'>
              Notifications
            </div>
          </a>
          <div className='dots-separator' />
          <a
            href='https://colorlib.com/'
            onClick={this.toggle2}
            className='dot-btn-wrapper'
            id='PopoverFooter-2'
          >
            <i className='dot-btn-icon lnr-earth icon-gradient bg-happy-itmeo' />
          </a>
          <div className='dots-separator' />
          <Popover
            className='popover-custom popover-custom-xl'
            container='.app-container'
            hideArrow
            fade={false}
            trigger='legacy'
            placement='top-start'
            isOpen={this.state.popoverOpen1}
            target='PopoverFooter-1'
            toggle={this.toggle1}
          >
            <div className='dropdown-menu-header mb-0'>
              <div className='dropdown-menu-header-inner bg-strong-bliss'>
                <div
                  className='menu-header-image opacity-1'
                  style={{
                    backgroundImage: 'url(' + city2 + ')',
                  }}
                />
                <div className='menu-header-content text-white'>
                  <h5 className='menu-header-title'>Notifications</h5>
                  <h6 className='menu-header-subtitle'>
                    You have <b className='text-warning'>21 </b>
                    unread messages
                  </h6>
                </div>
              </div>
            </div>
            <div className='card-tabs-animated card-tabs-animated-inner'>
              <Tabs
                tabsWrapperClass='body-tabs body-tabs-alt'
                transform={false}
                showInkBar={true}
                items={getTabs()}
              />
            </div>
            <Nav vertical>
              <NavItem className='nav-item-btn text-center pt-4 pb-3'>
                <Button className='btn-shadow btn-wide btn-pill' color='dark'>
                  <div className='badge badge-dot badge-dot-lg badge-warning badge-pulse'>
                    Badge
                  </div>
                  View All Messages
                </Button>
              </NavItem>
            </Nav>
          </Popover>
          <Popover
            className='popover-custom popover-custom-sm'
            trigger='legacy'
            hideArrow
            fade={false}
            placement='top'
            isOpen={this.state.popoverOpen2}
            target='PopoverFooter-2'
            toggle={this.toggle2}
          >
            <div className='dropdown-menu-header'>
              <div className='dropdown-menu-header-inner pt-4 pb-4 bg-dark'>
                <div
                  className='menu-header-image opacity-1'
                  style={{
                    backgroundImage: 'url(' + city3 + ')',
                  }}
                />
                <div className='menu-header-content text-center text-white'>
                  <h6 className='menu-header-subtitle mt-0'>Choose Language</h6>
                </div>
              </div>
            </div>
            <div className='dropdown-menu-rounded'>
              <DropdownItem className='pt-0' header>
                Selected
              </DropdownItem>
              <DropdownItem active>
                <Flag className='mr-3 opacity-8' country='DE' />
                Germany
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem header>Popular Languages</DropdownItem>
              <DropdownItem>
                <Flag className='mr-3 opacity-8' country='US' />
                USA
              </DropdownItem>
              <DropdownItem>
                <Flag className='mr-3 opacity-8' country='CH' />
                Switzerland
              </DropdownItem>
              <DropdownItem>
                <Flag className='mr-3 opacity-8' country='FR' />
                France
              </DropdownItem>
              <DropdownItem>
                <Flag className='mr-3 opacity-8' country='ES' />
                Spain
              </DropdownItem>
            </div>
          </Popover>
        </div>
      </Fragment>
    );
  }
}

export default FooterDots;
