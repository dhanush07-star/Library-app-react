import React from 'react'
import UnderBooks from '../assets/Undraw_Books.svg'


export default function Landing() {
  return (
    <section id="landing">
        <header>
            <div className="header_container">
                <div className="header__description">
                    <h1>India's Most awarded online library platform</h1>
                    <h2>Friend your dream book with <span className='purple' >Library</span></h2>
                    <a href="#features">
                      <button className='btn' >Browse books</button>
                    </a>
                </div>
                <figure className='header__img--wrapper' >
                  <img src={UnderBooks} alt="" />
                </figure>
            </div>
        </header>
    </section>
  )
}
