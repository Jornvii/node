const sql = require('mssql');

class GaugeRequest {
  constructor(reqID, partID, revID, processID, divisionID, empID, dateReq, useFor, status) {
    this.reqID = reqID;
    this.partID = partID;
    this.revID = revID;
    this.processID = processID;
    this.divisionID = divisionID;
    this.empID = empID;
    this.dateReq = dateReq;
    this.useFor = useFor;
    this.status = status;
  }

  static async getAll() {
    const result = await sql.query`SELECT * FROM GaugeRequests`;
    return result.recordset;
  }

  static async getByID(reqID) {
    const result = await sql.query`SELECT * FROM GaugeRequests WHERE reqID = ${reqID}`;
    return result.recordset[0];
  }

  async save() {
    const result = await sql.query`INSERT INTO GaugeRequests (partID, revID, processID, divisionID, empID, dateReq, useFor, status) VALUES (@partID, @revID, @processID, @divisionID, @empID, @dateReq, @useFor, @status)`,
      {
        partID: this.partID,
        revID: this.revID,
        processID: this.processID,
        divisionID: this.divisionID,
        empID: this.empID,
        dateReq: this.dateReq,
        useFor: this.useFor,
        status: this.status
      };
    return result.rowsAffected;
  }

  async update() {
    const result = await sql.query`UPDATE GaugeRequests SET status = @status WHERE reqID = ${this.reqID}`,
      {
        status: this.status
      };
    return result.rowsAffected;
  }
}

module.exports = GaugeRequest;