import React from 'react';
import { Link } from 'react-router-dom';

import './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RapoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
  
}) => {
  const languageClass = language ? language.toLocaleLowerCase() : 'other';


  return (
    <div id='Container'>
      < div className='Topside'>
        <header>
          < div className='RepoIcon'/>
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>
        <p>

        </p>
      </div>

      < div className='Botside'>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <div className='StarIcon' />
            <span>{stars}</span>
          </li>
          <li>
            < div className='ForkIcon' />]
            <span>{forks}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RapoCard;