const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); 

app.post('/submit-form', (req, res) => {
  const formData = req.body; 
  console.log('Received form data:', formData);
  res.json({ message: 'Form data received successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
