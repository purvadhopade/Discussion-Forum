import React from 'react'
import '../SideBar/css/index.css';
import MainQuestion from './MainQuestion';
import Sidebar from '../SideBar/Sidebar';
function index() {
  return (
    <div className="stack-index">
        <div className="stack-index-content">
            <Sidebar/>
            <MainQuestion/>
        </div>  
    </div>
  )
}

export default index