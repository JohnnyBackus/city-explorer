/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
{/* <i className={`wi-day-${forecastCode[1]}`}></i> */}

function Weather(props) {
    console.log(props);
    if (props.weatherData) {
        const city = props.weatherData[0].city;
        const forecast = [...props.weatherData];
        // console.log(forecast);
        const forecastDate = forecast.map(item => item.date);
        const forecastDescription = forecast.map(item => item.description);
        const forecastLowTemp = forecast.map(item => item.lowTemp);
        const forecastMaxTemp = forecast.map(item => item.maxTemp);
        const forecastIcon = forecast.map(item => item.icon);
        return (
        <Container>
            <h3> Three Day Forecast for {city} </h3> 
            <Row>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`public/icons/${forecastIcon[0]}.png`} />
                    <Card.Body>
                        <Card.Title>Forecast for Today</Card.Title>
                        <Card.Text>
                            Today will be {forecastDescription[0]} with a high of {forecastMaxTemp[0]} and a low of {forecastLowTemp[0]}.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`public/icons/${forecastIcon[1]}.png`} />
                    <Card.Body>
                    <Card.Title>Forecast for {forecastDate[1]}</Card.Title>
                        <Card.Text>
                            Tomorrow will be {forecastDescription[1]} with a high of {forecastMaxTemp[1]} and a low of {forecastLowTemp[2]}.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`public/icons/${forecastIcon[2]}.png`} />
                    <Card.Body>
                    <Card.Title>Forecast for {forecastDate[2]}</Card.Title>
                        <Card.Text>
                            On {forecastDate[2]} there will be {forecastDescription[2]} with a high of {forecastMaxTemp[3]} and a low of {forecastLowTemp[3]}.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )}
}

export default Weather;
