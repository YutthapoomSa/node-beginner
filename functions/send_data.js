const url_sent = require("../utils/axios");
const cron = require("node-cron");

// Function to send data to PocketBase
const sendDataToPocketBase = async (data) => {

  try {
    // const id = '22ig62mvym2zx5m'; // Replace with actual record ID
    // Data to be sent
    const data = {
      username: "tt",
      name: "t",
      email: "t@t.com"
    };

    // Call the function from axios.js with the data
    const response = await url_sent();
    console.log("Data sent successfully:", response);

  } catch (error) {
    console.error("Error sending data:", error.message);
  }
};

// Schedule the function to run every 2 minutes
cron.schedule("*/2 * * * *", async () => {
  console.log("Sending user data to PocketBase...");
  await sendDataToPocketBase(); // Await the async function to ensure it runs fully
});

module.exports = sendDataToPocketBase;
