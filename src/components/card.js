import React from 'react'
import {useNavigate} from 'react-router-dom'

const Card = ({source,title,desc,url,id}) => {
  const navigate = useNavigate()
  return (
    <div  style={{flexDirection:"column",border:"0px solid red",display:"flex",justifyContent:"space-between",height:"90%"}}>
    <div onClick={() => navigate(`/${url}/${id}`)} className='char_card'>{<img style={{width:"100%",height:"100%",objectFit:"cover"}} src={source} alt="loading" />}</div>
   <div className='cardText'>
   <div className='cardTitle'>{title}</div>
    <div className='cardSubText'>{desc}</div>
   </div>
   
    </div>
  )
}

export default Card