import React, {useEffect, useState} from "react";

function ReportList(props){

  return <div className="report-list">
      <h2>Reports:</h2>
      {props.reports.map((report) =>{
        return <div className="report" key={report.id}>
          <h3>{report.module}</h3>
          <div>{report.description}</div>
          <button
            className="delete-btn" 
            onClick={() => props.deleteReportState(report.id)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      })}
    </div>;
}

export default ReportList;
  