const express = require('express');
const app = express();
const GaugeRequestController = require('./controllers/GaugeRequestController');

app.use(express.json());

app.get('/gauge-requests', GaugeRequestController.getAll);
app.get('/gauge-requests/:reqID', GaugeRequestController.getByID);
app.post('/gauge-requests', GaugeRequestController.create);
app.patch('/gauge-requests/:reqID', GaugeRequestController.update);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});