import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import useMarvelDetails from '../hooks/useMarvelDetails'
import Loading from '../components/loading';

const MarvelDetails = () => {
  const {id} = useParams()
  const [loading,setLoading] = useState(true)
  const {story} = useMarvelDetails(id)
   useEffect(() => {
    if (story.results){
      setLoading(false)
      console.log('story',story)
    }
  }, [story]) 
  if(loading){
    return <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}><Loading></Loading></div>
  }
  
  return (
    <div className='container'>
      <div className='row' style={{border:"0px solid yellow",marginTop:"10px"}}>
      <div className='col-xs-12 col-md-6' /* className='imgContCont' */ >

        <div style={{width:"80%",height:"70vh",border:"0px solid green",marginRight:"-30px"}}>
        <img style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"10px"}} src={`${story.results && story.results[0]?.images[0]?.path}.${story.results && story.results[0]?.images[0]?.extension}`} alt="loading" />
        </div>
     
      </div>
      <div className=' col-xs-12 col-md-6'/*  className='detailTxt' */>
        <div className="titleAndDate">
          <div className='detailsTitle'>{story.results[0].title}</div>
        </div>
       
        <div className="description">
          {story.results[0]?.textObjects && story.results[0]?.textObjects[0]?.text}
        </div>
        <div style={{fontWeight:"bold",marginTop:"10px"}}>
          Price : {`$${story.results[0]?.prices[0]?.price}`}
        </div>
        <div className="checkButtonCont">
          <a href={story.results[0]?.urls[0]?.url} className='checkButton'>
          Check Store
          </a>
         
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default MarvelDetails