import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.svg';
import './styles.css';

const Profile: React.FC = () => {
  return (
    <div id='ContainerP'>
      <img src={Logo} className='imgLogo'/>
      < div id='Tab' className="desktop">
        <div className="wrapper">
          <span className="offset" />
        </div>
      </div>  
    </div>    
    
  );
}

export default Profile;