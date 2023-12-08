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
    const handleImageError = (event) => {
        event.target.src = 'https://plus.unsplash.com/premium_photo-1664304973210-aee8dfc4d0dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdCUyMGFuZCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D'
        // event.target.alt='movie poster image not available';
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
                <Image 
                    src={props.movieData[0].img_url} 
                    rounded 
                    onError={handleImageError}
                    alt={`Poster image from the movie ${props.movieData[0].title}`}
                />
                <Carousel.Caption>
                    <h3>{props.movieData[0].title}</h3>
                    <p>{props.movieData[0].description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    src={props.movieData[1].img_url} 
                    rounded 
                    onError={handleImageError}
                    alt={`Poster image from the movie ${props.movieData[1].title}`}/>
                <Carousel.Caption>
                    <h3>{props.movieData[1].title}</h3>
                    <p>{props.movieData[1].description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    src={props.movieData[2].img_url} 
                    rounded 
                    onError={handleImageError}
                    alt={`Poster image from the movie ${props.movieData[2].title}`}/>
                <Carousel.Caption>
                    <h3>{props.movieData[2].title}</h3>
                    <p>{props.movieData[2].description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    src={props.movieData[3].img_url} 
                    rounded 
                    onError={handleImageError}
                    alt={`Poster image from the movie ${props.movieData[3].title}`}/>
                <Carousel.Caption>
                    <h3>{props.movieData[3].title}</h3>
                    <p>{props.movieData[3].description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    src={props.movieData[4].img_url} 
                    rounded 
                    onError={handleImageError}
                    alt={`Poster image from the movie ${props.movieData[4].title}`}/>
                <Carousel.Caption>
                    <h3>{props.movieData[4].title}</h3>
                    <p>{props.movieData[4].description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )}
}

export default Movies;
