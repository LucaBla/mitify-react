import React, {useEffect, useState} from "react";
import ReportForm from "./ReportForm";

function Modal(props){

  function removeModal(e){
    if(e.currentTarget === e.target){
      props.setIsEditing(false);
    }
  }

  return <div className="modal-bg" onClick={removeModal}>
    <div className="modal">
      <ReportForm reports={props.reports} APIURL={props.APIURL} stateChanger={props.stateChanger} setIsEditing={props.setIsEditing}></ReportForm>
    </div>
  </div>
}

export default Modal;