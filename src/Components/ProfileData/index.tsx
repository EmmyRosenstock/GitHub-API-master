import React from 'react';
import { useModal } from 'react-brave-modal';
import Modal from './Modal';
import  './styles.css';

interface Props{
    username: string;
    name: string;
    avatarUrl: string;
    html_url:undefined;
    score:undefined;
}
const ProfileData: React.FC<Props> = ({
    username,
    name,
    avatarUrl,
   html_url,
   score,
   
}) => {
  
return (
      <div id='Containerpf'>
          <div className='Flex'>
              < div className='Avatar'>
                  <img  src={avatarUrl}/>
              </div>
              <div className='infor'>
                  <h1>{name}</h1>
                  <h2>{username}</h2>
              </div>
          </div>

          < div className='Row'>
              <li>
                  <div className='url'>
                  <a>{html_url}</a>
                  </div>
              </li>
              <div className='Score'>
              <b>{score}</b>
                <span>Score:</span>
             
              </div>
             
          </div>
         <button className='vemais'> Ver Mais</button>
          
      </div>
  );
}


export default ProfileData;