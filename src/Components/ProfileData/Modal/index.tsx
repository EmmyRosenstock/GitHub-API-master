import React from 'react';


interface Props{
    username: string;
    name: string;
    avatarUrl: string;
    html_url:undefined;
    created_at:undefined;
    followers:undefined;
    following:undefined;
    
}
const ProfileData: React.FC<Props> = ({
    username,
    name,
    avatarUrl,
   html_url,
   created_at,
   followers,
   following
   
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
              <div className='data'>
              <b>{created_at}</b>
                <span>Criado em:</span>
             
              </div>
              <div className='data'>
              <b>{created_at}</b>
                <span>Criado em:</span>
             
              </div>
              <div className='followers'>
              <b>{followers}</b>
                <span>Seguidores:</span>
             
              </div>
              <div className='following'>
              <b>{following}</b>
                <span>Seguindo:</span>
             
              </div>
          </div>
         
          
      </div>
  );
}


export default ProfileData;