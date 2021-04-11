import React from 'react';
import './Pages.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Pages = (props) => {
    return (
        <div className='pagesBar'>
            <div className='moveButton' onClick={props.back}>
                <ArrowBackIosIcon fontSize="small" />
            </div>
            <div className='numPage'>{props.page}</div>
            <div className='moveButton' onClick={props.forward}>
                <ArrowForwardIosIcon fontSize="small" />
            </div>
        </div>
    )
}

export default Pages
