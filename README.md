# ngrokable

🚧 DO NOT USE IN PRODUCTION 🚧

This example code is not endorsed by or involved with ngrok.

## Client and Server example usage of ngrok in node.

### Per-client Authtoken Credentials

For production systems, every client must authenticate with a unique authtoken credential. This allows you to deactivate devices that are old or compromised. Further, it allows you to enforce a separate ACL policy on every connected device that limits what tunnels it is allowed to bind.

Read more here - https://ngrok.com/docs/ngrok-link#credentials

### Create an API Token

* https://dashboard.ngrok.com/auth

### Authenticate with your API Token

* https://ngrok.com/docs/ngrok-link#service-api-base

### Generate a Per-client Authtoken

* https://ngrok.com/docs/ngrok-link#create-credential

### Using ngrok in node

* https://www.npmjs.com/package/ngrok

### Server

See `./src/server.js`.

An example (UNSAFE) express server which can generate per-client authtokens using your api token.

### Client

See `./src/client.js`

An example (UNSAFE) ngrok client which can use per-client authtokens to establish tunnels.
