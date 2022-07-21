import { getFeaturedEvents } from '../dummy';
import EventList from '../components/event/EventList';
function HomePage(){
   const featuredEvents=getFeaturedEvents();
   return (<div>
    <EventList items={featuredEvents}/>
   </div>
   );
}
export default HomePage;