import React, { useState, useRef,useEffect } from 'react'

import { addDoc, collection,serverTimestamp,onSnapshot,query,where, doc, orderBy } from "firebase/firestore";
// import {BrowserRouter} from 'react-router-dom'
import "./App.css";
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie';
import { Chat } from './components/Chat';
import {signOut} from 'firebase/auth'
import {auth, db} from './firebase-config'
import logo from "./assets/logo3.png"
import arab from "./assets/arab.png"
import banner from "./assets/banner2.png"
const cookies = new Cookies();

const App = () => {

const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
const [rooms, setRooms] = useState(null) 

const roomInputRef = useRef(null)
  const signuserout = async () => {
     await signOut(auth);
     cookies.remove("auth-token");
     setIsAuth(false);
     setRooms(null);
}




if(!isAuth){


  return (
    
    <div><Auth setIsAuth={setIsAuth}/></div>
  )
}
return <div className='room'>
  {rooms ? (<Chat room={rooms}/>)
 : (




<div>


<div className="auth1">
  <div className="container1">
<div className="navbar1">
            <div className="img1"><img src={logo} alt="" /></div>
            <div className="infos1">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                </ul>
            </div>
            
            <div className="contact1">
            <span onClick={signuserout}>LogOut</span>
            </div>
          </div>
            
            <div className="main1">
                <div className="left1">
                    <h3>Your next great chat starts here!</h3>
                    <h1>"Hey there, new chatter! Thrilled to have you join our dynamic chat zone. Jump right in, spark conversations, and let's create an engaging community together!"</h1>
                       <input ref={roomInputRef} placeholder='Enter Room Name' />
                        <button onClick={() => setRooms(roomInputRef.current.value)}>Enter Chat</button> 
                    
                
                </div>
                 <div className="imag1">
                <div className="bg-color1"></div>
                    <img src={banner} alt="" />
                </div>
                </div>
</div>
            </div>

</div>
 )}
 <span className='sign-out' onClick={signuserout} >Sign Out</span>
</div> 


}

export default App;