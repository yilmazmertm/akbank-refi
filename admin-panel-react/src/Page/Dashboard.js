import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Earnings (Monthly)
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  $40,000
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div className="card-body">
          <h4 className="small font-weight-bold">
            Server Migration <span className="float-right">20%</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h4 className="small font-weight-bold">
            Sales Tracking <span className="float-right">40%</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h4 className="small font-weight-bold">
            Customer Database <span className="float-right">60%</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h4 className="small font-weight-bold">
            Payout Details <span className="float-right">80%</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              aria-valuenow="80"
              style={{width:"80%"}}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h4 className="small font-weight-bold">
            Account Setup <span className="float-right">Complete!</span>
          </h4>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{width: "100%"}}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
