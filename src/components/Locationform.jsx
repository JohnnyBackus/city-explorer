/* eslint-disable react/jsx-no-undef */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function LocationForm() {
  return (
    <>
        <InputGroup className="mb-3">
            <Form.Control
                type="text"
                placeholder="Enter: City, St"
                id="citySearchInput"
                aria-describedby="searchHelp"
            />
            <Button variant="outline-secondary" id="citySubmitSearch">
                Explore!
            </Button>
            <Form.Text id="searchHelp" muted>
                Please enter city and state for best search results.
            </Form.Text>
        </InputGroup>
    </>
  );
}

export default LocationForm;
