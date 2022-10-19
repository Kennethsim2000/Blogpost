import "./topbar.css";
import Fragment from 'react';
import Kenneth from '../assets/kenneth.jpg';

export default function TopBar() {
  return (
            <div className="top">
                <div className="topLeft">
                    <i className="topIcon fa-brands fa-square-facebook"></i>
                    <i className="topIcon fa-brands fa-square-twitter"></i>
                    <i className="topIcon fa-brands fa-square-instagram"></i>
                    <i className="topIcon fa-brands fa-square-github"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="listItem">HOME</li>
                        <li className="listItem">ABOUT</li>
                        <li className="listItem">CONTACT</li>
                        <li className="listItem">WRITE</li>
                        <li className="listItem">LOGOUT</li>
                    </ul>
                </div>
                <div className="topRight">
                    <img 
                        className="topImg"
                        src={Kenneth}
                        alt=""
                    />
                    <i className="topSearchIcon fas fa-search"></i>
                </div>
            </div>
  );    
}
