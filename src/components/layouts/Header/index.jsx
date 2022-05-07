import React from 'react'
import { MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './styles.css'
import logo from '../../../assets/logo.png'

export const Header = () => {
   return (
      <header className="Header">
         <div className="Header-container wrapper">
            <Link to="/">
               <div className="Header__logo">
                  <img src={logo} alt="logo" />
               </div>
            </Link>
            <div className="Header__search">
               <input type="text" placeholder="¿Que planta quieres buscar?" />
               <button>
                  <MdSearch />
               </button>
            </div>
         </div>
      </header>
   )
}
