const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('dotenv').config({ path: '.env' });

const {
  NGROK_SERVER_API_PORT,
  NGROK_SERVER_API_TOKEN,
  NGROK_KONG_HOSTNAME
} = process.env;

require('express-async-await')(app);

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
  var instance = axios.create({
    baseURL: 'https://api.ngrok.com/credentials',
    headers: { Authorization: 'Bearer ' + NGROK_SERVER_API_TOKEN }
  });
  let response = await instance.get('/');
  res.json({
    yolo: 1,
    credentials: response.data
  });
});

app.get('/create', async (req, res) => {
  var instance = axios.create({
    baseURL: 'https://api.ngrok.com/credentials',
    headers: { Authorization: 'Bearer ' + NGROK_SERVER_API_TOKEN }
  });
  let response = await instance.post('/', {
    description: 'for testing customer integration',
    acl: ['bind:' + NGROK_KONG_HOSTNAME]
  });
  res.json({
    yolo: 1,
    tunnels: response.data
  });
});

app.get('/delete/:id', async (req, res) => {
  var instance = axios.create({
    baseURL: 'https://api.ngrok.com/credentials',
    headers: { Authorization: 'Bearer ' + NGROK_SERVER_API_TOKEN }
  });
  let response = await instance.delete('/' + req.params.id);
  res.json({
    yolo: 1,
    tunnels: response.data
  });
});

app.listen(NGROK_SERVER_API_PORT, async () => {
  console.log(`Server: http://localhost:${NGROK_SERVER_API_PORT}`);
});
