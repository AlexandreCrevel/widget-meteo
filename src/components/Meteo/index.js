import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import './style.scss';

function Meteo({ city, zipcode }) {
    const [ temperature, setTemperature ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},fr&appid=63043c612f4378f937d96bf7fecacd7f&units=metric`)
        .then((res) => {
            console.log(res.data.main.temp)
            setTemperature(res.data.main.temp);
        })
        .catch(() => {
            console.log('error')
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);
  return (
    <article className='meteo'>
        <h2 className='meteo-title'>Météo à {city}</h2>
        <p className='meteo-code'>Code postal : {zipcode}</p>
        {!loading && <p className='meteo-temp'>Il fait {temperature}°C</p>}
    </article>
  );
}

Meteo.propTypes = {
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
};

export default Meteo;
