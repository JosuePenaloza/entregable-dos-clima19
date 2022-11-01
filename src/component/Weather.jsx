import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useBoolean from '../hook/useBloolean';
import Icons from './Icons';
import Login from './Login';

const Weather = () => {

    /// hooks
    const {boolean,setBoolean} = useBoolean()

    //almacenar datos de api
    const [weather, setweather] = useState({})
    const [login, setLogin] = useState(true)


    /// obtener datos de API
    useEffect(() => {
        //funcion para encotra cordenadas
    function success(pos) {

        const crd = pos.coords; 
        
        // cordenadas
        const lat = crd.latitude;
        const lon = crd.longitude


        //&units=metric
        const apiKey = 'a12da3cd2c5def3317e01718fc1cd201'
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
        .then(res => {
            setLogin(false)
            setweather(res.data)
        } )
        
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
            
            Swal.fire(
                `ERROR(${err.code}):`, `${err.message}`, 'warning'
            )
            
          }
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        //para encotra cordenadas
        navigator.geolocation.getCurrentPosition(success,error,options);    
    },[])
    

        //// cambiar C°|F°
    const handleTemp = () => {
        setBoolean(!boolean)

        console.log('dentro de la funcion', boolean)

        function success(pos) {
            const crd = pos.coords; 
            
            // cordenadas
            const lat = crd.latitude;
            const lon = crd.longitude

            //&units=metric
            const apiKey = 'a12da3cd2c5def3317e01718fc1cd201'

            /// C°|F°

            const temp = boolean ? 'metric' : 'imperial'
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${temp}&appid=${apiKey}`)
            .then(res => setweather(res.data))
            console.log('despues de temp', boolean)
        }

            //para encotra cordenadas
        navigator.geolocation.getCurrentPosition(success); 

    }


        //para redondear el numero de grados
    const TempRound = Math.round(weather?.main?.temp)

    return (
        <div className='card' >

            {
                login ? (
                    <Login />                   
                ) : (
                    <div>
                        <div>
                            <h2>{weather?.name} {weather?.sys?.country}</h2>
                            <h2>{TempRound}°</h2>
                        </div>           
                        <div>
                            <button onClick={()=> handleTemp()}>{boolean ? 'c ° / F °' : 'C ° / f °'}</button>
                        </div>          
                        <div>
                            <Icons 
                                icon={weather.weather?.[0]?.icon} 
                                description={weather.weather?.[0]?.description}
                            />
                        </div>
                        <div>
                            <ul>
                                <li>speed: {Math.round(weather.wind?.speed)}</li>
                                <li>gust: {Math.round(weather.wind?.gust)}</li>
                                <li>deg: {weather.wind?.deg}</li>
                                <li>humidity: {weather.main?.humidity}</li>
                            </ul>
                        </div>
                    </div>
                )
            }

            
        </div>
    );
};

export default Weather;




 ///////////////////HORAS

        // const hrs = document.getElementById('time')
        // console.log('horas', hrs)