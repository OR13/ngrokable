# ngrokable

client and server example usage of ngrok in node.

Some general information about provisioning authtokens is here:
https://ngrok.com/docs/ngrok-link#credentials

First, create yourself a new API token under "API Credential Tokens":
https://dashboard.ngrok.com/auth

Read this about how to authenticate to the API: https://ngrok.com/docs/ngrok-link#service-api-base

Then make an API request to generate a new authtoken:
https://ngrok.com/docs/ngrok-link#create-credential

### Server

See `./src/server.js`

### Client

See `./src/client.js`
