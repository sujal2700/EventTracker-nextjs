import {useRouter} from 'next/router';
import {Fragment } from 'react';
import {getEventById} from '../../dummy';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
function EventDetailPage(){
    const router=useRouter();
    const eventID=router.query.eventID;
    const event = getEventById(eventID);
   if(!event){
    return <ErrorAlert>No event Found!!</ErrorAlert>;
   }
   else{
   return(
<Fragment>
    <EventSummary title={event.title} />
    <EventLogistics date={event.date} address={event.location}
    image={event.image}
    imageAlt={event.title}/>
    <EventContent>
        <p>{event.description}</p>
        </EventContent>
</Fragment>
    );
   }
}
export default EventDetailPage;
