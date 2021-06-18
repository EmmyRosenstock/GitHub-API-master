import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import { useModal } from 'react-brave-modal';
import ProfileData from '../../Components/ProfileData';
import Modal from '../../Components/ProfileData/Modal';
import { APIRepo, APIUser } from '../../@types';

import  background from '../../assets/background.svg';

interface Data{
    user?: APIUser;
    repos?: APIRepo[];
    error?: string;
  }
  
const Results: React.FC=()=>{
  
    const { showModal } = useModal(); 
 const { username = '' } = useParams();
 const [ data, setData ] = useState<Data>();
      
        useEffect(() => {
          Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch(`https://api.github.com/users/${username}/repos`),
      
          ]).then(async responses => {
            const [userResponse, reposResponse] = responses;
      
            if (userResponse.status === 404){
              setData({ error: 'Resultados para'})
              return;
            }
      
            const user = await userResponse.json();
            const repos = await reposResponse.json();
      
            setData({
              user,
              repos,
            });
          });
        }, [username]);
      
      
        if (data?.error){
          return <h1>{data.error}</h1>
        }
      
        if (!data?.user || !data?.repos){
          return <h1>Loading...</h1>
        }
      
        const TabContent = () => (
          <div className="content">
           
          </div>
        )
        return (
            < div id='ContainerP'>
              <img src={background} className='imgBack'/>
              < div id='Tab' className="desktop">
                <div className="wrapper">
                  <span className="offset" />
                  <div />
                </div>
        
                <span className="line"/>
              </div>
              < div className='Main'>
                < div className='card'>
                  <ProfileData
                   avatarUrl={data.user.avatar_url}
                   username={data.user.login}
                    name={data.user.name}
                    html_url={data.user.html_url}
                    score ={data.user.score}
                   
                   />
             </div>
                <div className='modal'>
               <Modal
                avatarUrl={data.user.avatar_url}
                username={data.user.login}
                 name={data.user.name}
                 html_url={data.user.html_url}
                 created_at= {data.user.created_at}
                 followers= {data.user.followers}
                  following={data.user.following}
                  />
                      
                   </div> 
                 
                </div>
              </div>
            
          );
        
}
export default Results;