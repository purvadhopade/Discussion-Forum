import { Avatar } from "@mui/material";
import React from 'react'
import { Link } from "react-router-dom";
import "./css/AllQuestions.css";
function AllQuestions() {
  return (
   <div className="all-questions">
   <div className="all-questions-container">
    <div className="questions-left">
        <div className="all-options">
            <div className="all-option">
                <p>0</p>
                <span>Votes</span>
            </div>
            <div className="all-option">
                <p>0</p>
                <span>Answer</span>
            </div>
            <div className="all-option">
                <p>0</p>
                <small>0 views</small>
            </div>

        </div>
    </div>
    <div className="question-answer">
        <Link to = '/question'>How to send a DSA PublicKey via socket?</Link>
        <div style={{
            width: "90%",
        }}>
            <div>
              I'm doing a uni project where the client has to send his Public Key to the Server, so I'm trying to send a DSA PublicKey via socket from the client to the server but I'm struggling, and all the solutions I found only apply to RSA Public Keys.
            </div>
        </div>
        <div style={{
            display:"flex",
            padding:"10px 12px"
            
        }}>
            <span className="question-tags">react</span>
            <span className="question-tags">antd</span>
            <span className="question-tags">frontend</span>
        </div>
        <div className="author">
            <small>Timestamp</small>
           <div className="author-details">
            <Avatar/>
            <p>User name</p>
           </div>
        </div>
    </div>
   </div>
   </div>
  )
}

export default AllQuestions