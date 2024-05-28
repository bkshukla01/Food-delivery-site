import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

function ExploreMenu({category,setCetegory}) {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1> Explore our Menu</h1>
            <p className='explore-menu-text'>Embark on a culinary journey with our exquisite menu, offering a delectable fusion of flavors and gastronomic delights. Savor every bite and treat your senses to an unforgettable dining experience with us.</p>

            <div className="explore-menu-list">
                {
                menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=> setCetegory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
                            <img src={item.menu_image} alt="" className={category===item.menu_name?"active":""} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
            </div>
            <hr/>
        </div>
    )
}

export default ExploreMenu