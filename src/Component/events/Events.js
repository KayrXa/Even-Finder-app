import React, { Component } from 'react'
import EventItem from './EventItem';

export class Events extends Component {
    state = {
    events:[
        {
            id: '1',
            event: '1st event',
            image_url: 'https://s3.amazonaws.com/zweb-s3.uploads/carp/2013/09/meeting-image2.jpg',
            meeting_url: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/4xdfR0IdFqMhuoX4qEBB1M/e9fe2c23c70f3e18103e77848517eb86/meeting_notes__1_.png',
        },
        {
            id: '2',
            event: '2nd event',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjqPx-Ew8fJcm-yaRaK4Rsv-Mv49__yTg5RjqP8sbPg&s',
            meeting_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjqPx-Ew8fJcm-yaRaK4Rsv-Mv49__yTg5RjqP8sbPg&s',
        },
        {
            id: '3',
            event: '3rd event',
            image_url: 'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGV2ZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
            meeting_url: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/4xdfR0IdFqMhuoX4qEBB1M/e9fe2c23c70f3e18103e77848517eb86/meeting_notes__1_.png',
        },
        {
            id: '4',
            event: '4rd event',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjqPx-Ew8fJcm-yaRaK4Rsv-Mv49__yTg5RjqP8sbPg&s',
            meeting_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjqPx-Ew8fJcm-yaRaK4Rsv-Mv49__yTg5RjqP8sbPg&s',
        },
    ]


    }

  render() {
    const {events} = this.state;

    return (
      <div style={eventStyle}>Events
        {events.map(event => (
            <EventItem key={event.id} event={event}></EventItem>
            ))}
      </div>
    )
  }
}

const eventStyle = {
    display: 'grid',
    gridTemplateColumn: 'repeat(3, 1fr)',
    gridGap: '1rem',
}

export default Events;