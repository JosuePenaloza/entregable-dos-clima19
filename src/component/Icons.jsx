import React from 'react';
import ImgTemp from './ImgTemp';

const Icons = ({icon, description}) => {
    console.log(icon)

    const imgIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`

    switch (icon) {
        case "01d":
            document.body.style.backgroundImage = `url('${ImgTemp['01d']}')`
            break;
        
        case "01n":
            document.body.style.backgroundImage = `url('${ImgTemp['01n']}')`
            break;

        case "02d":
            document.body.style.backgroundImage = `url('${ImgTemp['02d']}')`
            break;

        case "02n":
            document.body.style.backgroundImage = `url('${ImgTemp['02n']}')`
            break;

        case "03d":
            document.body.style.backgroundImage = `url('${ImgTemp['03d']}')`
            break;

        case "03n":
            document.body.style.backgroundImage = `url('${ImgTemp['03n']}')`
            break;

        case "04d":
            document.body.style.backgroundImage = `url('${ImgTemp['04d']}')`
            break;

        case "04n":
            document.body.style.backgroundImage = `url('${ImgTemp['04n']}')`
            break;

        case "09d":
            document.body.style.backgroundImage = `url('${ImgTemp['09d']}')`
            break;

        case "09n":
            document.body.style.backgroundImage = `url('${ImgTemp['09n']}')`
            break;

        case "10d":
            document.body.style.backgroundImage = `url('${ImgTemp['10d']}')`
            break;

        case "10n":
            document.body.style.backgroundImage = `url('${ImgTemp['10n']}')`
            break;

        case "11d":
            document.body.style.backgroundImage = `url('${ImgTemp['11d']}')`
            break;

        case "11n":
            document.body.style.backgroundImage = `url('${ImgTemp['11n']}')`
            break;

        case "13d":
            document.body.style.backgroundImage = `url('${ImgTemp['13d']}')`
            break;

        case "13n":
            document.body.style.backgroundImage = `url('${ImgTemp['13n']}')`
            break;

        case "50d":
            document.body.style.backgroundImage = `url('${ImgTemp['50d']}')`
            break;

        case "50n":
            document.body.style.backgroundImage = `url('${ImgTemp['50n']}')`
            break;
    
        default:document.body.style.backgroundColor = 'blue'
            break;
    }

    return (
        <div className='icon'>
            <img src={imgIcon} />
            <h3>{description}</h3>       
        </div>
    );
};

export default Icons;