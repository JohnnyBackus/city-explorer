/* eslint-disable react/prop-types */
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function Movies(props) {
    console.log(props.movieData);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    // const movieTitle = props.movieData.map(item => item.title);
    // const movieDescription = props.movieData.map(item => item.description);
    // const moviePopularity = props.movieData.map(item => item.popularity);
    // const movieRelease = props.movieData.map(item => item.release);
    if (props.movieData.length>0) {
    console.log(props.movieData[0].title);
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Image src="src/assets/images/catmeme.png" roundedCircle />
                <Carousel.Caption>
                    <h3>{props.movieData[0].title}</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="src/assets/images/catmeme.png" roundedCircle />
                <Carousel.Caption>
                    <h3>{props.movieData[1].title}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="src/assets/images/catmeme.png" roundedCircle />
                <Carousel.Caption>
                    <h3>{props.movieData[2].title}</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )}
}

export default Movies;
