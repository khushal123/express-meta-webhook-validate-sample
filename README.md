# express-meta-webhook-validate-sample


# Webhook Server with Express

This is a sample Express server that sets up webhooks for receiving and forwarding events. The server listens for GET and POST requests on the `/webhook` endpoint. This server is intended to be hosted on platforms like Heroku or any public cloud. When you want to receive a POST API call on your local server, you can expose it using `localtunnel`. This is especially helpful as platforms like Facebook do not support self-signed certificates.
Remember that this repo and your local repo are different servers.

For instance, if your local server is running on `localhost:3000`, you can expose it using:

```bash
lt --port 3000
```

## Installation

Before starting, ensure you have `node.js` and `npm` (Node Package Manager) installed on your machine.

1. Clone the repository.
2. Navigate to the project directory.
3. Install the required packages:
   ```bash
   npm install express axios
   ```

## Configuration

1. Update the `YOUR_VERIFY_TOKEN` constant in the server code with your actual verification token.
2. Replace the `apiUrl` in the POST webhook handler with the URL of the API you want to call.

## Running the Server

1. Start the server with:
   ```bash
   node <filename>.js
   ```

## Endpoints

### GET `/`

A simple endpoint that returns a "sample webhook" message.

### GET `/webhook`

This endpoint is used for verification purposes. If the `hub.verify_token` query parameter matches the `YOUR_VERIFY_TOKEN`, it will return the `hub.challenge` query parameter. Otherwise, it returns an error message.

### POST `/webhook`

This endpoint receives webhook events and forwards them to an external API.

## Using `localtunnel`

To expose your server, first, install `localtunnel` globally:

```bash
npm install -g localtunnel
```

Then, tunnel your server:

```bash
lt --port <your_port>
```

Replace `<your_port>` with the port number your server is running on (e.g., 3000).
