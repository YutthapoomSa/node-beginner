const url_sent = require("../utils/axios");
const cron = require("node-cron");

// Function to send data to PocketBase
const sendDataToPocketBase = async () => {
  try {
    // Loop 100 times to send data
    for (let i = 0; i < 100; i++) {
      const data = {
        name: `John Doe ${i}`, // Different data for each iteration
        age: 30,
        email: `john.doe${i}@example.com`,
      };

      // Call the function from axios.js with the data
      const response = await url_sent(data);
      console.log(`Data sent successfully for iteration ${i}:`, response);
    }
  } catch (error) {
    console.error("Error sending data:", error.message);
  }
};

// Schedule the function to run every 2 minutes
cron.schedule("*/2 * * * *", () => {
  console.log("Sending user data to PocketBase...");
  sendDataToPocketBase();
});

module.exports = sendDataToPocketBase;
