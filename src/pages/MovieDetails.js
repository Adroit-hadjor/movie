import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/loading';
import useMovieDetails from '../hooks/useMovieDetails'


const MovieDetails = () => {
  const {id} = useParams()
  const [loading,setLoading] = useState(true)
  const {movie,movieImgURL} = useMovieDetails(id)
  useEffect(()=>{
    if(movie){
      console.log("id",movie)
    }
    
  },[movie])
  return (
    <div className='container'>
      <div className='row' style={{border:"0px solid yellow",marginTop:"10px"}}>
      <div className='col-xs-12 col-md-6' /* className='imgContCont' */ >
        <div  className='imgCont'>
        <img style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"10px"}} src={`${movieImgURL}${movie?.poster_path}`} alt="loading" />
        </div>
     
      </div>
      <div className=' col-xs-12 col-md-6'/*  className='detailTxt' */>
        <div className="titleAndDate">
          <div className='detailsTitle'>{movie?.title}</div>
        </div>
       
        <div className="description">
          {movie?.overview}
        </div>
 
        <div className="checkButtonCont">
          <a href={`https://www.youtube.com/watch?v=${ movie.videos?.results && movie.videos?.results[0]?.key}`} className='checkButton'>
          Watch Trailer 
          </a>
          <a href={`${ movie?.homepage}`} className='buyButton'>
          View on Netflix 
          </a>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default MovieDetails