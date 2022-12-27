import React, {useEffect, useState} from "react";

function AppHeader(){

  return <header>
    <div className='title'>
      <h1>iu Mitify</h1>
    </div>
    <div className='user-info-logout'>
      <div className='user-info'>
        <p className='user-name'>Max Musterman</p>
        <p className='matriculation-number'>36203044</p>
      </div>
      <i className="fas fa-sign-out-alt logout-icon"></i>
    </div>
  </header>;
}

export default AppHeader;