/* eslint-disable react/prop-types */
// import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

function CityLatLongAccordian(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>City Search Latitude and Longitude</Accordion.Header>
        <Accordion.Body>
        You&apos;re searching for information about {props.city} located at {props.lat} and {props.long}...
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CityLatLongAccordian;