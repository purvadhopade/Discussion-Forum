import React from 'react';
import './CSS/Header.css'; import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import { Avatar }from '@mui/material';
function Header() {
  // const navigate = useNavigate()
  return <header>
    <div className="header-container">
<div className="header-left">
{/* <button onClick={() => navigate("/")}> */}
<Link to = '/'>
  <img  src="https://o.remove.bg/downloads/5cad6bb3-c6e3-44b5-b7d8-577c7f9f0888/image-removebg-preview.png" alt="logo" />
  </Link>
  <h3>Products</h3>
</div>
<div className="header-middle">
  <div className="header-search-container">
    <SearchIcon/>
    <input type="text" placeholder='Search' />
  </div>
</div>
<div className="header-right">
  <div className="header-right-container">
    <Avatar/>
    <InboxIcon/>
  </div>
</div>
    </div>
  </header>
}

export default Header;