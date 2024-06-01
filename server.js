// server.js (backend)
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

let citas = [];

app.post('/api/citas', (req, res) => {
  const { title, priority, phone, links, description } = req.body;
  citas.push({ title, priority, phone, links, description });
  res.status(201).send();
});

app.get('/api/citas', (req, res) => {
  res.json(citas);
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
