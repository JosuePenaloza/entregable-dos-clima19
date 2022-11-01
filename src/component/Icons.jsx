import React from 'react';

const Icons = ({icon, description}) => {
    console.log(icon)

    const imgIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`

    return (
        <div className='icon'>
            <img src={imgIcon} />
            <h3>{description}</h3>       
        </div>
    );
};

export default Icons;