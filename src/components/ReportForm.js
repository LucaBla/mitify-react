import React, {useEffect, useState} from "react";
import axios from "axios";

function ReportForm(props){

  const [newReport, setNewReport] = useState({module: '', description: ''});

  function handleModuleChange(e){
    setNewReport({module: e.target.value, description: newReport.description});
  }

  function handleDescriptionChange(e){
    setNewReport({module: newReport.module, description: e.target.value});
  }

  function handleReportSubmit(e){
    e.preventDefault();
    axios
      .post(props.APIURL, { error_report: { module: newReport.module, description: newReport.description }})
      .then((response) => {
        let updatedReports = [...props.reports];
        updatedReports.push(response.data);

        props.stateChanger(updatedReports);
      })
      .catch((error) => console.log(error));
    setNewReport({module: '', description: ''});
    props.setIsEditing(false);
  }

  return <div className="report-form">
    <form>
        <h2>Add Report:</h2>
        <div className="field">
          <label htmlFor="newReport-module-input">Module:</label>
          <input 
            id="newReport-module-input"
            className="input"
            type="string" 
            placeholder="Input Module"
            value={newReport.module}
            onChange={handleModuleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="newReport-description-input">Description:</label>
          <textarea 
            id="newReport-description-input" 
            className="input"
            placeholder="Input Description"
            value={newReport.description}
            onChange={handleDescriptionChange}
          />
        </div>
        <input className="newReportSubmit" type="submit" value="Submit" onClick={handleReportSubmit}></input>
      </form>
  </div>;
}

export default ReportForm;