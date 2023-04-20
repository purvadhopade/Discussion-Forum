import React from 'react'
import { Link } from "react-router-dom";
import { FilterList } from "@mui/icons-material";
import AllQuestions from './AllQuestions';
import "./css/Main.css";
import { useNavigate } from 'react-router-dom'
function Main() {
  const navigate = useNavigate()
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <button onClick={() => navigate("/add-question")}>Ask Question </button>
        </div> 
        <div className="main-dec">
          <p>All question Stat</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <Link>Newest</Link>
              </div>
              <div className="main-tab">
                <Link>Active</Link>
              </div>
              <div className="main-tab">
                <Link>More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterList/>
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="question">
            <AllQuestions/>
            <AllQuestions/>
            <AllQuestions/>
            <AllQuestions/>
            <AllQuestions/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main