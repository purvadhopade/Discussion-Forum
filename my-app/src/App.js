import React, { useEffect } from 'react';
import './App.css';
import Header from './Component/Header/Header';
// import DBMS from './Component/SideBar/DBMS';
import SideBar from './Component/SideBar';
import ViewQuestion from './Component/ViewQuestion';
import Question from './Component/Add-Question/Question';
import Auth from './Component/Auth';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
// import AllQuestions from './Component/SideBar/AllQuestions.js';


import { 
  BrowserRouter as  Router, Route, Routes, Navigate,
  } from 'react-router-dom'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      // console.log(authUser);
    });
  }, [dispatch]);


  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );


  return (
    <div className='App'>
      <Router>
      <Header />
      {/* <DBMS/> */}
      
      <Routes>
            <Route  path="/"element = {<Auth/>}/>
            <Route  path="/sidebar"element = {<SideBar/>}/>
            {/* <Route  path="dbms"element = {<DBMS/>}/> */}
            <Route  path="/add-question"element = {<Question/>}/>
            <Route  path="/question"element = {<ViewQuestion/>}/>
           


      </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;
