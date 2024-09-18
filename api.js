import PocketBase from 'pocketbase';

const pb = new PocketBase('http://localhost:8090/api/realtime');


// (Optionally) authenticate
await pb.collection('users').authWithPassword('trueegle@gmail.com', 'Asasdd123.');

// Subscribe to changes in any record in the collection
pb.collection('example').subscribe('*', function (e) {
    console.log(e.action);
    console.log(e.record);
}, { /* other options like expand, custom headers, etc. */ });


// Subscribe to changes only in the specified record
pb.collection('example').subscribe('RECORD_ID', function (e) {
    console.log(e.action);
    console.log(e.record);
}, { /* other options like expand, custom headers, etc. */ });


// Unsubscribe
pb.collection('example').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
pb.collection('example').unsubscribe('*'); // remove all '*' topic subscriptions
pb.collection('example').unsubscribe(); // remove all subscriptions in the collection