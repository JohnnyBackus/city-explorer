/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { useState , useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CityLatLongAccordian from './CityLatLongAccordian';

function LocationForm(props) {
    const [cityInput, setCityInput] = useState('');
    const [showAccordian, setShowAccordian] = useState(false);
    const cityInputRef = useRef(null);

    function handleChange(e) {
        setShowAccordian(false);
        setCityInput(e.target.value);
        console.log(e);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // setCityInput(e.target.value);
        setShowAccordian(true);
        props.handleExploreCity(cityInput);
        console.log(cityInput);
        cityInputRef.current.value = '';
    }

    return (
        <>
        <Form onSubmit = {handleSubmit}>
        <Form.Label htmlFor="citySearchInput">Search your city here!</Form.Label>
        <InputGroup className="mb-3">
        <Form.Control
            type="text"
            onChange={handleChange} 
            placeholder="Enter: City, St"
            id="citySearchInput"
            aria-describedby="searchHelp"
            ref={cityInputRef}
        />
        <Button type="submit" variant="outline-secondary" id="citySubmitSearch">
            Explore!
        </Button >
        </InputGroup>
        <Form.Text id="searchHelp" muted>
            Please enter city and state for best search results.
        </Form.Text>
        {showAccordian && props.city &&
        <CityLatLongAccordian city = {props.city} lat={props.lat} long={props.long} />
        }
        </Form>
        </>
    );
}

export default LocationForm;
