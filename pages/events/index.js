import {Fragment} from 'react';
import {useRouter} from 'next/router';
import {getAllEvents} from '../../dummy';
import EventList from '../../components/event/EventList';
import EventsSearch from '../../components/event/event-search';

function AllEventsPage(){
    const router=useRouter();
    const events=getAllEvents();
    
    function findEventsHandler(year,month){
        const fullPath=`/events/${year}/${month}`; 
        router.push(fullPath);
    }
    return(
      <Fragment>
        <EventsSearch onSearch={findEventsHandler}/>
        <EventList items={events}/>
</Fragment>
    );
}
export default AllEventsPage;