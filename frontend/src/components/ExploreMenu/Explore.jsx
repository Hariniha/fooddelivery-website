import React from 'react'
import "./Explore.css"
import { menu_list } from '../../assets/assets'

const Explore = ({category,setCategory}) => {
  return (
  <div className="explore-menu" id='explore-menu'>
    <h1>Explore Our Menu</h1>
    <p>Choose from a diverse menu featuringa delectable arrayof dishes crafted with the finest ingredient and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, One delicious meal at a time.</p>
    <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name ?"All":item.menu_name)}  key={index}  className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""}src={item.menu_image} alt=""/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    <hr/>
  </div>
  )
}

export default Explore