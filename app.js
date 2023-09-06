const express = require('express');
const app = express();
const port = process.env.PORT || 6001;  // You can choose any port you like

const YOUR_VERIFY_TOKEN = 'mGIKzRBxY9xnwBp9Qra1fh';  // Replace this with your actual verification token

app.get('/', (req, res) => {
    res.send("sample webhook")
});


app.get('/webhook', (req, res) => {
    if (req.query['hub.verify_token'] === YOUR_VERIFY_TOKEN) {
        res.send(req.query['hub.challenge']);
    } else {
        res.send('Error, wrong validation token');
    }
});

app.post('/webhook', async (req, res) => {
    const data = req.body;
    try {
        // Replace with the URL of the API you want to call
        const apiUrl = ' https://slow-doodles-sort.loca.lt/api/whatsapp/webhook';

        const apiResponse = await axios.post(apiUrl, data);

        // You can also handle the API response here if needed
        console.log(apiResponse.data);

        // Send a response back to Facebook webhook
        res.status(200).send('EVENT_RECEIVED');
    } catch (error) {
        console.error('Error calling the external API:', error.message);
        res.status(500).send('Failed to call the external API');
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
