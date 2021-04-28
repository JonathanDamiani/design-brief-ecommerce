// Copyright © 2021 Jonathan Dean Damiani
import React from 'react';
import './Main.css';
import { Header, LoginForm} from '../../components';

const Main = () => {
  return (
    <div className="main-page">

      <Header isTransparent={true}/>

      <div className="container">
        <div className="main-side">
          <h2 className="main-title">Deliciously healthy prepared meals</h2>        
          <p className="main-subtitle">Delivered Right to Your Door</p>
          <LoginForm/>
        </div>  
      </div> 
    </div>
  )
}

export default Main;
