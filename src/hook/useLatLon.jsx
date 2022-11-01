import React from 'react';

const useLatLon = () => {

    function success(pos) {
        const crd = pos.coords; 
        
        // cordenadas
        const lat = crd.latitude;
        const lon = crd.longitude
      }
      //para encotra cordenadas
      navigator.geolocation.getCurrentPosition(success); 
    return{}
    }
export default useLatLon;