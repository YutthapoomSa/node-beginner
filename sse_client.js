// const EventSource = require('eventsource'); // Install using `npm install eventsource`

// // Replace with your PocketBase URL
// const sseUrl = 'http://localhost:8090/api/realtime';

// const eventSource = new EventSource(sseUrl);

// eventSource.onmessage = (event) => {
//   const data = JSON.parse(event.data);
//   console.log("Received event:", data);
// };

// eventSource.onerror = (error) => {
//   console.error("SSE error:", error);
// };


const EventSource = require('eventsource'); // Install with `npm install eventsource`

const url = 'http://localhost:3000/events'; // Adjust URL if necessary
const eventSource = new EventSource(url);

eventSource.onmessage = (event) => {
  console.log("Received event:", event.data);
  console.log(response.data);
};

eventSource.onerror = (error) => {
  console.error("SSE error:", error);
};
