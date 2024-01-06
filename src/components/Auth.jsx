import {auth, provider, db} from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import "../styles/navbar.css";
// import "../styles/Auth.css";
import banner from "../assets/banner2.png"
import arab from "../assets/arab.png"
import logo from "../assets/logo3.png"
import { async } from "@firebase/util";


import Cookies from 'universal-cookie'
import React from "react";
const cookies = new Cookies()

export const Auth = (props) => {
    const {setIsAuth} = props;





     const signInWithGoogle = async () => {
        try{
             const result = await signInWithPopup(auth, provider);
             console.log(result);
       cookies.set("auth-token", result.user.refreshToken)
       setIsAuth(true)
        }
        catch (err){
            console.log(err);
        }

        
    };
    
    return (
      <div className="auth">
         <div className="container">
          <div className="navbar">
            <div className="img"><img src={logo} alt="" /></div>
            <div className="infos">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    
                </ul>
            </div>
            <div className="contact">
            <span onClick={signInWithGoogle}>Sign In With Goggle</span>
            </div>
          </div>
            
            <div className="main">
                <div className="left">
                    <h3>Chat, connect, captivate.</h3>
                    <h1>"Welcome, wordsmith! Embrace the art of conversation in our chat community. Dive into discussions, share your thoughts, and let's weave tales through our words together!"</h1>
                    <p>Join now and be part of our chat community's ever-evolving story!"</p>
                   
                </div>
                 <div className="img">
                <div className="bg-color"></div>
                    <img src={arab} alt="" />
                    
                </div>
            </div>


            <div className="middle-info">
                <div className="img">
                <div className="bg-color"></div>
                    <img src={arab} alt="" />
                    
                </div>
                <div className="abt-chat">
                <h2>Dive into discussions, share your thoughts, and let's weave tales through our words together!</h2>
                    {/* <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident a quisquam ex.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio!</p> */}
                    <div className="delivery">
                        <h3>Organized Information<span className="p-1"><p>Keep discussions streamlined with organized threads and group chats. Easily find past conversations, reference important information, and keep track of ongoing topics without the clutter.</p></span></h3>
                        <h3>Real-Time Communication<span className="p-1"><p>Stay connected instantly with friends, family, or colleagues irrespective of distance. Whether it's a quick message or a group discussion, the chat app keeps everyone in sync in real time.</p></span></h3>
                    </div>
                    <div className="access">
                    <h3>Customer Support and Assistance<span className="p-1"><p>Receive prompt assistance and support through chat-based customer service. Instant communication streamlines issue resolution and enhances overall user experience</p></span></h3>
                        <h3>Multi-Platform Synchronization<span className="p-1"><p>Seamlessly switch between devices while maintaining continuity in conversations. Whether on your phone, tablet, or computer, the chat app ensures synchronization across all platforms.</p></span></h3>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="left-foot">
                    <img src={logo} alt=""/>
                    <h2>Revolutionizing communication, our text app offers a seamless platform for instant message.</h2>
                </div>
                <div className="mid-foot">
                    <h1>Get In Touch</h1>
                    <ul>
                        <li>landmark</li>
                        <li>info@gmail.com</li>
                        <li>+2348020928198</li>
                        <li>7:00 am to 9:00 pm</li>
                    </ul>
                </div>
                <div className="right-foot">
                    <h1>Support</h1>
                    <ul>
                        <li>Help Center</li>
                        <li>Career</li>
                        <li>FAQS</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
</div>
        </div>
    )
}