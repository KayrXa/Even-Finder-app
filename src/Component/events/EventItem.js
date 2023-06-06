import React from 'react';
import PropTypes from 'prop-types';

 const EventItem  = ({event: {event, image_url, meeting_url}}) =>{
    return (
    <div className="card text-center">
        <img src={image_url} alt="" className='round-img' style={{width: '60px'}} />    
        <h3>{event}</h3>
        <div>
            <a href={meeting_url} className='btn btn-dark btn-sm my-1'>
                Informations
            </a>
        </div>
    </div>
    )
    }

EventItem.propTypes = {
    event: PropTypes.object.isRequired
};


export default EventItem;