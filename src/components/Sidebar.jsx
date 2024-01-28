// import React from 'react'
import { useState } from 'react';
import '../styles.css';
import './Sidebar.css'


const Sidebar = () => {

 const [expand, setExpand] = useState(false);

 const expandSidebar = () => {
    setExpand(!expand);
 }
  return (
    <>
    <nav className="sidebar locked">
      <div className="logo_items flex">
        <span className="nav_image">
          <img onClick={expandSidebar} className="baba_logo" src="logos/site_logo.png" alt="logo_img" />
        </span>
        <span className="logo_name"> CampLink</span>
        <i className="bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar"></i>
        <i className="bx bx-x" id="sidebar-close"></i>
      </div>
    </nav>  

    <div className={expand ? "expand" : "contract"}>
      <div className={expand ? "menu_container_expand": "menu_container_contract"}>
        <div className={expand ? "menu_items" : "menu_items_contract"}>
          <ul className={expand ? "menu_item": "menu_item_contract"}>
            <div className={expand ?"menu_title flex":"menu_title_contract"}>
                <img className='icon' src="icons/home_vector.svg" alt="" />
              <span className={expand ?"title":"title_contract"}>DashBoard</span>
            </div>
          </ul>
          <ul className={expand ? "menu_item": "menu_item_contract"}>
            <div className={expand ?"menu_title flex":"menu_title_contract flex"}>
                <img className='icon' src="icons/likes_vector.svg" alt="" />
              <span className={expand ?"title":"title_contract"}>Events</span>
            </div>
          </ul>
          <ul className={expand ? "menu_item": "menu_item_contract"}>
            <div className={expand ?"menu_title flex":"menu_title_contract flex"}>
                <img className='icon' src="icons/likes_vector.svg" alt="" />
              <span className={expand ?"title":"title_contract"}>News</span>
            </div>
          </ul>
          <ul className={expand ? "menu_item": "menu_item_contract"}>
            <div className={expand ?"menu_title flex":"menu_title_contract flex"}>
                <img className='icon' src="icons/likes_vector.svg" alt="" />
              <span className={expand ?"title":"title_contract"}>Sports</span>
            </div>
          </ul>
          <ul className={expand ? "menu_item": "menu_item_contract"}>
            <div className={expand ?"menu_title flex":"menu_title_contract flex"}>
                <img className = "icon" src="icons/history_vector.svg" alt="" />
              <span className={expand ?"title":"title_contract"}>Notice</span>
            </div>
            
          </ul>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Sidebar