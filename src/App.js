import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import ReportList from './components/ReportList';
import AppHeader from './components/AppHeader';
import ReportForm from './components/ReportForm';
import Modal from './components/Modal';
import axios from 'axios';

const API_URL = 'https://fathomless-eyrie-95662.herokuapp.com/api/v1/error_reports';

function getAPIData(){
  return axios.get(API_URL).then((response) => response.data)
}

function deleteReport(id){
  const url = API_URL + '/' + id;
  axios.delete(url).then(() => console.log('Deleted'));
}

function App() {
  const [reports, setReports] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  function deleteReportState(id){
    deleteReport(id);
    for(let i = 0; i< reports.length; i++){
      if (reports[i].id == id){
        let reportsCopy = [...reports];
        reportsCopy.splice(i, 1);
        setReports(reportsCopy);
        break;
      }
    }
  }

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if(mounted){
        setReports(items);
      }
    });

    return () => (mounted = false)
  }, []);

  return (
    <div className="App">
      <AppHeader></AppHeader>
      {isEditing &&
      <Modal reports={reports} APIURL={API_URL} stateChanger={setReports} setIsEditing={setIsEditing}></Modal>
      }
      <div className='content'>
        <div className='info-and-btn-wrapper'>
        <div className='info'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
          <div className='btn-wrapper'>
            <button onClick={() => {setIsEditing(true)}}>Report an Error</button>
          </div>
        </div>
        <ReportList reports={reports} deleteReportState={deleteReportState}/>
      </div>
    </div>
  );
}

export default App;