import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { FiSearch } from "react-icons/fi";
import  './styles.css';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit (event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLocaleLowerCase().trim());
  }

  return (
    <div id='Container'>
     <img src={Logo}/>
      <form onSubmit={handleSubmit}>
        <input placeholder="Pesquisa" 
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
        />
        <FiSearch/>
      </form>
    </div>
  )
}

export default Header;