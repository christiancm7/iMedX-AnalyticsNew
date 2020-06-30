import React, { Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class PatientFormInline extends React.Component {
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
          <Form>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for='exampleCity'>First Name</Label>
                  <Input type='text' name='city' id='exampleCity' />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for='exampleState'>Last Name</Label>
                  <Input type='text' name='state' id='exampleState' />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for='exampleZip'>Date of Birth</Label>
                  <Input type='text' name='zip' id='exampleZip' />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for='exampleZip'>SSN#</Label>
                  <Input type='text' name='zip' id='exampleZip' />
                </FormGroup>
              </Col>
            </Row>
          </Form>
          <div className='divider' />
          <Form>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for='exampleCity'>MRN#</Label>
                  <Input type='text' name='city' id='exampleCity' />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for='exampleState'>Encounter ID#</Label>
                  <Input type='text' name='state' id='exampleState' />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for='exampleZip'>SSN#</Label>
                  <Input type='text' name='zip' id='exampleZip' />
                </FormGroup>
              </Col>
            </Row>
          </Form>
          <div className='divider' />
          <Form inline>
            <Button color='info'>Submit</Button>
          </Form>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
