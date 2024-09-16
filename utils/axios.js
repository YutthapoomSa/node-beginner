const axios = require("axios");
require("dotenv").config();

// Function to send data using the method from .env (GET, POST, etc.)
const url_sent = async (data) => {
  try {
    const method = process.env.METHOD_POST.toLowerCase();
    const url = `${process.env.POCKETBASE_URL}/api/collections/${process.env.POCKETBASE_COLLECTION}/records`;
    
    console.log("Constructed URL:", url); // Debugging line

    const response = await axios({
      method: method,
      url: url,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response:", response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error sending request:", error.message);
    return { success: false, error: error.message };
  }
};

module.exports = url_sent;
