import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import useAnimeDetails from '../hooks/useAnimeDetails'

const AnimeDetails = () => {
  const {id} = useParams()
  const [loading,setLoading] = useState(true)
  const {anime} = useAnimeDetails(id)
   useEffect(() => {
    if (anime){
      setLoading(false)
      console.log('anime',anime)
    }
  }, [anime]) 
  if(loading){
    return <div>loading...</div>
  }
  
  return (
    <div className='container'>
   
      <div className='row' style={{border:"0px solid yellow",marginTop:"10px"}}>
      <div className='col-xs-12 col-md-6' /* className='imgContCont' */ >

        <div style={{width:"80%",height:"70vh",border:"0px solid green",marginRight:"-30px"}}>
        <img style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"10px"}} src={`${anime?.attributes?.posterImage?.medium}`} alt="loading" />
        </div>
     
      </div>
      <div className=' col-xs-12 col-md-6'/*  className='detailTxt' */>
        <div className="titleAndDate">
          <div className='detailsTitle'>{anime?.attributes?.canonicalTitle}</div>
        </div>
       
        <div className="description">
          {anime?.attributes?.description}
        </div>

        <div className="checkButtonCont">
          <a href={`https://www.youtube.com/watch?v=${anime?.attributes?.youtubeVideoId}`} className='checkButton'>
          Watch Trailer
          </a>
         
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default AnimeDetails