require('dotenv').config();
const express = require('express');
const sendDataToPocketBase = require('./functions/send_data');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.SSE('/api/realtime', async (req, res) => {
  try {
    const result = await sendDataToPocketBase();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
