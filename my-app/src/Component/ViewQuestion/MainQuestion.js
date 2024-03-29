import React, { useState } from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from "@material-ui/icons/History";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"; // quill's css
import './index.css';
function MainQuestion() {
    const [show, setShow] = useState(false);
  return (
    <div className="main">
        <div className="main-container">
            <div className="main-top">
            <h2 className="main-question">This is question title </h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
            </div>
            <div className="main-desc">
                <div className="info">
                    <p>Timestamp</p>
                    <p>Timestamp</p>
                    <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43times</span>
            </p>
                </div>
            </div>
            <div className="all-questions">
        <div className="all-questions-container">
            <div className="all-questions-left">
            <div className="all-options">
                    <ArrowDropUpIcon/>
                    <p className="arrow">0</p>
                    <ArrowDropDownIcon />
                    <BookmarkIcon />
                    <HistoryIcon />
            </div>
            </div>
            <div className="question-answer">
                <p>This is question body</p>
                    <div className="author">
                        <small>asked "Timestamp"</small>
                        <div className="auth-details">
                            <Avatar/>
                            <p>Author Name</p>
                        </div>
                    </div>
                    
                            <div className="comments">
                                    <div className="comment"><p>This is comment <span>Username</span><small>Timestamp</small> </p>
                                    </div>
                                    <p onClick={() => setShow(!show)} style={{marginLeft:"-55px",marginTop:"68px"}}>Add a comment</p>
                                    {
                                    show && (<div className="title">
                                        <textarea style={{
                                                       margin: "5px 0px",
                                                       padding: "10px 50px",
                                                       border: "1px solid rgba(0, 0, 0, 0.2)",
                                                       borderRadius: "3px",
                                                       outline: "none",
                                                    }}
                                         type="text"
                                         placeholder="Add your comment..."
                                         rows={5}
                                        ></textarea>
                                        <button style={{
                                                     maxWidth: "fit-content",
                                                }}> Add comment</button>
                                         </div>
                                    )}

                           </div>
            </div>               
            </div>
            </div>
            <div style={{
            flexDirection: "column",
          }}
            className="all-questions">
                <p style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
                >No.of answer</p>
                <div className="all-questions-container">
                <div className="all-questions-left">
            <div className="all-options">
                    <ArrowDropUpIcon/>
                    <p className="arrow">0</p>
                    <ArrowDropDownIcon />
                    <BookmarkIcon />
                    <HistoryIcon />
            </div>
                 </div>
                 <div className="question-answer">
                <p>This is question body</p>
                    <div className="author">
                        <small>asked "Timestamp"</small>
                        <div className="auth-details">
                            <Avatar/>
                            <p>Author Name</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div className="main-answer">
            <h3  style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}>Your Answer</h3>
            <ReactQuill className="react-quill" theme="snow" style={{
               height: "200px",  
            }}/>
        </div>
        <button style={{
          marginTop: "100px",
          maxWidth: "fit-content",
        }}
        >Post Your Answer</button>
    </div>
    
  )
}

export default MainQuestion