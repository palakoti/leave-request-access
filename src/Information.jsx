import React, { useState } from "react";
import "./App.css";


function Information() {
  // State for selected employee and month
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Dummy list of employees
  const employees = [
    { id: 1, name: "Swetha Palakoti" },
    { id: 2, name: "Michael Gillepse" },
    { id: 3, name: "Krishna Swathi Rayanapati" },
  ];

  // List of months
  const months = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];

  // Function to fetch leave requests
  const fetchLeaveRequests = async () => {
    if (!selectedEmployee || !selectedMonth) {
      setError("Please select an employee and a month.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Replace with your actual API endpoint
      const response = await fetch(
        `https://niuits.sharepoint.com/sites/IllinoisInteractiveReportCards/_layouts/15/Events.aspx?ListGuid=4c71c493-f5c2-4d3e-9da9-43506e2fdbc8&Category=&StartDate=2025-01-01&EndDate=2025-01-31`,
       // `https://your-api-endpoint/leave-requests?employee=${selectedEmployee}&month=${selectedMonth}`
    {
      mode:'no-cors'
    });

  //  console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch leave requests.");
      }

      const data = await response.json();
      setLeaveRequests(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>     

      {/* Employee Dropdown */}
      <div className="form-group">
        <label htmlFor="employee">Select Employee:</label>
        <select
          id="employee"
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          <option value="">Select an employee</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>

      {/* Month Dropdown */}
      <div className="form-group">
        <label htmlFor="month">Select Month:</label>
        <select
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">Select a month</option>
          {months.map((month) => (
            <option key={month.id} value={month.id}>
              {month.name}
            </option>
          ))}
        </select>
      </div>

      {/* Fetch Button */}
      <button onClick={fetchLeaveRequests} disabled={loading}>
        {loading ? "Fetching..." : "Fetch Leave Requests"}
      </button>

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Leave Requests Table */}
      {leaveRequests.length > 0 && (
        <div className="leave-requests">
          <h2>Leave Requests</h2>
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request, index) => (
                <tr key={index}>
                  <td>{request.employeeName}</td>
                  <td>{request.startDate}</td>
                  <td>{request.endDate}</td>
                  <td>{request.category}</td>
                  <td>{request.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Information;