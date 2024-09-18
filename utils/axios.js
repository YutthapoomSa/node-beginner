// const axios = require("axios");
// require("dotenv").config();

// // Function to send a POST request to PocketBase
// const url_sent = async (data) => {
//   try {
//     const config = {
//       method: 'SSE', // Correct method for creating data
//       url: 'http://localhost:8090/api/realtime', // URL for PocketBase API
//       headers: {
//         'Content-Type': 'application/json' // Content-Type for JSON data
//       },
//       data: JSON.stringify(data) // Include the data to send
//     };

//     // Make the POST request
//     const response = await axios.request(config);
//     return response.data; // Return response data

//   } catch (error) {
//     console.error("Error response:", error.response?.data || error.message);
//     throw error; // Rethrow the error to handle it in the calling function
//   }
// };

// module.exports = url_sent;


const axios = require('axios');
require('dotenv').config();

const url_sent = async () => {
  try {
    const config = {
      method: 'get', // Correct method for creating data
      url: 'http://localhost:8090/api/realtime', // URL for PocketBase API
      headers: {
        'Content-Type': 'application/json' // Content-Type for JSON data
      },
      // data: JSON.stringify(data) // Include the data to send
    };


    const response = await axios.request(config);
    console.log(response.data);// get data
    return response.data; // Return response data

  } catch (error) {
    console.error("Error response:", error.response?.data || error.message);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

module.exports = url_sent;