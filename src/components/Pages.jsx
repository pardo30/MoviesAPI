import React from 'react';
import './Pages.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Pages = (props) => {
    return (
        <div className='pagesBar'>
            <div classname='moveButton' onClick={props.back}>
                <ArrowBackIosIcon />
            </div>
            <div>{props.page} / 500 </div>
            <div classname='moveButton' onClick={props.forward}>
                <ArrowForwardIosIcon />
            </div>
        </div>
    )
}

export default Pages
