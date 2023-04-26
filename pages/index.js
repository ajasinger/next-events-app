// domain.com
// contains React components that will load with that page 

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        name: 'A First Meetup',
        image: '',
        address: 'address 1',
        description: 'this is the first meetup'
    },
    {
        id: 'm2',
        name: 'A Second Meetup',
        image: '',
        address: 'address 2',
        description: 'this is the second meetup'
    }
]

function HomePage() {
    return (
        < MeetupList meetups={DUMMY_MEETUPS} />
    )
}

export default HomePage;