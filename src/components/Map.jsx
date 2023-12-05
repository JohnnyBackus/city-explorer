import {If,Then,Else,When} from 'react-if';
const API_KEY = import.meta.env.VITE_LOCATION_API_KEY;

function Map(props) {
  return (
    <When condition={props.lat && props.long}>
      <figure>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${props.lat},${props.long}&size=400x300&format=png`} width="500" />
      </figure>
    </When>
  )
}

export default Map;