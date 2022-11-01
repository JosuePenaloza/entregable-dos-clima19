// import React from 'react';

// const useApi = () => {
//     const [weather, setweather] = useState({})

//       useEffect(() => {
//             //funcion para encotra cordenadas
//         function success(pos) {

//             const crd = pos.coords; 
            
//             // cordenadas
//             const lat = crd.latitude;
//             const lon = crd.longitude

//             const tiempo = boolean ? 'metric' : 'imperial'

//             //&units=metric
//             const apiKey = 'a12da3cd2c5def3317e01718fc1cd201'
            
//             axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${tiempo}l&appid=${apiKey}`)
//             .then(res => setweather(res.data))
          
//           }
//           navigator.geolocation.getCurrentPosition(success);    
//         },[])

//     return {}
// };

// export default useApi;