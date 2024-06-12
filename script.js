const events = [
    {
        title : 'AI Confrence',
        date :new Date(6-2- 2024),
        location :'GTC Expo Center',
        attendees: new Set(['Lisa','Neema','Natalia']),
    },

    {
        title : 'Blankents and Wine',
        date: new Date (8-5-2024),
        location:'Carnivore Grounds',
        attendees: new Set(['Alice','Sam','Alec','Jules']),
    },

    {
        title : 'Safaricom Jazz Festival',
        date: new Date (17-7-2024),
        location:'Carnivore Grounds',
        attendees: new Set (['Abby','Angela','Angel']) ,
    },

    {
        title:'COP27',
        date: new Date (4-6-2024),
        location:'UN Nairobi HQ',
        attendees: new Set(['Esther','Leah','Cindy','Mariam']), 
    },

    {
        title: 'Concurs ',
        date: new Date(7-6-2024),
        location:'Ngong Racecourse',
        attendees: new Set(['Mike','Ryan','Allan','Lincoln','Francis']),
    },

    {
        title:'Nairobi Polo',
        date: new Date (2024-9-6),
        location: 'Nairobi Polo Club',
        attendees: new Set(['Raphael','Adrian','Kyle']),
    },

    {
        title: 'World Innovation Series',
        date: new Date(11-6-2024),
        location:'KICC',
        attendees: new Set(['Joan','Stacy','Faith']),
    },
];


const today = new Date();
const next7days = new Date();
next7days.setDate(today.getDate() + 7);

const upcoming = events.filter(event => event.date >= today && event.date <= next7days);
upcoming.map(event => {
    console.log(`Upcoming Event: ${event.title} on ${event.date.toDateString()}`);
});

const eventOrganizers = new WeakMap();
events.forEach(event => {
    eventOrganizers.set(event, `Organizer for ${event.title}`);
});

function padString(str, length) {
    return str.padEnd(length);
}

const maxTitleLength = Math.max(...events.map(event => event.title.length));
const maxLocationLength = Math.max(...events.map(event => event.location.length)); 

const header = `${padString('Title', maxTitleLength)}\t${padString('Date', 15)}\t${padString('Location', maxLocationLength)}`;
console.log(header);
console.log('-'.repeat(header.length));


events.forEach(({ title, date, location }) => {
    const formattedTitle = padString(title, maxTitleLength);
    const formattedDate = padString(date.toDateString(), 15);
    const formattedLocation = padString(location, maxLocationLength);
    console.log(`${formattedTitle}\t${formattedDate}\t${formattedLocation}`);
});


function addAttendee(eventTitle,attendeeName) {
    const event = events.find(event => event.title === eventTitle);
    if (event) {
        event.attendees.add(attendeeName);
    } else {
        console.log(`Event with title "${eventTitle}" not found.`);
    }
}
addAttendee('Concurs',' Frank');
const conferenceEvent = events.find(event => event.title === 'Concurs');
if (conferenceEvent) {
  console.log(conferenceEvent.attendees);
}

const eventsWithFormattedDate = events.map(event => ({
    ...event,
    formattedDate: `${event.date.getMonth() + 1}/${event.date.getDate()}/${event.date.getFullYear()}`
}));
const jsonString = JSON.stringify(eventsWithFormattedDate);
console.log(jsonString);

const firstEvent = events[0];
console.log('Properties:', Object.keys(firstEvent));
console.log('Values:', Object.values(firstEvent));
console.log('Entries:', Object.entries(firstEvent));

events.forEach(event => {
    console.log(`Event: ${event.title}, Date: ${event.date.toDateString()}`);
});

// function deleteEvent(eventTitle) {
//     const index = events.findIndex(event => event.title === eventTitle);
//     if (index !== -1) {
//       events.splice(index, 1);
//     } else {
//       console.log(`Event with title "${eventTitle}" not found.`);
//     }
//   }
//   deleteEvent('COP27');
//   console.log(events);
  
const eventWithMostAttendees = events.reduce((max, event) => 
    event.attendees.size > max.attendees.size ? event : max, events[0]);
console.log('Event with most attendees:', eventWithMostAttendees.title);
  
