import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import libraryLogo from '../assets/Library.svg'

export default function Nav() {
  return (
    <nav >
        <div className="nav__container">
        <a href="/">
            <img src={libraryLogo} alt="" className='logo' />
        </a>
        <ul className='nav__links' >
            <li className='nav__list'>
                <a href="/" className='nav__link' >
                    Home
                </a>
            </li>
            <li className='nav__list'>
                <a href="/" className='nav__link' >
                    Books
                </a>
            </li>
            <button className='btn__menu' >
            <FontAwesomeIcon icon="bars" />
            </button>

            <li className="nav__icon">
                <a href="" className='nav__link' >
                    <FontAwesomeIcon icon="shopping-cart" />
                </a>
                <span className='cart__length' >3</span>
            </li>
        </ul>
        </div>
    </nav>
  )
}
