import React from 'react';
import './Average.scss';

const Average = (props) => {
    const color = () => {
        const average = props.average;
        if (average >= 9) {
            return "#00B24F"
        } else if (average < 9 && average >= 8) {
            return "#92D04F"
        } else if (average < 8 && average >= 6) {
            return "#FFFE01"
        } else if (average < 6 && average >= 5) {
            return "#FEC000"
        } else if (average < 5  && average >=3) {
            return "#FEC000"
        } else {
            return "FE0001"
        }
    }  
    const styles = {
        borderRightStyle: 'solid',
        borderRightWidth: '5px',
        borderRightColor: color(),
    }
    return (
        <div className='average' style={styles}>
            <p>{props.average}</p>
        </div>
    )
}

export default Average
