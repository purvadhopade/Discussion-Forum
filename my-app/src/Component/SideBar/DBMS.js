import { Avatar } from "@mui/material";
import React from 'react'
import { Link } from "react-router-dom";
import "./css/DBMS.css";
import Sidebar from '../SideBar/Sidebar';
import { fontGrid } from "@mui/material/styles/cssUtils";
function DBMS() {
  return (
   <div className="all-questions1">
    <Sidebar/>
   <div className="all-questions-container1">
    <div className="questions-left1">
        <div className="all-options1">
            <div className="all-option1">
                <p>0</p>
                <span>Votes</span>
            </div>
            <div className="all-option1">
                <p>1</p>
                <span>Answer</span>
            </div>
            <div className="all-option1">
                <p>5</p>
                <span>views</span>
            </div>

        </div>
    </div>
    <div className="question-answer1">
    <div style = {{
        marginTop: "-94px"
    }}>
        <div className="que1">
        <Link>Oracle database SQL revenue analysis </Link>
        </div>
        <div style={{
            width: "70%",
            margin: "10px"
            
        }}>
            <div>
            I am doing revenue analysis which required to calculate current year sales (in amount), current year sales (in percentage), previous year sales (in amount), previous year sales (in percentage), and the percentage change.
            </div>
        </div>
        <div style={{
            display:"flex",
            padding:"10px 12px"
            
        }}>
            <span className="question-tags1">oracle</span>
            <span className="question-tags2">database</span>
            <span className="question-tags3">sql</span>
        </div>
        </div>
        <div className="author1">
            <small>Timestamp</small>
           <div className="author-details1">
            <Avatar/>
            <p>User name</p>
           </div>
        </div>
    </div>
  {/* Q2 start   */}
  <div className="questions-left1">
        <div className="all-options1">
            <div className="all-option1">
                <p>2</p>
                <span>Votes</span>
            </div>
            <div className="all-option1">
                <p>5</p>
                <span>Answer</span>
            </div>
            <div className="all-option1">
                <p>12</p>
                <span>views</span>
            </div>

        </div>
    </div>
    <div className="question-answer1">
    <div style = {{
        marginTop: "-94px",
    }}>
       <div className="que1">
        <Link >Should I created the user for each tablespace in oracle DB? </Link>
        </div>
        <div style={{
            width: "70%",
            margin: "10px"
        }}>
            <div>
            Currently I am trying to connect my spring project to the oracle DB. I used Oracle DB only once . At that time I created the sampleuser and made tables in a tablespace named sample.
            </div>
        </div>
        <div style={{
            display:"flex",
            padding:"10px 12px"
            
        }}>
            <span className="question-tags1">database</span>
            <span className="question-tags2">plsql</span>
        </div>
        </div>
        <div className="author1">
            <small>Timestamp</small>
           <div className="author-details1">
            <Avatar/>
            <p>User name</p>
           </div>
        </div>
    </div>

    {/* Q3 start */}
    <div className="questions-left1">
        <div className="all-options1">
            <div className="all-option1">
                <p>4</p>
                <span>Votes</span>
            </div>
            <div className="all-option1">
                <p>6</p>
                <span>Answer</span>
            </div>
            <div className="all-option1">
                <p>10</p>
                <span>views</span>
            </div>

        </div>
    </div>
    <div className="question-answer1">
    <div style = {{
        marginTop: "-94px",
    }}>
        <div className="que1">
        <Link>Should I create 3 fields or create one 1-to-many relationship? </Link>
        </div>
        <div style={{
            width: "90%",
            marginTop: "20px"
            
        }}>
            <div >
            I have a table called query where medical data such as medicine are stored, in the form I have up to 3 fields of medicines. In the table I must create these 3 fields or I create another table called medicines and I make a one-to-many relationship from the query table to the medicine table.
            </div>
        </div>
        <div style={{
            display:"flex",
            padding:"10px 12px"
            
        }}>
            <span className="question-tags1">postgresql</span>
            <span className="question-tags2">mysql</span>
            <span className="question-tags3">database</span>
        </div>
        </div>
        <div className="author1">
            <small>Timestamp</small>
           <div className="author-details1">
            <Avatar/>
            <p>User name</p>
           </div>
        </div>
    </div>

{/* Q4 Start */}
<div className="questions-left1">
        <div className="all-options1">
            <div className="all-option1">
                <p>0</p>
                <span>Votes</span>
            </div>
            <div className="all-option1">
                <p>7</p>
                <span>Answer</span>
            </div>
            <div className="all-option1">
                <p>15</p>
                <span>views</span>
            </div>

        </div>
    </div>
    <div className="question-answer1">
    <div style = {{
        marginTop: "-94px",
    }}>
       <div className="que1">
        <Link >How to find duplicates in all my DB tables without searching each table one at a time? </Link>
        </div>
        <div style={{
            width: "70%",
            margin: "10px"
        }}>
            <div>
            I am new to DB. I have been tasked to find any duplicates in my Postgres DB for our service management application.
            </div>
        </div>
        <div style={{
            display:"flex",
            padding:"10px 12px"
            
        }}>
            <span className="question-tags1">database</span>
            <span className="question-tags2">plsql</span>
        </div>
        </div>
        <div className="author1">
            <small>Timestamp</small>
           <div className="author-details1">
            <Avatar/>
            <p>User name</p>
           </div>
        </div>
    </div>

   </div>

   </div>
  )
}

export default DBMS