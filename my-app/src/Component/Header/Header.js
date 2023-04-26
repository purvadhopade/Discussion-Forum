import React  from 'react';
import './CSS/Header.css'; import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import { Avatar }from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from "../../firebase";


function Header() {
  const user = useSelector(selectUser)
  //const history = createBrowserHistory();
  // const navigate = useNavigate()

  return (
  <header>
    <div className="header-container">
<div className="header-left">
{/* <button onClick={() => navigate("/")}> */}
<Link to = '/sidebar'>
<img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
  {/* <img  src="https://o.remove.bg/downloads/5cad6bb3-c6e3-44b5-b7d8-577c7f9f0888/image-removebg-preview.png" alt="logo" /> */}
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
  <span onClick={() => {
              auth.signOut();
              // navigate("/add-question");
              
            }}>
              <Avatar  />
            </span>

    <InboxIcon/>
    <svg
              aria-hidden="true"
              className="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}>
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
  </div>
</div>
    </div>
  </header>
  )
}

export default Header;