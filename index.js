require("dotenv").config();
const express = require("express");
const sendDataToPocketBase = require("./functions/send_data");
const url_sent= require("./utils/axios")

const app = express();

app.use(express.json());

const PORT = process.env.PORT;
console.log(PORT);
// app.get("/api/:id", async (req, res) => {
//   try {
//     const id = req.params.id;  // Retrieve the ID from the route parameter
//     console.log("Received ID:", id);  // For debugging purposes
//     // Assuming url_sent() uses or needs the ID, you might want to pass it as an argument
//     const result = await url_sent(id);  // Pass the ID if required by url_sent()   
//     res.status(200).json(result);     // Send the result as a JSON response
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred" });
//   }
// });


// app.get("/api/realtime", async (req, res) => {
//   try {
//     const result = await sendDataToPocketBase();
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
url_sent();
// });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
