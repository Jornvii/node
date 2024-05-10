const GaugeRequest = require('../models/GaugeRequest');

class GaugeRequestController {
  async getAll(req, res) {
    const gaugeRequests = await GaugeRequest.getAll();
    res.json(gaugeRequests);
  }

  async getByID(req, res) {
    const reqID = req.params.reqID;
    const gaugeRequest = await GaugeRequest.getByID(reqID);
    res.json(gaugeRequest);
  }

  async create(req, res) {
    const gaugeRequest = new GaugeRequest(req.body);
    const rowsAffected = await gaugeRequest.save();
    res.json({ message: `Gauge request created successfully` });
  }

  async update(req, res) {
    const reqID = req.params.reqID;
    const gaugeRequest = await GaugeRequest.getByID(reqID);
    gaugeRequest.status = req.body.status;
    const rowsAffected = await gaugeRequest.update();
    res.json({ message: `Gauge request updated successfully` });
  }
}

module.exports = GaugeRequestController;