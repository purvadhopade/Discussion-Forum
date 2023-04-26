import { Avatar } from "@mui/material";
import React from 'react'
import { Link } from "react-router-dom";
import "./css/DBMS.css";
import { fontGrid } from "@mui/material/styles/cssUtils";
function DS() {
  return (
   <div className="all-questions">
   <div className="all-questions-container">
    <div className="questions-left">
        <div className="all-options">
            <div className="all-option">
                <p>1</p>
                <span>Votes</span>
            </div>
            <div className="all-option">
                <p>5</p>
                <span>Answer</span>
            </div>
            <div className="all-option">
                <p>12</p>
                <span>views</span>
            </div>

        </div>
    </div>
    <div className="question-answer">
    <div style = {{
        marginTop: "-94px"
    }}>
        <div className="que">
        <Link>How to find last index of item in linked list in java </Link>
        </div>
        <div style={{
            width: "70%",
            margin: "10px"
            
        }}>
            <div>
            I just started a data structures and algorithms class and was introduced to linked lists for the first time. I have a decent understanding of how they work in theory but am having a hard time working with them.
            </div>
        </div>
        <div style={{
            display:"flex",
            padding:"10px 12px"
            
        }}>
            <span className="question-tags1">java</span>
            <span className="question-tags2">alorithm</span>
            <span className="question-tags3">linked-list</span>
        </div>
        </div>
        <div className="author">
            <small>Timestamp</small>
           <div className="author-details">
            <Avatar/>
            <p>User name</p>
           </div>
        </div>
    </div>
  {/* Q2 start   */}
  <div className="questions-left">
        <div className="all-options">
            <div className="all-option">
                <p>2</p>
                <span>Votes</span>
            </div>
            <div className="all-option">
                <p>3</p>
                <span>Answer</span>
            </div>
            <div className="all-option">
                <p>11</p>
                <span>views</span>
            </div>

        </div>
    </div>
    <div className="question-answer">
    <div style = {{
        marginTop: "-94px",
    }}>
       <div className="que">
        <Link >How to preorder traverse a min heap using array indexing </Link>
        </div>
        <div style={{
            width: "70%",
            margin: "10px"
        }}>
            <div>
            I created a standard min heap class. I am trying to figure out a way to index the values in the min heap in preorder traversal format. The only way I have seen it done is using left and right pointers. But the "nodes" in my array are not nodes just values. Is it possible to do preorder traversal on a min heap array using indexing?
            </div>
        </div>
        <div style={{
            display:"flex",
            padding:"10px 12px"
            
        }}>
            <span className="question-tags1">python</span>
            <span className="question-tags2">heap</span>
            <span className="question-tags3">preorder</span>
        </div>
        </div>
        <div className="author">
            <small>Timestamp</small>
           <div className="author-details">
            <Avatar/>
            <p>User name</p>
           </div>
        </div>
    </div>

    {/* Q3 start */}
    <div className="questions-left">
        <div className="all-options">
            <div className="all-option">
                <p>4</p>
                <span>Votes</span>
            </div>
            <div className="all-option">
                <p>4</p>
                <span>Answer</span>
            </div>
            <div className="all-option">
                <p>16</p>
                <span>views</span>
            </div>

        </div>
    </div>
    <div className="question-answer">
    <div style = {{
        marginTop: "-94px",
    }}>
        <div className="que">
        <Link>How to find a suitable index for a given value in an array implemented min binary heap? </Link>
        </div>
        <div style={{
            width: "90%",
            marginTop: "20px"
            
        }}>
            <div >
            I need to find a suitable index for a given value X (but not to actually insert X) in an array implemented min binary heap. How can I do this in O(log log n) time?
            </div>
        </div>
        <div style={{
            display:"flex",
            padding:"10px 12px"
            
        }}>
            <span className="question-tags1">data-structure</span>
        </div>
        </div>
        <div className="author">
            <small>Timestamp</small>
           <div className="author-details">
            <Avatar/>
            <p>User name</p>
           </div>
        </div>
    </div>

{/* Q4 start */}
<div className="questions-left">
        <div className="all-options">
            <div className="all-option">
                <p>0</p>
                <span>Votes</span>
            </div>
            <div className="all-option">
                <p>7</p>
                <span>Answer</span>
            </div>
            <div className="all-option">
                <p>18</p>
                <span>views</span>
            </div>

        </div>
    </div>
    <div className="question-answer">
    <div style = {{
        marginTop: "-94px",
    }}>
       <div className="que">
        <Link >How to remove the smallest element in a Binary Search Tree in python? </Link>
        </div>
        <div style={{
            width: "70%",
            margin: "10px"
        }}>
            <div>
            Using recursion, I am asked to create a method for removing the smallest element of a BST in Python. I cannot use the already implemented function remove. Have tried several times with similar codes, even copying and editing the remove function. However, the smallest node it is not removed.
            Can anyone help me with this?
            </div>
        </div>
        <div style={{
            display:"flex",
            padding:"10px 12px"
            
        }}>
            <span className="question-tags1">python</span>
            <span className="question-tags2">heap</span>
            <span className="question-tags3">preorder</span>
        </div>
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

export default DS