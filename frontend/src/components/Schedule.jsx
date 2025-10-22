import React from "react";

export default function Schedule() {
  return (
    <div className="d-flex flex-column align-items-center vh-100 p-3">
      <h1>Schedule Availability</h1>
      {/* <button className="btn btn-primary schedule-button">View Schedule</button> */}
      <div className="bg-body-tertiary mt-4">
        <h5 className="align-self-start">Please note:</h5>
        <div className="schedule-info">
          All scheduling, availability, and payments are managed through
          Calendly. Click the button above to view my current availability and
          secure your spot. Ice time in Steamboat can be limited, so don't
          hesitate to contact me if you're looking to get on the schedule in the
          future.
        </div>
      </div>
    </div>
  );
}
