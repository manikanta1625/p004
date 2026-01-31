

import React, { useEffect, useState } from 'react';
import './App1.css';
import { APIURL, callApi } from './lib';

const App1 = () => {
    const [data, setData] = useState([]);
    const [showpopup, setShowpopup] = useState(null);
    const [userdata, setUserdata] = useState(null);

    useEffect(()=>{
        callApi("GET", APIURL, "", getData);
    },[]);

    function getData(res){
        setData(res);
    }

    function showUserInfo(user){
        setShowpopup(true);
        setUserdata(user);
    }

    function closeUserInfo(){
        setShowpopup(null);
    }

    const IMGURL = import.meta.env.BASE_URL;
    return (
        <div className='app'>
        <div className='header'><style>{'.header { text-align: center; }'}</style>View Users</div>
        <div className='section'>
          <table>
            <thead>
              <tr>
                <th style={{'width':'50px'}}>ID</th>
                <th style={{'width':'200px'}}>Name</th>
                <th style={{'width':'150px'}}>Username</th>
                <th style={{'width':'300px'}}>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((user)=>(
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td style={{'text-align' : 'left'}}><img src={IMGURL + "nnn.gif"} alt='' onClick={()=>showUserInfo(user)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='footer'><style>{'.footer { text-align: center; }'}</style>Copyright @ 2026. All rights reserved.</div>

        {showpopup && <div className='overlay'>
          <div className='popup'>
            <button onClick={()=>closeUserInfo()}>X</button>
            <p>
              <span>ID</span>
              <span>{userdata.id}</span>
            </p>
            <p>
              <span>Name</span>
              <span>{userdata.name}</span>
            </p>
            <p>
              <span>Username</span>
              <span>{userdata.username}</span>
            </p>
            <p>
              <span>Email ID</span>
              <span>{userdata.email}</span>
            </p>
            <p>
              <span>Address</span>
              <span>{userdata.address.street}, {userdata.address.city} - {userdata.address.zipcode}</span>
            </p>
            <p>
              <span>Phone</span>
              <span>{userdata.phone}</span>
            </p>
            <p>
              <span>Website</span>
              <span>{userdata.website}</span>
            </p>
          </div>
        </div>}    
      </div>
    );
}

export default App1;