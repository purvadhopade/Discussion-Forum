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
            <div className="all-questions-container"></div>
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
                                    <div className="comment"><p>This is comment</p>
                                    <span>Username</span><small>Timestamp</small> </div>
                                    <p onClick={() => setShow(!show)}>Add a comment</p>
                                    {
                                    show && (<div className="title">
                                        <textarea 
                                         type="text"
                                         placeholder="Add your comment..."
                                         rows={5}
                                         style={{}}
                                        ></textarea>
                                        <button> Add comment</button>
                                         </div>
                                    )}

                           </div>
            </div>
            </div>
            <div className="all-questions">
                <p>No.of answer</p>
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
            <h3>Your Answer</h3>
            <ReactQuill className="react-quill" theme="snow" style={{
               height: "200px",  
            }}/>
        </div>
        <button>Post Your Answer</button>
    </div>
  )
}

export default MainQuestion