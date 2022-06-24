import React,{useState} from 'react'
import { FaSearch,FaShare} from 'react-icons/fa';

export const TopNav = ({setSearch, ...props}) => {
  const [icon_color,seticon_color] = useState("grey")
  return (
    <div className='top_nav_components'>
        <div className='search_bar_container'>
        <FaSearch className="search_icon"  size={18}  color={icon_color}/>
            <input onChange={(e)=>setSearch(e.target.value)} placeholder='search' onBlur={()=>{seticon_color("grey")}}  onFocus={()=>{seticon_color("rgb(29, 161, 242)")}} className='search' type="text" />
        </div>
        <div className='user_area'>
          
            <div>{}</div>
        </div>
    </div>
  )
}
