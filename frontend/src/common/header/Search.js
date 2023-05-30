import React from 'react'
// import logo from "../../component/assets/images/logo.svg"
import logo from "../../component/assets/images/logo.png"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>
      
      <>
      <section className='search'>
        <div className='container c_flex'>
          <div >
            <img src={logo} alt='Brand Logo' style={{ width: "100px", height: "100px" }}/>            
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>0</span>
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
    </>
  )
}

export default Search
