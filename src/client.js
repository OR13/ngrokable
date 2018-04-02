const ngrok = require('ngrok');

require('dotenv').config({ path: '.env' });

const { NGROK_KONG_TOKEN, NGROK_KONG_ADDR, NGROK_KONG_HOSTNAME } = process.env;

const config = {
  proto: 'tls',
  addr: NGROK_KONG_ADDR,
  hostname: NGROK_KONG_HOSTNAME,
  authtoken: NGROK_KONG_TOKEN
};

(async () => {
  console.log('Tunnel Open');
  await ngrok.connect(config);
})();
