/* eslint-disable react/prop-types */
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function ErrorAlert(props) {
    const [show, setShow] = useState(false);
    if (props.errorMessage) {
        return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
            Location data not reachable due to the following error: &apos;{props.errorMessage}&apos;. Please try again.
            </p>
        </Alert>
        // <Button onClick={() => setShow(true)}>Show Alert</Button>;
        );
    }
}

export default ErrorAlert;