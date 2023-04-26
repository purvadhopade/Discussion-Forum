import React from 'react'
import { Public, Topic } from "@mui/icons-material";
import { Link } from "react-router-dom";
import './css/Sidebar.css';
import { useNavigate } from 'react-router-dom'
function sidebar() {
  const navigate = useNavigate()
  return (
    <div className="sidebar">
         <div className="sidebar-container">
         <div className="sidebar-options">
         <div className="sidebar-option">
            <Link>Home</Link>
         </div>
         <div className="sidebar-option">
            <Link>Public</Link>
            <div className="link">
                <div className="link-tag">
                                <Public/>
                                <Link>Question</Link>
                </div>
                <div className="tags">
                                <p>Tags</p> 
                                <p>Users</p>
                                {/* <Link>Tags</Link>
                                <Link>Users</Link> */}
                </div>
            </div>
         </div>
                <div className="sidebar-option">

                  <div className="link">
                <div className="link-tag">
                                <Topic/>
                                <Link>Topics</Link> 
                                
                               

                </div>
                <div className="tags">
                                  <p>CP</p>
                                  <p>ML</p>
                                 <Link>DSA </Link>
                </div>
            </div> 
                </div>
         </div>
         </div>
    </div>
  )
}

export default sidebar